<?php

namespace App\Repositories\User;

use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use App\Models\Users;

/**
 * Class UserRepository.
 */
class UserRepository implements UserInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Users::class;
    }

    public function list($currentEntries)
    {
        return Users::where('id', '>', 0)->orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Users::where('full_name', 'LIKE', '%' . $query . '%')->where('id', '>', 0)
            ->orwhere('email', 'LIKE', '%' . $query . '%')->where('id', '>', 0)
            ->orwhere('phone_number', 'LIKE', '%' . $query . '%')->where('id', '>', 0)
            ->orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function filter($value, $currentEntries)
    {
        return Users::where('id', '>', 0)->where('role', $value)
            ->orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function all()
    {
        return Users::all();
    }
}
