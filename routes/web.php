<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Hello');
})->name('home');

Route::get('/impressum', function () {
    return Inertia::render('Impressum');
})->name('impressum');

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{slug}', [ProjectController::class, 'show'])->name('projects.show');

Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'send'])->middleware('throttle:5,1');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
