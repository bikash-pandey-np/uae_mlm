<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\LoginController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\DepositInfoController;
use App\Http\Controllers\Backend\CustomerController;
use App\Http\Controllers\Backend\DepositRequestController;

Route::prefix('backend')->group(function(){
    // Login page 
    Route::prefix('login')->group(function(){
        Route::get('/', [LoginController::class, 'getLogin'])
            ->name('admin.login');
        Route::post('/', [LoginController::class, 'handleLogin']);
    });

    // Protected routes for authenticated users
    Route::middleware('auth.guard:web')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'getDashboardPage'])
            ->name('admin.dashboard');
        
        Route::get('/deposit-info', [DepositInfoController::class, 'getPage'])
            ->name('admin.deposit-info');
        
        Route::get('/create-deposit-info', [DepositInfoController::class, 'getCreatePage'])
            ->name('admin.create.deposit-info');
        
        Route::post('/create-deposit-info', [DepositInfoController::class, 'store']);

        Route::get('/customers', [CustomerController::class, 'getPage'])
            ->name('admin.customers');
        
        Route::get('/deposit-requests', [DepositRequestController::class, 'index'])
            ->name('admin.deposit-requests');
    });
});
