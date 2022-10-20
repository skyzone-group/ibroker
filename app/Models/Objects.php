<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ImagesTable;
use App\Models\Regions;
use App\Models\Districts;
use App\Models\Quarters;
use App\Models\AdditionalFieldValues;

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
    
    
    public function object_type()
    {
        return $this->hasOne(ObjectType::class, 'id', 'object_type_id');
    }

    public function object_types_property_values(){
        return $this->hasOne(ObjectTypesPropertyValues::class, 'object_id', 'id');
    }
    
    public function images()
    {
        return $this->hasMany(ImagesTable::class,'object_id','id');
    }

    public function region()
    {
        return $this->hasOne(Regions::class,'id','region_id');
    }

    public function district()
    {
        return $this->hasOne(Districts::class,'id','district_id');
    }

    public function quarter()
    {
        return $this->hasOne(Quarters::class,'id','quarter_id');
    }

    public function additional()
    {
        return $this->hasMany(AdditionalFieldValues::class,'additional_id','id');
    }
}
