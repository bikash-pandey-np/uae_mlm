<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\AuthController;
use App\Http\Controllers\Frontend\DepositController;

Route::get('/', function () {
    return Inertia::render('Frontend/Homepage'); 
});

Route::get('/test', function(){
    return Inertia::render('Test');
})->name('test');

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


//protected routes 
Route::middleware(['auth.guard:customer'])->group(function () {
    Route::get('/dashboard', function(){
        return Inertia::render('Frontend/Dashboard'); 
    })->name('dashboard');

    Route::get('/deposit', [DepositController::class, 'getPage'])
        ->name('deposit');
    
    Route::post('/deposit', [DepositController::class, 'processDeposit']);

    //deposit history page 
    Route::get('/deposit-history', [DepositController::class, 'getDepositHistoryPage'])
        ->name('deposit-history');
});

include 'backend.php';
