<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use Str;

class WithdrawRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'transaction_code',
        'currency',
        'wallet_address',
        'status',
        'is_approved',
        'approved_at',
        'approved_amount',
        'remark',
        'requested_by',
    ];

    protected $casts = [
        'is_approved' => 'boolean',
        'approved_at' => 'datetime',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'requested_by');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            do {
                $randomCode = strtoupper(Str::random(10));
            } while (static::where('transaction_code', $randomCode)->exists());

            $model->transaction_code = $randomCode;
        });
    }
}
