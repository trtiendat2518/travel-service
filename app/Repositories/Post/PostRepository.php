<?php

namespace App\Repositories\Post;

use App\Models\OrderDetail;
use App\Repositories\Post\CarInterface;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

/**
 * Class OrderRepository.
 */
class PostRepository implements PostInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Post::class;
    }

    public function list($currentEntries)
    {
        return Post::join('places', 'places.id', '=', 'posts.category_id')
            ->join('users', 'users.id', '=', 'posts.author')
            ->select('posts.*', 'users.full_name as author_name', 'places.name as place_name')
            ->orderby('posts.id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Post::join('places', 'places.id', '=', 'posts.category_id')
            ->join('users', 'users.id', '=', 'posts.author')
            ->select('posts.*', 'users.full_name as author_name', 'places.name as place_name')
            ->where('posts.title', 'LIKE', '%' . $query . '%')->orderby('posts.id', 'DESC')->paginate($currentEntries);
    }

    public function all()
    {
        return Post::join('places', 'places.id', '=', 'posts.category_id')->get();
    }

    public function detail($postSlug)
    {
        return Post::join('places', 'places.id', '=', 'posts.category_id')
            ->join('users', 'users.id', '=', 'posts.author')
            ->select('posts.*', 'users.full_name as author_name', 'places.name as place_name')
            ->where('posts.slug', $postSlug)->get();
    }

    public function popular()
    {
        return OrderDetail::join('posts', 'posts.category_id', '=', 'order_details.place_to')
            ->join('places', 'places.id', '=', 'posts.category_id')
            ->select(
                DB::raw("COUNT(place_to) AS post_popular"),
                'place_to',
                'posts.id',
                'posts.title',
                'posts.slug',
                'posts.avatar',
                'places.name'
            )
            ->groupBy('place_to', 'id')
            ->where('place_to', '>', 0)
            ->orderBy('post_popular', 'DESC')->limit(12)->get();
    }
}
