<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\DepositInfo;
use App\Models\DepositRequest;
use App\Models\Trade;
use App\Models\WithdrawRequest;
use Illuminate\Database\QueryException;
use Http;

use Auth;
use Validator;
use Inertia;
use Carbon\Carbon;

class RouteController extends Controller
{
    public function getHomepage()
    {
        $user = auth()->guard('customer')->user(); // Retrieve authenticated customer

        // Retrieve customer's balance
        $balance = Customer::where('id', $user->id)->first()->balance;

        return Inertia::render('V1/Dashboard', [
            'balance' => $balance,
            'username' => $user->full_name
        ]);
    }

    function getWithdrawPage() {
        return Inertia::render('V1/Withdraw', [
            'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,

        ]);
    }

    function getAboutPage() {
        return Inertia::render('Frontend/About');
    }

    function processWithdrawl(Request $request) {
        // Define the validation rules based on currency
        $rules = [
            'amount' => 'required|numeric|min:100|max:5000|regex:/^\d+(\.\d{1,2})?$/',
            'currency' => 'required|string|in:USDT,INR',
        ];
    
        // Add conditional rules based on currency
        if ($request->currency === 'USDT') {
            $rules['wallet_address'] = [
                'required',
                'string',
                function ($attribute, $value, $fail) {
                    // Validate TRC20 address format
                    if (!preg_match('/^T[a-zA-Z0-9]{33}$/', $value)) {
                        $fail('The ' . $attribute . ' must be a valid TRC20 address.');
                    }
                }
            ];
        } 
        if ($request->currency === 'INR') {
            $rules['bank_name'] = 'required|string';
            $rules['account_no'] = 'required|string';
            $rules['account_name'] = 'required|string';
        }
    
        // Validate the request data against the rules
        $validatedData = $request->validate($rules);
    
        // Check if user has sufficient balance for withdrawal
        $user = Auth::guard('customer')->user();
        if (!($user->balance >= $request->amount)) {
            return back()->with('error', 'Insufficient Balance');
        }
    
        // Prepare data for saving withdrawal request
        $data = [
            'amount' => (float) sprintf("%.2f", $validatedData["amount"]),
            'currency' => $validatedData['currency'],
            'requested_by' => Auth::guard("customer")->user()->id,
        ];
    
        // Add currency-specific data
        if ($validatedData['currency'] === 'USDT') {
            $data['wallet_address'] = $validatedData['wallet_address'];
        } elseif ($validatedData['currency'] === 'INR') {
            $data['bank_name'] = $validatedData['bank_name'];
            $data['account_no'] = $validatedData['account_no'];
            $data['account_name'] = $validatedData['account_name'];
        }
    
        try {

            $temp = [
                'amount'  => $request->amount,
                'currency' => $request->currency,
                'requested_by' =>Auth::guard("customer")->user()->id,
                
            ];
            
            if($request->currency === 'USDT')
            {
                $temp['wallet_address'] = $request->wallet_address;
                
            }
            if($request->currency === 'INR')
            {
                $temp['bank_info'] = 'Bank Name : ' . $request->bank_name . ' ' . 'Acc no. ' . $request->account_no . ' Acc name: ' . $request->account_name;

                
            }

            // Attempt to create the withdrawal request
            $temp1 = WithdrawRequest::create($temp);
            $code = WithdrawRequest::find($temp1->id)->transaction_code;
    
            // Redirect back with success message
            return back()->with(
                "success",
                "Withdraw Request Successful! Transaction Code: " . $code
            );
        } catch (\Exception $e) {
            // Handle exceptions
            return back()->with(
                "error",
                "An unexpected error occurred, Contact Admin!"
            );
        }
    }

    function getDeposit() {
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

        return inertia("V1/DepositForm", [
            "inr_deposit_info" => $inrDepositInfo,
            "usdt_deposit_info" => $usdtDepositInfo,
            'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,
            "pending_amount" => $approxPendingAmount,
        ]);
    }

