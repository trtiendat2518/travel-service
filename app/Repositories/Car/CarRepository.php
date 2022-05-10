<?php

namespace App\Repositories\Car;

use App\Repositories\Car\CarInterface;
use Illuminate\Http\Request;
use App\Models\Car;

/**
 * Class OrderRepository.
 */
class CarRepository implements CarInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Car::class;
    }

    public function list($currentEntries)
    {
        return Car::orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Car::where('name', 'LIKE', '%' . $query . '%')->orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function all()
    {
        return Car::all();
    }

    public function detail($carId)
    {
        return Car::where('id', $carId)->get();
    }
}
