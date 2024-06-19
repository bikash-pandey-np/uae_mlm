<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\AuthController;
use App\Http\Controllers\Frontend\DepositController;
use App\Http\Controllers\Frontend\MarketController;
use App\Http\Controllers\Frontend\WithDrawController;
use App\Http\Controllers\Frontend\DashboardController;

Route::get('/', function () {
    return Inertia::render('Frontend/Homepage'); 
})->name('homepage');

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


//crypto Page
Route::get('/crypto', [MarketController::class, 'getCryptoPage'])
    ->name('market.crypto');
Route::get('/crypto-data', [MarketController::class, 'getCryptoData'])
    ->name('market.crypto-data');

Route::get('/shares', [MarketController::class, 'getSharePage'])
    ->name('market.shares');
Route::get('/shares-data', [MarketController::class, 'getShareData'])
    ->name('market.share-data');

//price api for trade
Route::get('/current-price/{slug}', [MarketController::class, 'getPriceForTrade'])
    ->name('current-price');


//protected routes 
Route::middleware(['auth.guard:customer'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'getDashboard'])->name('dashboard');

    Route::get('/deposit', [DepositController::class, 'getPage'])
        ->name('deposit');
    
    Route::post('/deposit', [DepositController::class, 'processDeposit']);

    //deposit history page 
    Route::get('/deposit-history', [DepositController::class, 'getDepositHistoryPage'])
        ->name('deposit-history');
    
    //trade 
    Route::get('/trade/{type}/{slug}', [MarketController::class, 'getTradePage'])
        ->name('trade');

    //withdraw page 
    Route::get('/withdraw', [WithDrawController::class, 'getWithdrawPage'])
        ->name('withdraw');
    Route::post('/withdraw', [WithDrawController::class, 'processWithdrawl']);
});

include 'backend.php';
