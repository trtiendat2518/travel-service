<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'order_id',
        'comment',
        'created_at',
    ];
    protected $primaryKey = 'id';
    protected $table = 'reviews';
}
