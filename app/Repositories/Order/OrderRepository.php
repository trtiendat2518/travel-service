<?php

namespace App\Repositories\Order;

use App\Repositories\Order\OrderInterface;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Place;

/**
 * Class OrderRepository.
 */
class OrderRepository implements OrderInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Order::class;
    }

    public function list($currentEntries)
    {
        return Order::join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('cars', 'cars.id', '=', 'order_details.car_id')
            ->join('services', 'services.id', '=', 'order_details.service_id')
            ->select('orders.*', 'order_details.*', 'users.full_name', 'users.phone_number', 'users.email', 'cars.name as car_name', 'services.name as service_name')
            ->orderby('orders.id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Order::join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('cars', 'cars.id', '=', 'order_details.car_id')
            ->join('services', 'services.id', '=', 'order_details.service_id')
            ->select('orders.*', 'order_details.*', 'order_details.id as detail_id', 'users.full_name', 'users.phone_number', 'users.email', 'cars.name as car_name', 'services.name as service_name')
            ->where('orders.code', 'LIKE', '%' . $query . '%')->orderby('orders.id', 'DESC')->paginate($currentEntries);
    }

    public function filter($value, $currentEntries)
    {
        return Order::join('order_details', 'order_details.order_id', '=', 'orders.id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->join('cars', 'cars.id', '=', 'order_details.car_id')
            ->join('services', 'services.id', '=', 'order_details.service_id')
            ->select('orders.*', 'order_details.*', 'order_details.id as detail_id', 'users.full_name', 'users.phone_number', 'users.email', 'cars.name as car_name', 'services.name as service_name')
            ->where('orders.status', $value)->orderby('orders.id', 'DESC')->paginate($currentEntries);
    }

    public function listPlaces()
    {
        return Place::orderBy('name', 'ASC')->get();
    }
}
