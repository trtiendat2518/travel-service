<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;

interface UserInterface
{
    public function list($currentEntries);
    public function search($query, $currentEntries);
    public function filter($value, $currentEntries);
    public function all();
}
