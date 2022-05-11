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
        'email',
        'note',
        'created_at',
    ];
    protected $primaryKey = 'id';
    protected $table = 'contacts';
}
