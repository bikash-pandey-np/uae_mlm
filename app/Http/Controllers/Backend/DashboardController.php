<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;

class DashboardController extends Controller
{
    function getDashboardPage() {
        return Inertia::render('Backend/Dashboard');
    }
}
