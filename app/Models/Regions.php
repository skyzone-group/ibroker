<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Regions extends Model
{
    protected $table = 'regions';
    use HasFactory;

    public function districts(){
        return $this->hasMany(Districts::class, 'region_id', 'id');
    }
}
