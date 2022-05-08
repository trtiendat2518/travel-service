<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Trang chủ: Thuê xe miền nam";
        $meta_title = "Trang chủ";
        $url_canonical = $request->url();
        //---------------

        return view('customer.pages.home')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function aboutUs(Request $request)
    {
        //SEO
        $meta_desc = "Về chúng tôi - Thuê Xe Miền Nam";
        $meta_title = "Về chúng tôi";
        $url_canonical = $request->url();
        //---------------

        return view('customer.pages.about.index')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }
}
