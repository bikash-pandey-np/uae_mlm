<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\AuthController;
use App\Http\Controllers\Frontend\DepositController;
use App\Http\Controllers\Frontend\MarketController;
use App\Http\Controllers\Frontend\WithDrawController;
use App\Http\Controllers\Frontend\DashboardController;
use App\Http\Controllers\Frontend\PortfolioController;

include 'website.php';


Route::get('/', [DashboardController::class, 'getHomepage'])->name('homepage');


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


Route::get('/verify', [AuthController::class, 'getVerifyPage'])
    ->name('verify');
Route::post('/verify', [AuthController::class, 'verifyOtp']);

//protected routes 
Route::middleware(['auth.guard:customer'])->group(function () {
    //deposit history page 
    Route::get('/deposit-history', [DepositController::class, 'getDepositHistoryPage'])
        ->name('deposit-history');

    //price api for trade
    Route::get('/current-price', [MarketController::class, 'getPriceForTrade'])
        ->name('current-price');


   
        Route::post('/logout', [AuthController::class, 'logout'])
        ->name('customer_logout');
});

include 'backend.php';
