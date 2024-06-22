<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Hash;
use Illuminate\Database\QueryException;
use Auth;
use Inertia;
use DB;
use Str;
use App\Mail\VerifyEmailMail;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{

    function getVerifyPage(Request $request) {

        if(! isset($request->email))
        {
            return redirect()->route('login')->with('error', 'Please Login');
        }

        //check if customer is verified 
        $cust = Customer::where('email', $request->email)->first();

        if(!$cust)
        {
            return redirect()->route('register')->with('error', 'Please register');

        }

        if($cust->is_verified)
        {
            return redirect()->route('login')->with('error', 'Already verified');

        }

        //generaate otp
        $otp = strtoupper(Str::random(6));
        $data = [
            'email' => $request->email,
            'token' => $otp,
            'created_at' => now(),
        ];

        $existingToken = DB::table('password_reset_tokens')->where('email', $data['email'])->first();

        if($existingToken)
        {
            DB::table('password_reset_tokens')->where('email', $data['email'])->delete();
        }

        DB::table('password_reset_tokens')->insert($data);
        // Fetch OTP token from password_reset_tokens table
    $fetch = DB::table('password_reset_tokens')
                ->where('email', $request->email)
                ->first();

    // Fetch customer details from Customer model
    $user = Customer::where('email', $fetch->email)->first();

    // Check if $fetch and $user are valid before proceeding
    if ($fetch && $user) {
        // Send email using Mailable class
        Mail::to($request->email)->send(new VerifyEmailMail([
            'email' => $fetch->email,
            'name' => $user->full_name,
            'otp' => $fetch->token
        ]));

        return back()->with('success', 'Otp sent');
    } else {
        return 'Unable to send verification email. User not found or OTP data missing.';
    }
        
        return Inertia::render('Frontend/VerifyEmail', [
            'email' =>  $request->email
        ]);
    }

    function register(Request $request) {
        // Validation rules
        $rules = [
            'email' => 'required|email:rfc,dns|unique:customers,email',
            'full_name' => 'required|string|max:255',
            'password' => ['required', 'string', 'confirmed', 'min:8', 'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/'],
            'country_code' => 'required|string|max:3',
            'contact_number' => 'required|string|digits:10|regex:/^[1-9][0-9]*$/',
            'agree' => 'required',
        ];

        // Validation messages
        $messages = [
            'email.required' => 'The email address is required.',
            'email.email' => 'Please provide a valid email address.',
            'email.unique' => 'The email address has already been taken.',
        
            'full_name.required' => 'The full name is required.',
            'full_name.string' => 'The full name must be a string.',
            'full_name.max' => 'The full name may not be greater than :max characters.',
        
            'password.required' => 'The password is required.',
            'password.string' => 'The password must be a string.',
            'password.confirmed' => 'The password confirmation does not match.',
            'password.min' => 'The password must be at least :min characters long.',
            'password.regex' => 'The password must contain at least one uppercase letter, one number, and one symbol.',
        
            'country_code.required' => 'The country code is required.',
            'country_code.string' => 'The country code must be a string.',
            'country_code.max' => 'The country code may not be greater than :max characters.',
        
            'contact_number.required' => 'The contact number is required.',
            'contact_number.string' => 'The contact number must be a string.',
            'contact_number.digits' => 'The contact number must be exactly :digits digits long.',
            'contact_number.regex' => 'The contact number must not start with 0 and can only contain digits.',
        
            'agree.required' => 'You must agree to the terms and conditions.',
        ];
        

        // Validate the request data
        $validatedData = $request->validate($rules, $messages);

        try {
            Customer::create([
                'email' => $validatedData['email'],
                'full_name' => $validatedData['full_name'],
                'password' => Hash::make($validatedData['password']),
                'country_code' => $validatedData['country_code'],
                'contact_number' => $validatedData['contact_number'],
            ]);
            // If the creation is successful, redirect back with success message
            return redirect()->route('verify', ['email' => $validatedData['email']])
            ->with('success', 'Registration Successful!');
   } catch (QueryException $e) {
            // Handle specific database errors
            $errorCode = $e->errorInfo[1];
            if ($errorCode == 1364) {
                // Handle error when a required field is missing
                return back()->with('error', 'Registration Failed, Contact Admin!');
            } else {
                // Handle other potential database errors
                return back()->with('error', 'Database error occurred, Contact Admin!');
            }
        } catch (\Exception $e) {
            // Handle other generic exceptions
            return back()->with('error', 'An unexpected error occurred, Contact Admin!');
        }
    }

    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|email:rfc,dns|exists:customers,email',
            'password' => ['required', 'string', 'min:8', 'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/'],
        ];

        // Validation messages
        $messages = [
            'email.required' => 'The email address is required.',
            'email.email' => 'Please provide a valid email address.',
            'email.unique' => 'The email address has already been taken.',
        
          
            'password.required' => 'The password is required.',
            'password.string' => 'The password must be a string.',
            'password.confirmed' => 'The password confirmation does not match.',
            'password.min' => 'The password must be at least :min characters long.',
            'password.regex' => 'The password must contain at least one uppercase letter, one number, and one symbol.',
           
        ];
        

        // Validate the request data
        $validatedData = $request->validate($rules, $messages);


        $credentials = $request->only('email', 'password');
        if (Auth::guard('customer')->attempt($credentials)) {
            // Check if there's an intended URL in the session
            $intendedUrl = session()->get('intended', route('dashboard'));
    
            // Redirect to the intended URL or the default dashboard route
            return redirect($intendedUrl)->with('success', 'Success');
        }
        

        return back()->with('error', 'Invalid Credentials !');
    }

    function logout() {
        Auth::guard('customer')->logout();

        return redirect()->route('login')->with('success', 'Logout Successful');
    }
}
