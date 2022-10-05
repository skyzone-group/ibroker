<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditionalFields extends Model
{
    use HasFactory;
    protected $table = 'additional_fields';
    
    protected $fillable = [
        'additional_id',
        'object_type_id',
    ];
    
    public function additional()
    {
        return $this->hasOne(Additional::class, 'id', 'additional_id');
    }
}
