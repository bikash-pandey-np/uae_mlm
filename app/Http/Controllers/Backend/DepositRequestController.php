<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DepositRequest;
use App\Models\DepositInfo;
use App\Models\Customer;

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

    function getSingle($code) {
        $detail = DepositRequest::where('transaction_code', $code)
            ->with('depositedBy', 'depositInfo')->first();

        if($detail)
        {

            return Inertia::render('Backend/DepositRequest/DepositRequestDetail', [
                'detail' => $detail
            ]);
        }
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

        $user = Customer::where('id', $deposit->deposited_by)->first();

        $user->balance += $deposit->approved_amount;

        $user->save();
        return back()->with('success', 'Deposit Approved Successful');


    }
    
    function rejectDeposit(Request $request) {
        $rules = [
            'remark' => 'required|string',
            'transaction_code' => 'required|exists:deposit_requests,transaction_code'
        ];

        $data = Validator::make($request->all(), $rules)->validate();

        $deposit = DepositRequest::where('transaction_code', $request->transaction_code)->first();

        $deposit->is_approved = false;
        $deposit->status = "Rejected";
        $deposit->approved_amount = 0;
        $deposit->remark = $request->remark;

        $deposit->save();

        
        return back()->with('success', 'Deposit Rejected Successful');


    }

    function getAddDepositPage() {
        return Inertia::render('Backend/DepositRequest/CreateDeposistRequest', [
            'depositInfos' => DepositInfo::where('is_active', true)->get(),
            'customers' => Customer::where('is_active', true)->get()
        ]);
    }
    public function store(Request $request)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'amount' => 'required|numeric|min:0',
            'currency' => 'required|in:INR,USDT',
            'deposit_info_id' => 'required|exists:deposit_infos,id',
            'deposited_by' => 'required|exists:customers,id',
            'is_approved' => 'nullable|boolean', // optional field
            'status' => 'nullable|in:Pending,Approved,Rejected', // optional field
            'approved_amount' => 'nullable|numeric|min:0', // optional field
            'remark' => 'nullable|string', // optional field
        ]);

        // Create a new DepositRequest instance
        $depositRequest = new DepositRequest();
        $depositRequest->amount = $validatedData['amount'];
        $depositRequest->currency = $validatedData['currency'];
        $depositRequest->deposit_info_id = $validatedData['deposit_info_id'];
        $depositRequest->deposited_by = $validatedData['deposited_by'];

        // Set optional fields if provided
        if (isset($validatedData['is_approved'])) {
            $depositRequest->is_approved = $validatedData['is_approved'];
        }
        if (isset($validatedData['status'])) {
            $depositRequest->status = $validatedData['status'];
        }
        if (isset($validatedData['approved_amount'])) {
            $depositRequest->approved_amount = $validatedData['approved_amount'];
        }
        if (isset($validatedData['remark'])) {
            $depositRequest->remark = $validatedData['remark'];
        }
        $customer = Customer::find($request->deposited_by);

        $customer->balance += $request->approved_amount;

        $customer->save();
        // Save the deposit request
        $depositRequest->save();

        // Optionally, you can return a response or redirect to a different route
        return redirect()->route('admin.deposit-requests')->with('success', 'Deposit request created successfully.');
    }
}
