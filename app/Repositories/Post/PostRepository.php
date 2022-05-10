<?php

namespace App\Repositories\Post;

use App\Repositories\Post\CarInterface;
use Illuminate\Http\Request;
use App\Models\Post;

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
        return Post::all();
    }

    public function detail($postSlug)
    {
        return Post::join('places', 'places.id', '=', 'posts.category_id')
            ->join('users', 'users.id', '=', 'posts.author')
            ->select('posts.*', 'users.full_name as author_name', 'places.name as place_name')
            ->where('posts.slug', $postSlug)->get();
    }
}
