<?php

namespace App\Repositories\Review;

use App\Repositories\Review\ReviewInterface;
use Illuminate\Http\Request;
use App\Models\Review;

/**
 * Class OrderRepository.
 */
class ReviewRepository implements ReviewInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Review::class;
    }

    public function list($currentEntries)
    {
        return Review::join('orders', 'orders.id', '=', 'reviews.order_id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('cars', 'order_details.car_id', '=', 'cars.id')
            ->join('services', 'order_details.service_id', '=', 'services.id')
            ->select(
                'reviews.*',
                'users.full_name',
                'users.phone_number',
                'users.email',
                'orders.code',
                'orders.created_at',
                'cars.name as car_name',
                'services.name as service_name'
            )
            ->orderby('reviews.id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Review::join('orders', 'orders.id', '=', 'reviews.order_id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('cars', 'order_details.car_id', '=', 'cars.id')
            ->join('services', 'order_details.service_id', '=', 'services.id')
            ->select(
                'reviews.*',
                'users.full_name',
                'users.phone_number',
                'users.email',
                'orders.code',
                'orders.created_at',
                'cars.name as car_name',
                'services.name as service_name'
            )
            ->where('users.full_name', 'LIKE', '%' . $query . '%')
            ->orwhere('users.email', 'LIKE', '%' . $query . '%')
            ->orwhere('users.phone_number', 'LIKE', '%' . $query . '%')
            ->orderby('reviews.id', 'DESC')->paginate($currentEntries);
    }

    public function filter($value, $currentEntries)
    {
        return Review::join('orders', 'orders.id', '=', 'reviews.order_id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('cars', 'order_details.car_id', '=', 'cars.id')
            ->join('services', 'order_details.service_id', '=', 'services.id')
            ->select(
                'reviews.*',
                'users.full_name',
                'users.phone_number',
                'users.email',
                'orders.code',
                'orders.created_at',
                'cars.name as car_name',
                'services.name as service_name'
            )
            ->where('reviews.star', $value)
            ->orderby('reviews.id', 'DESC')->paginate($currentEntries);
    }
}
