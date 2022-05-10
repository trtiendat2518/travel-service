<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'category_id',
        'title',
        'avatar',
        'content',
        'status',
        'author',
        'created_at',
        'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'posts';
}
