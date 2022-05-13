<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'full_name',
        'phone_number',
        'note',
        'created_at',
        'ip_address'
    ];
    protected $primaryKey = 'id';
    protected $table = 'contacts';
}
