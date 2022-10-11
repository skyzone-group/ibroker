<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objects extends Model
{
    use HasFactory;
    
    protected $table = 'objects';
    
    protected $fillable = [
        'user_id',
        'object_type_id',
        'access_type',
        'object_time_type',
        'room_count',
        'floor',
        'floor_count',
        'total_area',
        'build_year',
        'comment',
        'price',
        'region_id',
        'district_id',
        'quarter_id',
    ];
}