    function profilePage() {
        return Inertia::render('V1/Profile',[
            'user' => Auth::guard('customer')->user(),
            'member_date' => Carbon::parse(Auth::guard('customer')->user()->created_at)->diffForHumans()
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

    function getTradePage($type, $slug) {
        $cryptoCheck = ['AAVEUSDT', 'LINKUSDT', 'BTCUSDT', 'ETHUSDT', 'ADAUSDT'];
        $typeCheck = ['crypto', 'shares'];
        $shareCheck = ['AAPL', 'META', 'NVDA', 'TSLA', 'AMZN', 'NFLX', 'GOOG'];

        if(! in_array($type, $typeCheck))
        {
            return Inertia::render('Frontend/NotSupported');
        }

        if($type === 'crypto' && in_array($slug, $cryptoCheck))
        {
            return Inertia::render('V1/Trade', [
                'slug' => $slug,
                'type' => $type,
                'active' => 'crypto',
                'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,
'trades' => Trade::where('traded_by', Auth::guard('customer')->user()->id)
->where('pair', $slug)
->orderBy('created_at', 'desc')
                  ->get(),
            ]);
        }
        elseif($type === 'shares' && in_array($slug, $shareCheck))
        {
            return Inertia::render('V1/Trade', [
                'slug' => $slug,
                'type' => $type,
                'active' => 'crypto',
                'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,
'trades' => Trade::where('traded_by', Auth::guard('customer')->user()->id)
                  ->where('pair', $slug)
                  ->orderBy('created_at', 'desc')
                  ->get(),                

            ]);
        }
        else{
            return Inertia::render('V1/NotSupported');
        }
    }
    function priceHelper($slug) {
        $url = 'https://api-v2.capex.com/quotesv2?key=1&q=aaveusd,linkusd,bitcoin,ethereum,adausd,facebook,tesla,google,apple,nvidia,amzn,netflix';
        $response = Http::get($url);
    
        if ($response->successful()) {
            $data = $response->json();
    
            switch ($slug) {
                case 'AAVEUSDT':
                    return $data['aaveusd']['price'];
                case 'LINKUSDT':
                    return $data['linkusd']['price'];
                case 'BTCUSDT':
                    return $data['bitcoin']['price'];
                case 'ETHUSDT':
                    return $data['ethereum']['price'];
                case 'ADAUSDT':
                    return $data['adausd']['price'];
                case 'META':
                    return $data['facebook']['price'];
                case 'TSLA':
                    return $data['tesla']['price'];
                case 'GOOG':
                    return $data['google']['price'];
                case 'NVDA':
                    return $data['nvidia']['price'];
                case 'AMZN':
                    return $data['amzn']['price'];
                case 'NFLX':
                    return $data['netflix']['price'];
                default:
                    return null; // Handle case when $slug doesn't match any known symbol
            }
        } else {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }
    }
    function takeTrade(Request $request){
        $rules = [
            'trade_amount' => 'required|numeric|min:0',
        ];

        $validatedData = Validator::make($request->all(), $rules)->validate();

        //check if user have balance 

        if(!(Customer::find(Auth::guard('customer')->user()->balance >= $request->trade_amount)))
        {
            return back()->with('error', 'Insufficient Balance');
        }

        //if user have already trade for given pair

        $trade_exists = Trade::where('pair', $request->pair)
            ->where('traded_by', Auth::guard('customer')->user()->id)
            ->where('is_active', true)->get();

        if(count($trade_exists) > 0)
        {
            return back()->with('error', 'You have active trade');
        }

        $validatedData['pair'] = $request->pair;
        $validatedData['amount'] = $request->trade_amount;

        $validatedData['type'] = $request->type;
        $validatedData['duration_minutes'] = $request->trade_duration;
        $expiredTime = Carbon::now()->addMinutes($request->trade_duration)->utc();
        $validatedData['expired_time'] = $expiredTime;

        $validatedData['trade_price'] = $this->priceHelper($request->pair);

        $validatedData['traded_by'] = Auth::guard('customer')->user()->id;

        if(Trade::create($validatedData))
        {
            $cust = Customer::find($validatedData['traded_by']);

            if($cust)
            {
                $cust->balance -= $validatedData['amount'];
                $cust->save();
            }
            return back()->with('success', 'Order Completed');
        }
        else{
            return back()->with('error', 'Could not Place Order');

        }

    }

}
