<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    use HasFactory;
    protected $table = 'friends';
    
    protected $fillable = [
        'owner',
        'friend',
        'status',
    ];
    
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'friend');
    }
}
