<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjectTypeProperty extends Model
{
    use HasFactory;
    
    protected $table = 'object_type_property';
    
    protected $fillable = [
        'object_type_id',
        'name_uz',
        'name_ru',
    ];
}
