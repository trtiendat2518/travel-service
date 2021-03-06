<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckOTP
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (!session()->has('otp')) {
            if ((url('/xac-thuc') == $request->url()) || (url('admin/xac-thuc') == $request->url())) {
                return back();
            }
        }
        return $next($request);
    }
}
