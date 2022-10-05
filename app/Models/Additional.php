<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Additional extends Model
{
    use HasFactory;
    protected $table = 'additional';
    
    protected $fillable = [
        'name_uz',
        'name_ru',
    ];
}
