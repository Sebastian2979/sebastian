<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function send(Request $request)
{
    $validated = $request->validate([
        'name'    => ['required','string','max:120'],
        'email'   => ['required','email','max:255'],
        'message' => ['required','string','max:4000'],
        'website' => ['nullable','size:0'], // Honeypot: muss leer sein
        'privacy' => ['accepted'],          // DSGVO-Checkbox
    ], [
        'website.size' => 'Spam erkannt.',
        'privacy.accepted' => 'Bitte bestätige die Datenschutzhinweise.',
    ]);

    if ($request->filled('website')) {
        return back()->withErrors(['message' => 'Unzulässige Anfrage.']);
    }

    Mail::to(config('mail.from.address'))->send(new ContactMessage(
        $validated['name'],
        $validated['email'],
        $validated['message']
    ));

    return back()->with('success', 'Danke! Deine Nachricht wurde gesendet.');
}

}
