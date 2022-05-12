<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Repositories\Post\PostInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý bài viết";
        $meta_title = "Quản lý bài viết";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.post.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //SEO
        $meta_desc = "Tạo mới bài viết";
        $meta_title = "Tạo mới bài viết";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.post.create')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function showUpgrade(Request $request, $postSlug)
    {
        $post = Post::where('slug', $postSlug)->first();
        //SEO
        $meta_desc = $post->title;
        $meta_title = $post->title;
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.post.update')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'post'));
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
                'title' => 'bail|required|max:150|min:50|notspecial_spaces|unique:posts',
                'avatar' => 'bail|required|mimes:jpeg,jpg,png',
                'content' => 'bail|required|min:50|max:5000',
                'category_id' => 'required|unique:posts',
            ],
            [
                'title.required' => 'Tiêu đề không được để trống!',
                'title.max' => 'Tiêu đề tối đa 150 ký tự!',
                'title.min' => 'Tiêu đề tối thiểu 50 ký  tự!',
                'title.notspecial_spaces' => 'Tiêu đề không chứa ký tự đặc biệt!',
                'title.unique' => 'Tiêu đề đã tồn tại!',

                'avatar.required' => 'Vui lòng chọn hình ảnh cho bài viết này!',
                'avatar.mimes' => 'Tệp nhập vào phải là jpeg,jpg,png!',

                'content.required' => 'Nội dung không được để trống!',
                'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
                'content.max' => 'Nội dung tối đa 5000 ký tự!',

                'category_id.required' => 'Vui lòng chọn danh mục bài viết',
                'category_id.unique' => 'Danh mục cho bài viết này đã tồn tại'
            ]
        );

        $newPost = new Post();
        $newPost->title = $data['title'];
        $newPost->slug = Str::slug($data['title']);
        $newPost->category_id = $data['category_id'];
        $newPost->content = $data['content'];
        $newPost->author = $request->author;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $newPost->created_at = now();

        $image = $data['avatar'];
        $name = 'post_avatar' . uniqid(md5(rand(1, 999))) . '.png';
        $newPost->avatar = $name;
        $newPost->save();
        Storage::disk('post')->put($name, File::get($image));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listPosts = $this->postRepository->list($currentEntries);
        return PostResource::collection($listPosts);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    public function upgrade(Request $request, $postId)
    {
        $post = Post::find($postId);

        if ($request->avatar == null) {
            $data = $request->validate([
                'title' => ['required', 'max:150', 'min:50', "unique:posts,title,$postId,id", 'notspecial_spaces'],
                'content' => ['required', 'min:50', 'max:5000'],
                'category_id' => ['required', "unique:posts,category_id,$postId,id"],
            ], [
                'title.required' => 'Tiêu đề không được để trống!',
                'title.max' => 'Tiêu đề tối đa 150 ký tự!',
                'title.min' => 'Tiêu đề tối thiểu 50 ký  tự!',
                'title.notspecial_spaces' => 'Tiêu đề không chứa ký tự đặc biệt!',
                'title.unique' => 'Tiêu đề đã tồn tại!',

                'content.required' => 'Nội dung không được để trống!',
                'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
                'content.max' => 'Nội dung tối đa 5000 ký tự!',

                'category_id.required' => 'Vui lòng chọn danh mục bài viết',
                'category_id.unique' => 'Danh mục cho bài viết này đã tồn tại'
            ]);
            $post->title = $data['title'];
            $post->slug = Str::slug($data['title']);
            $post->content = $data['content'];
            $post->category_id = $data['category_id'];
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $post->updated_at = now();
            $post->save();
        } else {
            $data = $request->validate(
                [
                    'title' => ['required', 'max:150', 'min:50', "unique:posts,title,$postId,id", 'notspecial_spaces'],
                    'content' => ['required', 'min:50', 'max:5000'],
                    'category_id' => ['required', "unique:posts,category_id,$postId,id"],
                    'avatar' => 'bail|mimes:jpeg,jpg,png',
                ],
                [
                    'title.required' => 'Tiêu đề không được để trống!',
                    'title.max' => 'Tiêu đề tối đa 150 ký tự!',
                    'title.min' => 'Tiêu đề tối thiểu 50 ký  tự!',
                    'title.notspecial_spaces' => 'Tiêu đề không chứa ký tự đặc biệt!',
                    'title.unique' => 'Tiêu đề đã tồn tại!',

                    'content.required' => 'Nội dung không được để trống!',
                    'content.min' => 'Nội dung phải có 50 ký tự trở lên!',
                    'content.max' => 'Nội dung tối đa 5000 ký tự!',

                    'category_id.required' => 'Vui lòng chọn danh mục bài viết',
                    'category_id.unique' => 'Danh mục cho bài viết này đã tồn tại',
                    'avatar.mimes' => 'Tệp nhập vào phải là jpeg,jpg,png!',
                ]
            );
            $post->title = $data['title'];
            $post->slug = Str::slug($data['title']);
            $post->content = $data['content'];
            $post->category_id = $data['category_id'];
            $image = $request->avatar;
            $name = 'post_avatar_' . uniqid(md5(rand(1, 999))) . '.png';
            Storage::disk('post')->delete($post->avatar);
            Storage::disk('post')->put($name, File::get($image));
            $post->avatar = $name;
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $post->updated_at = now();
            $post->save();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($postId)
    {
        $post = Post::find($postId);
        Storage::disk('post')->delete($post->avatar);
        $post->delete();
    }

    public function search($query, $currentEntries)
    {
        $searchPost = $this->postRepository->search($query, $currentEntries);
        return PostResource::collection($searchPost);
    }

    public function change($postId)
    {
        $post = Post::find($postId);
        if ($post->status == 0) {
            $post->status = 1;
            $post->save();
        } else {
            $post->status = 0;
            $post->save();
        }
    }

    public function detail($postSlug)
    {
        $detailPost = $this->postRepository->detail($postSlug);
        return PostResource::collection($detailPost);
    }

    public function all()
    {
        $detailPost = $this->postRepository->all();
        return PostResource::collection($detailPost);
    }
}
