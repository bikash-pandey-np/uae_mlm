<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use App\Models\Customer;

class CustomerController extends Controller
{
    function getPage() {
        $customers = Customer::latest()->get();

        return Inertia::render('Backend/Customers/Customer', [
            'customers' => $customers
        ]);
    }
}
