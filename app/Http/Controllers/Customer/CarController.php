<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarResource;
use App\Models\Car;
use App\Models\Service;
use App\Repositories\Car\CarInterface;
use Illuminate\Http\Request;
use Vonage\Client\Exception\Server;

class CarController extends Controller
{
    /**
     * @var CarInterface|\App\Repositories\Repository
     */
    protected $carRepository;
    public function __construct(CarInterface $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function index(Request $request, $carSlug)
    {
        $service = Service::where('status', '=', 0)->where('id', '>', 0)->get();
        $car = Car::where('status', '=', 0)->get();
        foreach ($car as $key => $value) {
            if ($value->slug == $carSlug) {
                //SEO
                $meta_desc = $value->name;
                $meta_title = $value->name;
                $url_canonical = $request->url();
                //---------------
            }
        }

        return view('customer.pages.cars.detail')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'car', 'service'));
    }

    public function detail($carSlug)
    {
        $detailCar = $this->carRepository->detail($carSlug);
        return CarResource::collection($detailCar);
    }
}
