<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name',
        'avatar',
        'content',
        'author',
        'status',
        'slug',
        'created_at',
        'updated_at',
    ];
    protected $primaryKey = 'id';
    protected $table = 'services';
}
