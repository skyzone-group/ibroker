<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagesTable extends Model
{
    use HasFactory;
    
    protected $table = 'images';
    
    protected $fillable = [
        'object_id',
        'name',
    ];
}
