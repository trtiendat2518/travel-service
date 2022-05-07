<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'full_name',
        'phone_number',
        'address',
        'role',
        'password',
        'status',
        'register_date'
    ];
    protected $primaryKey = 'id';
    protected $table = 'users';
}
