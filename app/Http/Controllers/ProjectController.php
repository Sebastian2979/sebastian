<?php

namespace App\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = collect(config('projects'))
            ->map(fn ($p) => Arr::only($p, ['id','title','slug','excerpt','cover']));

        return Inertia::render('Projects/Index', [
            'projects' => $projects->values(),
        ]);
    }

    public function show(string $slug)
    {
        $project = collect(config('projects'))->firstWhere('slug', $slug);

        abort_if(!$project, 404);

        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);
    }
}
