<?php 


use App\Http\Controllers\V1\RouteController;
use App\Http\Controllers\V1\PortfolioController;


Route::get('/dashboard', function(){
    return redirect()->route(('v1.homepage'));
})->name('dashboard');

Route::prefix('app')->group(function () {

    Route::middleware(['frontend', 'auth.guard:customer'])->group(function () {
        Route::get('/dashboard', [RouteController::class, 'getHomepage'])
            ->name('v1.homepage');
        Route::get('/deposit', [RouteController::class, 'getDeposit'])
            ->name('v1.deposit');
        Route::post('/deposit', [RouteController::class, 'processDeposit']);
        //trade 
        Route::get('/trade/{type}/{slug}', [RouteController::class, 'getTradePage'])
            ->name('v1.trade');

        
         //take trade
        Route::post('/take-trade', [RouteController::class, 'takeTrade'])
            ->name('v1.take_trade');
        Route::get('/portfolio', [PortfolioController::class, 'getPortfolioPage'])
            ->name('v1.portfolio');

         //withdraw page 
         Route::get('/withdraw', [RouteController::class, 'getWithdrawPage'])
            ->name('v1.withdraw');
        Route::post('/withdraw', [RouteController::class, 'processWithdrawl']);
        
        Route::get('/profile', [RouteController::class, 'profilePage'])
            ->name('v1.profile');
    });
});
