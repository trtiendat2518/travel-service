<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Http\Resources\ReviewResource;
use App\Repositories\Review\ReviewInterface;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * @var ReviewInterface|\App\Repositories\Repository
     */
    protected $reviewRepository;

    public function __construct(ReviewInterface $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý đánh giá của khách hàng";
        $meta_title = "Quản lý đánh giá của khách hàng";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.review.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listReviews = $this->reviewRepository->list($currentEntries);
        return ReviewResource::collection($listReviews);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $reviewId)
    {
        $review = Review::find($reviewId);
        if ($review->status == 0) {
            $review->status = 1;
            $review->save();
        } else {
            $review->status = 0;
            $review->save();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($reviewId)
    {
        $review = Review::find($reviewId);
        $review->delete();
    }

    public function search($query, $currentEntries)
    {
        $searcReview = $this->reviewRepository->search($query, $currentEntries);
        return ReviewResource::collection($searcReview);
    }

    public function filter($value, $currentEntries)
    {
        $filterReview = $this->reviewRepository->filter($value, $currentEntries);
        return ReviewResource::collection($filterReview);
    }
}
