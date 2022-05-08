<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;

class InfoController extends Controller
{
    public function infoIndex(Request $request)
    {
        //SEO
        $meta_desc = "Hồ sơ cá nhân - Thông tin tài khoản";
        $meta_title = "Hồ sơ cá nhân";
        $url_canonical = $request->url();
        //---------------

        return \view('customer.pages.info.index')->with(\compact('meta_desc', 'meta_title', 'url_canonical'));
    }
}
