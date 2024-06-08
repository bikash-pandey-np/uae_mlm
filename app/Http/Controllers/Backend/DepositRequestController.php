<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DepositRequest;
use Inertia;

class DepositRequestController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $perPage = 1;
    
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
    
}
