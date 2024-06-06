<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\AuthController;

Route::get('/', function () {
    return Inertia::render('Frontend/Homepage'); 
});

// Register routes 
Route::prefix('register')->group(function(){
    Route::get('/', function(){
        return Inertia::render('Frontend/Register');
    })->name('register');

    Route::post('/', [AuthController::class, 'register']);
});

// Login routes
Route::prefix('login')->group(function(){
    Route::get('/', function () {
        return Inertia::render('Frontend/Login'); 
    })->name('login');

    Route::post('/', [AuthController::class, 'login']);
});

Route::middleware(['auth.guard:customer'])->group(function () {
    Route::get('/dashboard', function(){
        return Inertia::render('Frontend/Dashboard'); 
    })->name('dashboard');
});

include 'backend.php';
