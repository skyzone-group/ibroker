<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjectTypesPropertyValues extends Model
{
    use HasFactory;
    
    protected $table = 'object_types_property_values';
    
    protected $fillable = [
        'object_types_property_id',
        'object_id',
    ];
}
