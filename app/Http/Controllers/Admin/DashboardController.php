<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Dashboard: Thuê xe miền nam";
        $meta_title = "Dashboard";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.dashboard')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }
}
