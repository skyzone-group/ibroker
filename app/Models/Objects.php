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
        'object_deals',
        'rent_type',
        'access_type',
        'object_time_type',
        'room_count',
        'floor',
        'floor_count',
        'total_area',
        'land_area',
        'done_area',
        'living_area',
        'build_year',
        'object_condition',
        'object_material_type',
        'comment',
        'price',
        'negotiable',
        'region_id',
        'district_id',
        'quarter_id',
        'youtube_url'
    ];
}
