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

    function getCryptoPage() {
       
        return Inertia::render('Frontend/Crypto');
    }

    function getTradePage() {
        return Inertia::render('Frontend/Trade');
    }
}
