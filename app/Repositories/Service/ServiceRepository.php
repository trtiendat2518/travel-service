<?php

namespace App\Repositories\Service;

use App\Repositories\Service\ServiceInterface;
use Illuminate\Http\Request;
use App\Models\Service;

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
            ->select('services.*', 'users.full_name')->orderby('services.id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Service::join('users', 'users.id', '=', 'services.author')
            ->where('services.name', 'LIKE', '%' . $query . '%')
            ->select('services.*', 'users.full_name')->orderby('services.id', 'DESC')->paginate($currentEntries);
    }

    public function all()
    {
        return Service::all();
    }

    public function detail($serviceId)
    {
        return Service::where('id', $serviceId)->get();
    }
}
