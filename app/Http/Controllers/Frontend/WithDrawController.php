<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use Validator;
use Auth;
use App\Models\WithdrawRequest;
use Illuminate\Database\QueryException;

class WithDrawController extends Controller
{

    function getWithdrawPage() {
        return Inertia::render('Frontend/Withdraw');
    }

    function processWithdrawl(Request $request) {
        $rules = [
            'amount' => 'required|numeric|min:100|max:5000|regex:/^\d+(\.\d{1,2})?$/',
            'currency' => 'required|string|in:USDT',
            'wallet_address' => [
                'required',
                'string',
                function ($attribute, $value, $fail) {
                    // Validate TRC20 address format
                    if (!preg_match('/^T[a-zA-Z0-9]{33}$/', $value)) {
                        $fail('The ' . $attribute . ' must be a valid TRC20 address.');
                    }
                }
            ],
        ];

        $validatedData = $request->validate($rules);

        //check if user have balance for withdrawl 
        $user = Auth::guard('customer')->user();
        if(!($user->balance >= $request->amount))
        {
            return back()->with('error', 'Insufficient Balance');
        }

        //save request 
        $data = [
            "amount" => (float) sprintf("%.2f", $validatedData["amount"]),
            'currency' => 'USDT',
            'wallet_address' => $request->wallet_address,
            'requested_by' => Auth::guard("customer")->user()->id,
        ];

        try{
            $temp = WithdrawRequest::create($data);
            $code = WithdrawRequest::find($temp->id)->transaction_code;

            return back()->with(
                "success",
                "Withdraw Request Successful! Transaction Code: " . $code
            );
        }catch (QueryException $e) {
            // Handle specific database errors
            dd($e);
            $errorCode = $e->errorInfo[1];
            if ($errorCode == 1364) {
                // Handle error when a required field is missing
                return back()->with(
                    "error",
                    "Could not initiate Deposit Request, Contact Admin!"
                );
            } else {
                // Handle other potential database errors
                return back()->with(
                    "error",
                    "Database error occurred, Contact Admin!"
                );
            }
        } catch (\Exception $e) {
            // Handle other generic exceptions
            return back()->with(
                "error",
                "An unexpected error occurred, Contact Admin!"
            );
        }

    }
}
