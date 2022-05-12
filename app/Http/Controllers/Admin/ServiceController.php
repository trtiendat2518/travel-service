<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Repositories\Service\ServiceInterface;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

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

    /**
     * Display all.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        $allServices = $this->serviceRepository->all();
        return ServiceResource::collection($allServices);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý dịch vụ thuê xe";
        $meta_title = "Quản lý dịch vụ thuê xe";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.service.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //SEO
        $meta_desc = "Tạo mới dịch vụ thuê xe";
        $meta_title = "Tạo mới dịch vụ thuê xe";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.service.create')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function showUpgrade(Request $request, $serviceSlug)
    {
        $service = Service::where('slug', $serviceSlug)->first();
        //SEO
        $meta_desc = $service->name;
        $meta_title = $service->name;
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.service.update')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'max:50', 'min:10', 'unique:services', 'notspecial_spaces'],
            'content' => ['required', 'min:50', 'max:5000'],
            'avatar' => ['required', 'mimes:jpeg,jpg,png'],
        ], [
            'name.required' => 'Tên dịch vụ không được để trống!',
            'name.max' => 'Tên dịch vụ không nhập quá 50 ký tự!',
            'name.min' => 'Tên dịch vụ phải có 10 ký tự trở lên!',
            'name.unique' => 'Tên dịch vụ đã tồn tại!',
            'name.notspecial_spaces' => 'Tên không chứa ký tự đặc biệt!',

            'content.required' => 'Nội dung không được để trống!',
            'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
            'content.max' => 'Nội dung tối đa 5000 ký tự!',

            'avatar.required' => 'Vui lòng chọn hình ảnh cho dịch vụ này!',
            'avatar.mimes' => 'Tệp nhập vào phải có đuôi jpeg,jpg,png!',
        ]);

        $newService = new Service();
        $newService->name = $data['name'];
        $newService->slug = Str::slug($data['name']);
        $newService->content = $data['content'];
        $newService->author = $request->author;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $newService->created_at = now();

        $image = $data['avatar'];
        $name = 'service_avatar_' . uniqid(md5(rand(1, 999))) . '.png';
        Storage::disk('service')->put($name, File::get($image));
        $newService->avatar = $name;

        $newService->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listServices = $this->serviceRepository->list($currentEntries);
        return ServiceResource::collection($listServices);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    public function upgrade(Request $request, $serviceId)
    {
        $service = Service::find($serviceId);

        if ($request->avatar == null) {
            $data = $request->validate([
                'name' => ['required', 'max:50', 'min:5', "unique:services,name,$serviceId,id", 'notspecial_spaces'],
                'content' => ['required', 'min:50', 'max:5000'],
            ], [
                'name.required' => 'Tên dịch vụ không được để trống!',
                'name.max' => 'Tên dịch vụ không nhập quá 50 ký tự!',
                'name.min' => 'Tên dịch vụ phải có 10 ký tự trở lên!',
                'name.unique' => 'Tên dịch vụ đã tồn tại!',
                'name.notspecial_spaces' => 'Tên không chứa ký tự đặc biệt!',

                'content.required' => 'Nội dung không được để trống!',
                'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
                'content.max' => 'Nội dung tối đa 5000 ký tự!',
            ]);
            $service->name = $data['name'];
            $service->slug = Str::slug($data['name']);
            $service->content = $data['content'];
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $service->updated_at = now();
            $service->save();
        } else {
            $data = $request->validate([
                'name' => ['required', 'max:50', 'min:5', "unique:services,name,$serviceId,id", 'notspecial_spaces'],
                'content' => ['required', 'min:50', 'max:5000'],
                'avatar' => ['required', 'mimes:jpeg,jpg,png'],
            ], [
                'name.required' => 'Tên dịch vụ không được để trống!',
                'name.max' => 'Tên dịch vụ không nhập quá 50 ký tự!',
                'name.min' => 'Tên dịch vụ phải có 10 ký tự trở lên!',
                'name.unique' => 'Tên dịch vụ đã tồn tại!',
                'name.notspecial_spaces' => 'Tên không chứa ký tự đặc biệt!',

                'content.required' => 'Nội dung không được để trống!',
                'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
                'content.max' => 'Nội dung tối đa 5000 ký tự!',

                'avatar.mimes' => 'Tệp nhập vào phải có đuôi jpeg,jpg,png!',
            ]);
            $service->name = $data['name'];
            $service->slug = Str::slug($data['name']);
            $service->content = $data['content'];
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $service->updated_at = now();

            $image = $request->avatar;
            $name = 'service_avatar_' . uniqid(md5(rand(1, 999))) . '.png';
            Storage::disk('service')->delete($service->avatar);
            Storage::disk('service')->put($name, File::get($image));
            $service->avatar = $name;
            $service->save();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy($serviceId)
    {
        $service = Service::find($serviceId);
        Storage::disk('service')->delete($service->avatar);
        $service->delete();
    }

    public function search($query, $currentEntries)
    {
        $searchService = $this->serviceRepository->search($query, $currentEntries);
        return ServiceResource::collection($searchService);
    }

    public function detail($serviceSlug)
    {
        $detailService = $this->serviceRepository->detail($serviceSlug);
        return ServiceResource::collection($detailService);
    }

    public function eightServices()
    {
        $services = $this->serviceRepository->eightServices();
        return ServiceResource::collection($services);
    }
}
