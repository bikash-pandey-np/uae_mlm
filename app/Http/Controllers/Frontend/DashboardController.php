<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;

class DashboardController extends Controller
{
    function getDashboard() {
        return Inertia::render('Frontend/Dashboard');
    }
}
