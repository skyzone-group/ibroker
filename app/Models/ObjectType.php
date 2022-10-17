<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjectType extends Model
{
    use HasFactory;
    
    
    protected $table = 'object_types';
    
    protected $fillable = [
        'name_uz',
        'name_ru',
    ];
}
