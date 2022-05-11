<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\Post;
use App\Models\Service;
use App\Models\Users;
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

        $posts = Post::all();
        $countPost = $posts->count();
        $services = Service::all();
        $countService = $services->count();
        $users = Users::all();
        $countUser = $users->count();
        $cars = Car::all();
        $countCar = $cars->count();

        return view('admin.pages.dashboard')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'countPost', 'countService', 'countUser', 'countCar',));
    }
}
