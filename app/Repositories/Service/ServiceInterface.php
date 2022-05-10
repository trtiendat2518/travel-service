<?php

namespace App\Repositories\Service;

use Illuminate\Http\Request;

interface ServiceInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function detail($serviceSlug);
    public function all();
}
