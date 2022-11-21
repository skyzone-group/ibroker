<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Districts extends Model
{
    protected $table = 'districts';
    use HasFactory;

    public function quarters(){
        return $this->hasMany(Quarters::class, 'district_id', 'id');
    }
}
