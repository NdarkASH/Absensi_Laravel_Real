<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/pricing', function () {
    return Inertia::render('pricing');
});

Route::get('/docs', function () {
    return Inertia::render('docs');
});

Route::get('/blog', function () {
    return Inertia::render('blog');
});

Route::get('/about', function () {
    return Inertia::render('about');
});





Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('employees', EmployeeController::class);


require __DIR__.'/auth.php';
