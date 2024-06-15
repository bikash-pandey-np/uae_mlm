<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia;
use Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function getLogin()
    {
        return Inertia::render('Backend/Login');
    }

    public function handleLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required|min:6',
        ]);

        if (Auth::guard('web')->attempt($request->only('email', 'password'))) {
            return redirect()->route('admin.dashboard')->with('success', 'Login Successful');
        }

       return back()->with('error', 'Invalid Credentials');
    }

    public function handleLogout()
    {
        Auth::guard('web')->logout(); // Ensure to specify 'web' guard for web authentication

        return redirect()->route('admin.login')->with('success', 'Logged out successfully');
    }
}
