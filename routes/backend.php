<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Backend\LoginController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\DepositInfoController;


Route::prefix('backend')->group(function(){
    //login page 
    Route::get('/login', [LoginController::class, 'getLogin'])
        ->name('admin.login');
        
    Route::post('/login', [LoginController::class, 'handleLogin']);

    Route::middleware('auth.guard:web')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'getDashboardPage'])
            ->name('admin.dashboard');
        
        Route::get('/deposit-info', [DepositInfoController::class, 'getPage'])
            ->name('admin.deposit-info');
        
        Route::get('/create-deposit-info', [DepositInfoController::class, 'getCreatePage'])
            ->name('admin.create.deposit-info');
        
        Route::post('/create-deposit-info', [DepositInfoController::class, 'store']);
    });
    
        
});