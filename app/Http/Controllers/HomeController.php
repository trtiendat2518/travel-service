<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Trang chủ: Thuê xe miền nam";
        $meta_title = "Trang chủ";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return view('customer.pages.home')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function aboutUs(Request $request)
    {
        //SEO
        $meta_desc = "Về chúng tôi - Thuê Xe Miền Nam";
        $meta_title = "Về chúng tôi";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return view('customer.pages.about.index')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }
}
