<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\DepositInfo;

class DepositInfoController extends Controller
{
    function getPage() {
        $rows = DepositInfo::all();

        return Inertia::render('Backend/DepositInfo/DepositInfo', [
            'rows' => $rows
        ]);
    }

    function getCreatePage() {
        return Inertia::render('Backend/DepositInfo/CreateInfo');
    }

    function store(Request $request) {
        if (!auth()->check()) {
            return redirect()->route('admin.login');
        }
        $request->validate([
            'title' => 'required|string',
            'is_active' => 'nullable|boolean',
            'currency' => 'required|in:INR,USDT',
            'type' => 'required|in:flat,crypto',
            'wallet_address' => ($request->currency === 'USDT' || $request->type === 'crypto') ? 'required' : 'nullable',
            'network_type' => ($request->currency === 'USDT' || $request->type === 'crypto') ? 'required' : 'nullable',
            'flat_account_name' => ($request->currency === 'INR' || $request->type === 'flat') ? 'required' : 'nullable',
            'flat_bank_name' => ($request->currency === 'INR' || $request->type === 'flat') ? 'required' : 'nullable',
            'flat_account_no' => ($request->currency === 'INR' || $request->type === 'flat') ? 'required' : 'nullable',
            'deposit_instruction' => 'required|string',
        ]);

        
        // Store validated data into the database
    if(DepositInfo::create([
        'title' => $request->title,
        'is_active' => $request->is_active ?? false,
        'currency' => $request->currency,
        'type' => $request->type,
        'wallet_address' => $request->wallet_address ?? '',
        'network_type' => $request->network_type ?? '',
        'flat_account_name' => $request->flat_account_name ?? '',
        'flat_bank_name' => $request->flat_bank_name ?? '',
        'flat_account_no' => $request->flat_account_no ?? '',
        'deposit_instruction' => $request->deposit_instruction,
    ]))
    {
        return redirect()->route('admin.deposit-info')->with('success', 'Deposit Info added Successfully !');
    }
    else{
        return back()->with('error', 'Could not save Deposit Info !');

    }
    }
}
