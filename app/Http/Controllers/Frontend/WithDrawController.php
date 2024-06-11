<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;

class WithDrawController extends Controller
{

    function getWithdrawPage() {
        return Inertia::render('Frontend/Withdraw');
    }
}
