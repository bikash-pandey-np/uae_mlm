<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\DepositInfo;
use App\Models\DepositRequest;
use Validator;
use Auth;
use Illuminate\Database\QueryException;

class DepositController extends Controller
{
    public function getPage(Request $request)
    {
        // Retrieve deposit information
        $depositInfo = DepositInfo::whereIn("currency", ["INR", "USDT"])
            ->where("is_active", true)
            ->inRandomOrder()
            ->get();

        // Separate INR and USDT deposit information
        $inrDepositInfo = $depositInfo->where("currency", "INR")->first();
        $usdtDepositInfo = $depositInfo->where("currency", "USDT")->first();

        $pendingAmountINR = DepositRequest::where(
            "deposited_by",
            Auth::guard("customer")->user()->id
        )
            ->where("currency", "INR")
            ->where("status", "Pending")
            ->sum("amount");

        // Calculate pending amount for USDT deposits
        $pendingAmountUSDT = DepositRequest::where(
            "deposited_by",
            Auth::guard("customer")->user()->id
        )
            ->where("currency", "USDT")
            ->where("status", "Pending")
            ->sum("amount");
        // Calculate approximate total pending amount
        $approxPendingAmount = $pendingAmountUSDT * 83.46 + $pendingAmountINR;

        return inertia("Frontend/DepositForm", [
            "inr_deposit_info" => $inrDepositInfo,
            "usdt_deposit_info" => $usdtDepositInfo,
            "balance" => Auth::guard("customer")->user()->balance,
            "pending_amount" => $approxPendingAmount,
        ]);
    }

    function getDepositHistoryPage(Request $request) {

        $depositHistory = DepositRequest::with('depositInfo')
                                    ->where('deposited_by', Auth::guard('customer')->user()->id)
                                    ->orderBy('created_at', 'desc')
                                    ->get();

        $pendingAmountINR = DepositRequest::where(
            "deposited_by",
            Auth::guard("customer")->user()->id
        )
            ->where("currency", "INR")
            ->where("status", "Pending")
            ->sum("amount");

        // Calculate pending amount for USDT deposits
        $pendingAmountUSDT = DepositRequest::where(
            "deposited_by",
            Auth::guard("customer")->user()->id
        )
            ->where("currency", "USDT")
            ->where("status", "Pending")
            ->sum("amount");
        // Calculate approximate total pending amount
        $approxPendingAmount = $pendingAmountUSDT * 83.46 + $pendingAmountINR;
        return Inertia::render('Frontend/DepositHistory', [
            "balance" => Auth::guard("customer")->user()->balance,
            "pending_amount" => $approxPendingAmount,
            'deposit_histories' => $depositHistory
        ]);
    }

    public function processDeposit(Request $request)
    {
        $messages = [
            "amount.required" => "Enter amount",
            "amount.regex" => "Only 2 digits after decimal is supported",
            "amount.numeric" => "Amount must be a valid number",
            "currency.in" => "Currency must be either INR or USDT",
            "deposit_info.id.required" => "Deposit info ID is required",
            "deposit_info.id.exists" => "Invalid deposit info ID",
        ];
        $validatedData = Validator::make(
            $request->all(),
            [
                "amount" => [
                    "required",
                    'regex:/^\d+(\.\d{1,2})?$/',
                    "numeric",
                ],
                "currency" => "required|in:INR,USDT",
                "deposit_info.id" => "required|exists:deposit_infos,id",
            ],
            $messages
        )->validate();

        if ($validatedData["currency"] === "INR") {
            $messages["amount.min"] =
                "Minimum deposit amount for INR is Rs. 5000";
            Validator::make(
                $request->all(),
                [
                    "amount" => ["required", "numeric", "min:5000"],
                ],
                $messages
            )->validate();
        } elseif ($validatedData["currency"] === "USDT") {
            $messages["amount.min"] = "Minimum deposit amount is 100 USDT";

            Validator::make(
                $request->all(),
                [
                    "amount" => ["required", "numeric", "min:100"],
                ],
                $messages
            )->validate();
        }

        $data = [
            "amount" => (float) sprintf("%.2f", $validatedData["amount"]),
            "currency" => $validatedData["currency"],
            "deposit_info_id" => $validatedData["deposit_info"]["id"],
            "deposited_by" => Auth::guard("customer")->user()->id,
        ];

        try {
            $temp = DepositRequest::create($data);
            // If the creation is successful, redirect back with success message
            $code = DepositRequest::find($temp->id)->transaction_code;
            return back()->with(
                "success",
                "Deposit Request Successful! Transaction Code: " . $code
            );
        } catch (QueryException $e) {
            // Handle specific database errors
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
