<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use App\Repositories\User\UserInterface;
use App\Models\Users;

/**
 * Class UserRepository.
 */
class UserRespository extends EloquentRepository implements UserInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Users::class;
    }
}
