<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'user_id',
        'note',
        'status',
        'created_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'orders';
}
