<?php

namespace App\Repositories\Car;

use Illuminate\Http\Request;

interface CarInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function detail($carId);
    public function all();
}
