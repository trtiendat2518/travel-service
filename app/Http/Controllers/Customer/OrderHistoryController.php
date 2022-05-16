<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Car;
use App\Models\Order;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Http\Request;

class OrderHistoryController extends Controller
{
    public function index(Request $request)
    {
        //SEO
        $meta_desc = 'Lịch sử đơn thuê xe';
        $meta_title = 'Lịch sử đơn thuê xe';
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();
        $car = Car::where('status', '=', 0)->get();

        return view('customer.pages.order_history.index')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service', 'car'));
    }

    public function show($userId)
    {
        $order = Order::join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('cars', 'cars.id', '=', 'order_details.car_id')
            ->join('services', 'services.id', '=', 'order_details.service_id')
            ->select('orders.*', 'order_details.*', 'users.full_name', 'users.phone_number', 'users.email', 'cars.name as car_name', 'services.name as service_name')
            ->where('orders.user_id', $userId)->get();
        return OrderResource::collection($order);
    }

    public function showReview()
    {
        $review = Review::orderBy('id', 'DESC')->get();
        return OrderResource::collection($review);
    }

    public function createReview(Request $request)
    {
        $data = $request->validate(
            [
                'star' => 'required',
                'comment' => 'max:500'
            ],
            [
                'star.required' => 'Vui lòng chọn đánh giá',
                'comment.max' => 'Nội dung đánh giá không vượt quá 500 ký tự '
            ]
        );

        \date_default_timezone_set('Asia/Ho_Chi_Minh');
        $review = new Review();
        $review->order_id = $request->order_id;
        $review->star = $data['star'];
        $review->comment = $data['comment'];
        $review->created_at = now();
        $review->save();
    }
}
