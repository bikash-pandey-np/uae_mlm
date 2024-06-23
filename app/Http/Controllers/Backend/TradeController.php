<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Trade;
use App\Models\Customer;

use Inertia\Inertia;
use Validator;

class TradeController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('search');
        $perPage = 10;
    
        $query = Trade::query()->with('customer')->latest();
    
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('pair', 'like', '%' . $search . '%')
                      ->orWhere('amount', 'like', '%' . $search . '%')
                      ->orWhere('status', 'like', '%' . $search . '%')
                      ->orWhere('type', 'like', '%' . $search . '%')
                      ->orWhereHas('customer', function ($query) use ($search) {
                          $query->where('email', 'like', '%' . $search . '%')
                                ->orWhere('full_name', 'like', '%' . $search . '%')
                                ->orWhere('customer_code', 'like', '%' . $search . '%');
                      });
            });
        }
        $trades = $query->paginate($perPage);
    
    
        // Pass the trades data to the Inertia view
        return Inertia::render('Backend/Trade/ListTrade', [
            'trades' => $trades,
            'search' => $search,

        ]);
    }

    function passTrade(Request $request) {
        $rules = [
            'id' => 'required|exists:trades,id'
        ];

        $data = Validator::make($request->all(), $rules)->validate();

        $trade = Trade::findOrFail($data['id']);

        if($trade->status === "Setelled")
        {
            return back()->with('error', 'Already Setteled');
        }
            $customer = Customer::find($trade->traded_by);

            $trade->is_active = false;
            $trade->status = "Setelled";

            $trade->outcome = $trade->amount + (40/100) * $trade->amount;

            $customer->balance += $trade->amount + (40/100) * $trade->amount;

            $trade->save();
            $customer->save();

           return back()->with('success', 'Trade paased ');
     

    }

    function failTrade(Request $request) {
        $rules = [
            'id' => 'required|exists:trades,id'
        ];

        $data = Validator::make($request->all(), $rules)->validate();

        $trade = Trade::findOrFail($data['id']);

        if($trade->status === "Setelled")
        {
            return back()->with('error', 'Already Setteled');
        }

            $trade->is_active = false;
            $trade->status = "Setelled";

            $trade->outcome = - $trade->amount;

            $trade->save();

           return back()->with('success', 'Trade failed ');
     

    }
}
