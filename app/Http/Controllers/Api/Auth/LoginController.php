<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Ichtrojan\Otp\Models\Otp;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function register(Request $request)
    {

        try {
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();

            if($user){

                $success = true;
                $message = 'User register successfully';
                $token = $user->createToken('token-name', ['server:update'])->plainTextToken;

            };
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
            'token' => $token
        ];
        return response()->json($response);
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        $token = "";
        $otp = "";

        $user = Auth::attempt($credentials);
        if($user) {
            $authentication = User::where('email', $request->email)->first();
            // $otp = Otp::generate($request->email, 4,  10);
            $token = $authentication->createToken('token-name', ['server:update'])->plainTextToken;
            $success = true;
            $message = 'User login successfully';
        } else {
            $success = false;
            $message = 'Unauthorised';

        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
            'token' => $token,
            //  'otp' => $otp
        ];
        return response()->json($response);
    }

    /**
     * Logout
     */
    public function logout()
    {
        try {
            Session::flush();
            $success = true;
            $message = 'Successfully logged out';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
        ];
        return response()->json($response);
    }

}
