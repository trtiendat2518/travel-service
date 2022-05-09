<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use App\Repositories\Order\OrderInterface;

class OrderController extends Controller
{
    /**
     * @var OrderInterface|\App\Repositories\Repository
     */
    protected $orderRepository;

    public function __construct(OrderInterface $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý đơn đặt thuê xe";
        $meta_title = "Quản lý đơn đặt thuê xe";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.order.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
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
        $data = $request->validate([
            'service_id' => ['required'],
            'car_id' => ['required'],
            'place_from' => ['required'],
            'place_to' => ['required'],
            'note' => ['required'],
            'start' => ['required', 'required:today'],
            'end' => ['required', 'after_or_equal:start']
        ], [
            'service_id.required' => 'Vui lòng chọn dịch vụ!',
            'car_id.required' => 'Vui lòng chọn loại xe!',
            'place_from.required' => 'Vui lòng điểm đón!',
            'place_to.required' => 'Vui lòng điểm đến!',
            'note.required' => 'Vui lòng điền ghi chú!',

            'start.required' => 'Vui lòng chọn ngày bắt đầu!',
            'start.after_or_equal' => 'Chỉ được chọn ngày hôm nay trở đi!',

            'end.required' => 'Vui lòng chọn ngày kết thúc!',
            'end.after_or_equal' => 'Ngày kết thúc phải lớn hơn bằng ngày dầu!',
        ]);

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $newOrder = new Order();
        $newOrder->code = 'MVD' . now()->format('dmY') . strtoupper(substr(uniqid(sha1(time())), 0, 4));
        $newOrder->user_id = 0;
        $newOrder->note = $data['note'];
        $newOrder->created_at = now();
        $saveOrder = $newOrder->save();
        if ($saveOrder == true) {
            $newOrderDetail = new OrderDetail();
            $newOrderDetail->order_id = $newOrder->id;
            $newOrderDetail->service_id = $data['service_id'];
            $newOrderDetail->car_id = $data['car_id'];
            $newOrderDetail->place_from = $data['place_from'];
            $newOrderDetail->place_to = $data['place_to'];
            $newOrderDetail->start = $data['start'];
            $newOrderDetail->end = $data['end'];
            $newOrderDetail->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listOrders = $this->orderRepository->list($currentEntries);
        return OrderResource::collection($listOrders);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $orderId)
    {
        $order = Order::find($orderId);
        $order->status = $request->status;
        $order->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }

    public function search($query, $currentEntries)
    {
        $searchOrder = $this->orderRepository->search($query, $currentEntries);
        return OrderResource::collection($searchOrder);
    }

    public function filter($value, $currentEntries)
    {
        $searchOrder = $this->orderRepository->filter($value, $currentEntries);
        return OrderResource::collection($searchOrder);
    }

    public function listPlaces()
    {
        $listPlaces = $this->orderRepository->listPlaces();
        return OrderResource::collection($listPlaces);
    }
}
