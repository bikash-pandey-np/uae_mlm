<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DepositRequest;
use Inertia;
use Validator;

class DepositRequestController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $perPage = 10;
    
        $query = DepositRequest::query()->with('depositedBy', 'depositInfo')->latest();
    
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('transaction_code', 'like', '%' . $search . '%')
                      ->orWhere('amount', 'like', '%' . $search . '%')
                      ->orWhere('currency', 'like', '%' . $search . '%')
                      ->orWhere('remark', 'like', '%' . $search . '%')
                      ->orWhereHas('depositedBy', function ($query) use ($search) {
                          $query->where('email', 'like', '%' . $search . '%')
                                ->orWhere('full_name', 'like', '%' . $search . '%')
                                ->orWhere('customer_code', 'like', '%' . $search . '%');
                      });
            });
        }
        $depositRequests = $query->paginate($perPage);
    
        return Inertia::render('Backend/DepositRequest/DepositRequest', [
            'depositRequests' => $depositRequests,
            'search' => $search,
        ]);
    }

    function approveDeposit(Request $request) {
        $rules = [
            'approved_amount' => [ "required",
                'regex:/^\d+(\.\d{1,2})?$/',
                "numeric",
            ],
            'remark' => 'required|string',
            'transaction_code' => 'required|exists:deposit_requests,transaction_code'
        ];

        $data = Validator::make($request->all(), $rules)->validate();

        $deposit = DepositRequest::where('transaction_code', $request->transaction_code)->first();

        $deposit->is_approved = true;
        $deposit->status = "Approved";
        $deposit->approved_amount = $request->approved_amount;
        $deposit->remark = $request->remark;

        $deposit->save();

        return back()->with('success', 'Deposit Approved Successful');


    }
    
}
