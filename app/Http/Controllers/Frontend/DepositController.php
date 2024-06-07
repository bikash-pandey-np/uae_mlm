<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\DepositInfo;
use Validator;

class DepositController extends Controller
{
    public function getPage(Request $request)
    {
        $depositInfo = DepositInfo::whereIn('currency', ['INR', 'USDT'])
            ->where('is_active', true)
            ->inRandomOrder()
            ->get();

        $inr_deposit_info = $depositInfo->where('currency', 'INR')->first();
        $usdt_deposit_info = $depositInfo->where('currency', 'USDT')->first();

        return inertia('Frontend/DepositForm', [
            'inr_deposit_info' => $inr_deposit_info,
            'usdt_deposit_info' => $usdt_deposit_info,
        ]);
    }

    public function processDeposit(Request $request)
    {
        $messages = [
            'amount.required' => 'Enter amount',
            'amount.regex' => 'Only 2 digits after decimal is supported',
            'amount.numeric' => 'Amount must be a valid number',
            'currency.in' => 'Currency must be either INR or USDT',
            'deposit_info.id.required' => 'Deposit info ID is required',
            'deposit_info.id.exists' => 'Invalid deposit info ID',
        ];
        $validatedData = Validator::make($request->all(), [
            'amount' => [
                'required',
                'regex:/^\d+(\.\d{1,2})?$/',
                'numeric',
            ],
            'currency' => 'required|in:INR,USDT',
            'deposit_info.id' => 'required|exists:deposit_infos,id',
        ], $messages)->validate();


        
        if ($validatedData['currency'] === 'INR') {
            $messages['amount.min'] = "Minimum deposit amount for INR is Rs. 5000";
            Validator::make($request->all(), [
                'amount' => [
                    'required',
                    'numeric',
                    'min:5000'
                ],
            ], $messages)->validate();
        } elseif ($validatedData['currency'] === 'USDT') {
            $messages['amount.min'] = "Minimum deposit amount is 100 USDT";

            Validator::make($request->all(), [
                'amount' => [
                    'required',
                    'numeric',
                    'min:100'
                ],
            ], $messages)->validate();
        }

        $data = [
            'amount' => (float) sprintf("%.2f", $validatedData['amount']),
            'currency' => $validatedData['currency'], 
            'deposit_info_id' => $validatedData['deposit_info']['id']
        ];

        return back()->with('error', 'ok');
        
    }
}
