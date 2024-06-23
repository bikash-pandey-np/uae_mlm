<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use Illuminate\Support\Carbon;

class Trade extends Model
{
    use HasFactory;
    protected $fillable = [
        'amount',
        'pair',
        'trade_price',
        'status',
        'is_active',
        'trade_close_price',
        'type',
        'duration_minutes',
        'outcome',
        'expired_time',
        'traded_by',
    ];

    protected $casts = [
        'expired_time' => 'datetime'
    ];
  
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'traded_by');
    }
}
