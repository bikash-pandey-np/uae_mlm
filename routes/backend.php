<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\LoginController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\DepositInfoController;
use App\Http\Controllers\Backend\CustomerController;
use App\Http\Controllers\Backend\DepositRequestController;
use App\Http\Controllers\Backend\WithdrawController;
use App\Http\Controllers\Backend\TradeController;

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
        Route::post('/logout', [LoginController::class, 'handleLogout'])
            ->name('admin.logout');

        Route::prefix('deposit-info')->group(function () {
            
            Route::get('/', [DepositInfoController::class, 'getPage'])
            ->name('admin.deposit-info');
            
            Route::get('/create', [DepositInfoController::class, 'getCreatePage'])
            ->name('admin.create.deposit-info');

            Route::get('/update/{id}', [DepositInfoController::class, 'getUpdatePage'])
            ->name('admin.update.deposit-info');
        
            Route::post('/update/{id}', [DepositInfoController::class, 'update']);
            
            Route::post('/create', [DepositInfoController::class, 'store']);
            
        });
        Route::get('/customers', [CustomerController::class, 'getPage'])
            ->name('admin.customers');
        
        Route::get('/deposit-requests', [DepositRequestController::class, 'index'])
            ->name('admin.deposit-requests');
        Route::get('/deposit-request-detail/{code}', [DepositRequestController::class, 'getSingle'])
            ->name('admin.single-deposit-requests');
        Route::get('/add-deposit-request', [DepositRequestController::class, 'getAddDepositPage'])
            ->name('admin.add.deposit-requests');
        Route::post('/add-deposit-request', [DepositRequestController::class, 'store']);

        Route::post('/approve-deposit', [DepositRequestController::class, 'approveDeposit'])
            ->name('admin.approve.deposit');
        Route::post('/reject-deposit', [DepositRequestController::class, 'rejectDeposit'])
            ->name('admin.reject.deposit');

        Route::get('/withdraw-requests', [WithdrawController::class, 'index'])
            ->name('admin.withdraw-requests');

        Route::prefix('trades')->group(function () {
            Route::get('/', [TradeController::class, 'index'])
                ->name('admin.trades');
            Route::post('/pass', [TradeController::class, 'passTrade'])
                ->name('admin.pass_trade');

            Route::post('/fail', [TradeController::class, 'failTrade'])
                ->name('admin.fail_trade');
        });
    });
});
