<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use Http;
use Auth;
use Validator;
use Carbon\Carbon;
use App\Models\Trade;
use App\Models\Customer;

class MarketController extends Controller
{
    function getCryptoData() {
        $url = 'https://api-v2.capex.com/quotesv2?key=1&q=aaveusd,linkusd,bitcoin,ethereum,adausd';
        $response = Http::get($url);
    
        if($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }
    }

    function getPriceForTrade() {
        $url = 'https://api-v2.capex.com/quotesv2?key=1&q=aaveusd,linkusd,bitcoin,ethereum,adausd,facebook,tesla,google,apple,nvidia,amzn,netflix';
        $response = Http::get($url);
        if($response->successful()) {
            return response()->json($response->json(), 200);
        } else {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }

    }

    function getShareData() {
        $url = 'https://api-v2.capex.com/quotesv2?key=1&q=facebook,tesla,google,apple,nvidia,amzn,netflix';
        $response = Http::get($url);
    
        if($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        }
    }


    function getCryptoPage() {
       
        return Inertia::render('Frontend/Crypto', [
            'active' => 'crypto',
            'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,
        ]);
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

    function getSharePage() {
       
        return Inertia::render('Frontend/Shares', [
            'balance' => Auth::guard('customer')->check() ? Auth::guard('customer')->user()->balance : null,

        ]);
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
            return Inertia::render('Frontend/Trade', [
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
            return Inertia::render('Frontend/Trade', [
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
            return Inertia::render('Frontend/NotSupported');
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
