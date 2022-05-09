<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name',
        'type'
    ];
    protected $primaryKey = 'id';
    protected $table = 'places';
}
