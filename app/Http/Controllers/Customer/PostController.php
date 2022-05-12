<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Service;
use App\Repositories\Post\PostInterface;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * @var PostInterface|\App\Repositories\Repository
     */
    protected $postRepository;

    public function __construct(PostInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function index(Request $request)
    {
        //SEO
        $meta_desc = 'Tất cả bài viết';
        $meta_title = 'Tất cả bài viết';
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return view('customer.pages.posts.index')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function indexDetail(Request $request, $postSlug)
    {
        $post = Post::where('slug', $postSlug)->first();
        //SEO
        $meta_desc = $post->title;
        $meta_title = $post->title;
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return view('customer.pages.posts.detail')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'post', 'service'));
    }

    public function detail($postSlug)
    {
        $detailPost = $this->postRepository->detail($postSlug);
        return PostResource::collection($detailPost);
    }

    public function popular()
    {
        $popularPost = $this->postRepository->popular();
        return PostResource::collection($popularPost);
    }
}
