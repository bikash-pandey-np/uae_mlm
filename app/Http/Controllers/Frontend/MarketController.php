<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use Http;

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

    function getPriceForTrade($slug) {
        $url = 'https://api-v2.capex.com/quotesv2?key=1&q=aaveusd,linkusd,btcfutures,ethereum,adausd,facebook,tesla,google,apple,nvidia,amzn,netflix';
        $response = Http::get($url);
    
        if($response->successful()) {
            return response()->json($response->json()[$slug]['price'], 200);
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
       
        return Inertia::render('Frontend/Crypto');
    }

    function getSharePage() {
       
        return Inertia::render('Frontend/Shares');
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
                'type' => $type
            ]);
        }
        elseif($type === 'shares' && in_array($slug, $shareCheck))
        {
            return Inertia::render('Frontend/Trade', [
                'slug' => $slug,
                'type' => $type
            ]);
        }
        else{
            return Inertia::render('Frontend/NotSupported');
        }
    }
}
