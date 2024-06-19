<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\DepositRequest;
use App\Models\WithdrawRequest;
use App\Models\Customer;

class DashboardController extends Controller
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
    function getDashboard() {
       
        return Inertia::render('Frontend/Dashboard', [
            'balance' => Customer::where('id', auth()->guard('customer')->user()->id)->first()->balance,
            'total_deposit_amount' => $this->getTotalDeposit(),
            'pending_deposit' => $this->getPendingDeposit(),
            'total_withdraw' => $this->getTotalWithdraw(),
            'total_pending_withdraw' => $this->getPendingWithdraw(),
            'username' => auth()->guard('customer')->user()->full_name

        ]);
    }
}
