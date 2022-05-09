<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'order_id',
        'car_id',
        'service_id',
        'place_from',
        'place_to',
        'start',
        'end'
    ];
    protected $primaryKey = 'id';
    protected $table = 'order_details';
}
