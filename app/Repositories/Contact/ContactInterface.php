<?php

namespace App\Repositories\Contact;

use Illuminate\Http\Request;

interface ContactInterface
{
    // /**
    //  * search
    //  * @return mixed
    //  */
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function filter($value, $currentEntries);
}
