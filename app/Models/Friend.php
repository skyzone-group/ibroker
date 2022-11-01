<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    use HasFactory;
    protected $table = 'friends';
    
    protected $fillable = [
        'owner',
        'friend',
        'status',
    ];
    
    public function friend_info()
    {
        return $this->hasOne(User::class, 'id', 'friend');
    }
    
    public function owner_info()
    {
        return $this->hasOne(User::class, 'id', 'owner');
    }

    public function friendship()
    {
        return $this->hasOne(User::class, 'id', 'owner');
    }
}
