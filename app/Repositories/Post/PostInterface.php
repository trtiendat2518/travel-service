<?php

namespace App\Repositories\Post;

use Illuminate\Http\Request;

interface PostInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function detail($postId);
    public function all();
}
