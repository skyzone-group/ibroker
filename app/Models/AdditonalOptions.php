<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditonalOptions extends Model
{
    use HasFactory;
    protected $table = 'additional_options';
    
    protected $fillable = [
        'name_uz',
        'name_ru',
    ];
}
