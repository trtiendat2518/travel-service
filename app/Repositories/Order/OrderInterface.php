<?php

namespace App\Repositories\Order;

use Illuminate\Http\Request;

interface OrderInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function filter($value, $currentEntries);
    public function listPlaces();
}
