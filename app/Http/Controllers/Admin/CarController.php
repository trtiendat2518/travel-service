<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Request;
use App\Repositories\Car\CarInterface;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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

    /**
     * Display all.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        $allCars = $this->carRepository->all();
        return CarResource::collection($allCars);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý loại xe";
        $meta_title = "Quản lý loại xe";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.car.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'name' => 'bail|required|max:50|min:5|notspecial_spaces',
                'avatar' => 'bail|required|mimes:jpeg,jpg,png'
            ],
            [
                'name.required' => 'Tên loại xe không được để trống!',
                'name.max' => 'Tên loại xe tối đa 50 ký tự!',
                'name.min' => 'Tên loại xe tối thiểu 5 ký  tự!',
                'name.notspecial_spaces' => 'Tên loại xe không chứa ký tự đặc biệt!',

                'avatar.required' => 'Vui lòng chọn hình ảnh cho loại xe này!',
                'avatar.mimes' => 'Tệp nhập vào phải là jpeg,jpg,png!',
            ]
        );

        $newCar = new Car();
        $newCar->name = $data['name'];
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $newCar->created_at = now();

        $image = $data['avatar'];
        $name = 'car_avatar' . uniqid(md5(rand(1, 999))) . '.png';
        Storage::disk('car')->put($name, File::get($image));
        $newCar->avatar = $name;
        $newCar->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listCars = $this->carRepository->list($currentEntries);
        return CarResource::collection($listCars);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function edit(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $carId)
    {
        //
    }

    public function upgrade(Request $request, $carId)
    {
        $car = Car::find($carId);

        if ($request->avatar == null) {
            $data = $request->validate([
                'name' => ['required', 'max:50', 'min:5', "unique:cars,name,$carId,id", 'notspecial_spaces'],
            ], [
                'name.required' => 'Tên loại xe không được để trống!',
                'name.max' => 'Tên loại xe tối đa 50 ký tự!',
                'name.min' => 'Tên loại xe tối thiểu 5 ký  tự!',
                'name.notspecial_spaces' => 'Tên loại xe không chứa ký tự đặc biệt!',
                'name.unique' => 'Tên loại xe đã tồn tại!',
            ]);
            $car->name = $data['name'];
            $car->save();
        } else {
            $data = $request->validate(
                [
                    'name' => ['required', 'max:50', 'min:5', "unique:cars,name,$carId,id", 'notspecial_spaces'],
                    'avatar' => 'bail|mimes:jpeg,jpg,png'
                ],
                [
                    'name.required' => 'Tên loại xe không được để trống!',
                    'name.max' => 'Tên loại xe tối đa 50 ký tự!',
                    'name.min' => 'Tên loại xe tối thiểu 5 ký  tự!',
                    'name.notspecial_spaces' => 'Tên loại xe không chứa ký tự đặc biệt!',
                    'name.unique' => 'Tên loại xe đã tồn tại!',

                    'avatar.mimes' => 'Tệp nhập vào phải là jpeg,jpg,png!',
                ]
            );
            $car->name = $data['name'];
            $image = $request->avatar;
            $name = 'car_avatar_' . uniqid(md5(rand(1, 999))) . '.png';
            Storage::disk('car')->delete($car->avatar);
            Storage::disk('car')->put($name, File::get($image));
            $car->avatar = $name;
            $car->save();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy($carId)
    {
        $car = Car::find($carId);
        Storage::disk('car')->delete($car->avatar);
        $car->delete();
    }

    public function search($query, $currentEntries)
    {
        $searchCar = $this->carRepository->search($query, $currentEntries);
        return CarResource::collection($searchCar);
    }

    public function change($carId)
    {
        $car = Car::find($carId);
        if ($car->status == 0) {
            $car->status = 1;
            $car->save();
        } else {
            $car->status = 0;
            $car->save();
        }
    }
}
