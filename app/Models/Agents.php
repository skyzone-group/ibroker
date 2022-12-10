<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agents extends Model
{
    use HasFactory;

    protected $table = 'agents';
    
    protected $fillable = [
        'user_id',
        'username',
        'telegram',
        'whatsapp',
        'facebook',
        'instagram',
        'main_color'
    ];
}
