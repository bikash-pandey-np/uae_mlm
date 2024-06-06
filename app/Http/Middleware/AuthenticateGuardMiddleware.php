<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;

class AuthenticateGuardMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $guard)
    {
        switch ($guard) {
            case 'web':
                if (!Auth::guard($guard)->check()) {
                    return redirect()->route('admin.login')->with('error', 'Unauthorized'); // Redirect to admin login route
                }
                break;
            case 'customer':
                if (!Auth::guard($guard)->check()) {
                    return redirect()->route('login')->with('error', 'Please Login'); // Redirect to default login route
                }
                break;
            default:
                if (!Auth::guard($guard)->check()) {
                    return redirect()->route('login'); // Redirect to default login route for unknown guards
                }
                break;
        }
    
        return $next($request);
    }
    
}
