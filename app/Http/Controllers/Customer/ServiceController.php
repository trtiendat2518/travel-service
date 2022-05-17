<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Models\Car;
use App\Models\Service;
use App\Repositories\Service\ServiceInterface;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * @var ServiceInterface|\App\Repositories\Repository
     */
    protected $serviceRepository;

    public function __construct(ServiceInterface $serviceRepository)
    {
        $this->serviceRepository = $serviceRepository;
    }

    public function index(Request $request, $serviceSlug)
    {
        $car = Car::where('status', '=', 0)->get();
        $service = Service::where('status', '=', 0)->where('id', '>', 0)->get();
        foreach ($service as $key => $value) {
            if ($value->slug == $serviceSlug) {
                //SEO
                $meta_desc = $value->name;
                $meta_title = $value->name;
                $url_canonical = $request->url();
                //---------------
            }
        }

        return view('customer.pages.services.detail')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service', 'car'));
    }

    public function detail($serviceSlug)
    {
        $detailService = $this->serviceRepository->detail($serviceSlug);
        return ServiceResource::collection($detailService);
    }

    public function popular()
    {
        $popularService = $this->serviceRepository->popular();
        return ServiceResource::collection($popularService);
    }
}
