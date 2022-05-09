<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name',
        'avatar',
        'status',
        'created_at',
        'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'cars';
}
