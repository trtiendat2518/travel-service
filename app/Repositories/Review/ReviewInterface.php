<?php

namespace App\Repositories\Review;

use Illuminate\Http\Request;

interface ReviewInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function filter($value, $currentEntries);
}
