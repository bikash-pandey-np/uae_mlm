<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;

class Trade extends Model
{
    use HasFactory;
    protected $fillable = [
        'amount',
        'pair',
        'type',
        'duration_minutes',
        'outcome',
        'expired_time',
        'traded_by',
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'traded_by');
    }
}
