<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components
use App\Http\Controllers\Frontend\AuthController;

Route::get('/', function () {
    return Inertia::render('Frontend/Homepage'); 
});

Route::get('/register', function(){
    return Inertia::render('Frontend/Register');
})->name('register');
Route::post('/register', [AuthController::class, 'register']);


Route::get('/login', function () {
    return Inertia::render('Frontend/Login'); 
})->name('login');

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth.guard:customer'])->group(function () {
    // Protected routes for authenticated customers
    Route::get('/dashboard', function(){
        return Inertia::render('Frontend/Dashboard'); 
    })->name('dashboard');
});

include 'backend.php';