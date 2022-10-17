<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditionalFieldValues extends Model
{
    use HasFactory;
    
    use HasFactory;
    protected $table = 'additional_field_values';
    
    protected $fillable = [
        'additional_id',
        'object_id',
    ];
    
}
