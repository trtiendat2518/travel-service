<?php

namespace App\Repositories\Service;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Repositories\Service\ServiceInterface;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\DB;

/**
 * Class OrderRepository.
 */
class ServiceRepository implements ServiceInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Service::class;
    }

    public function list($currentEntries)
    {
        return Service::join('users', 'users.id', '=', 'services.author')
            ->select('services.*', 'users.full_name')
            ->where('services.id', '>', 0)
            ->orderby('services.id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Service::join('users', 'users.id', '=', 'services.author')
            ->where('services.name', 'LIKE', '%' . $query . '%')
            ->select('services.*', 'users.full_name')
            ->where('services.id', '>', 0)
            ->orderby('services.id', 'DESC')->paginate($currentEntries);
    }

    public function all()
    {
        return Service::where('status', '=', 0)->orderby('name', 'ASC')->get();
    }

    public function detail($serviceSlug)
    {
        return Service::where('slug', $serviceSlug)->limit(1)->get();
    }

    public function eightServices()
    {
        return Service::where('services.id', '>', 0)->orderBy('id', 'DESC')->limit(6)->get();
    }

    public function popular()
    {
        return OrderDetail::join('services', 'services.id', '=', 'order_details.service_id')
            ->select(DB::raw("COUNT(service_id) AS service_popular"), 'services.id', 'services.name', 'services.avatar', 'services.slug')
            ->where('services.id', '>', 0)
            ->orderBy('service_popular', 'DESC')
            ->groupBy('service_id')->limit(5)->get();
    }
}
