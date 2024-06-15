<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\WithdrawRequest;

class WithdrawController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $perPage = 10;
    
        $query = WithdrawRequest::query()->with('customer')->latest();
    
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('transaction_code', 'like', '%' . $search . '%')
                      ->orWhere('amount', 'like', '%' . $search . '%')
                      ->orWhere('currency', 'like', '%' . $search . '%')
                      ->orWhere('remark', 'like', '%' . $search . '%')
                      ->orWhereHas('customer', function ($query) use ($search) {
                          $query->where('email', 'like', '%' . $search . '%')
                                ->orWhere('full_name', 'like', '%' . $search . '%')
                                ->orWhere('customer_code', 'like', '%' . $search . '%');
                      });
            });
        }
        $withdrawRequests = $query->paginate($perPage);
    
        return Inertia::render('Backend/Withdraw/Withdraw', [
            'withdrawRequests' => $withdrawRequests,
            'search' => $search,
        ]);
    }
}
