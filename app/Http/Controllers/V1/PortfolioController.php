<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use Auth;
use App\Models\DepositRequest;
use App\Models\WithdrawRequest;
use App\Models\Customer;

class PortfolioController extends Controller
{
    function getTotalDeposit() {
        $total_deposit_amount_inr = DepositRequest::where('deposited_by', auth()->guard('customer')->user()->id)
        ->where('currency', 'INR')
        ->sum('amount'); 
        $total_deposit_amount_usdt = DepositRequest::where('deposited_by', auth()->guard('customer')->user()->id)
        ->where('currency', 'USDT')
        ->sum('amount');
        
        $total_deposit = $total_deposit_amount_inr/84 + $total_deposit_amount_usdt;

        $total_deposit_formatted = number_format($total_deposit, 2);

        return $total_deposit_formatted;
    }

    function getPendingDeposit() {
        $total_deposit_amount_inr = DepositRequest::where('deposited_by', auth()->guard('customer')->user()->id)
        ->where('currency', 'INR')
        ->where('status', 'Pending')
        ->sum('amount'); 
        $total_deposit_amount_usdt = DepositRequest::where('deposited_by', auth()->guard('customer')->user()->id)
        ->where('currency', 'USDT')
        ->where('status', 'Pending')

        ->sum('amount');
        
        $total_deposit = $total_deposit_amount_inr/84 + $total_deposit_amount_usdt;

        $total_deposit_formatted = number_format($total_deposit, 2);

        return $total_deposit_formatted;
    }

    function getTotalWithdraw() {
        $total = WithdrawRequest::where('requested_by', auth()->guard('customer')->user()->id)
            ->sum('amount');
        return $total;
    }
    function getPendingWithdraw() {
        $total = WithdrawRequest::where('requested_by', auth()->guard('customer')->user()->id)
            ->where('status', 'Pending')
            ->sum('amount');
        return $total;
    }

    function getPortfolioPage() {
        return Inertia::render('V1/Portfolio', [
            'active' => 'portfolio',
            'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,
            'total_deposit_amount' => $this->getTotalDeposit(),
            'pending_deposit' => $this->getPendingDeposit(),
            'total_withdraw' => $this->getTotalWithdraw(),
            'total_pending_withdraw' => $this->getPendingWithdraw(),
        ]);
    }
}