<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Customer;
use App\Models\DepositInfo;

class DepositRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'currency',
        'deposit_info_id',
        'deposited_by',
        'is_approved',
        'approved_amount',
        'remark',
        'transaction_code',
        'status'
    ];
    
    protected $casts = [
        'is_approved' => 'boolean',
        'approved_amount' => 'float',
    ];
    
    public function depositInfo()
    {
        return $this->belongsTo(DepositInfo::class);
    }
    
    public function depositedBy()
    {
        return $this->belongsTo(Customer::class, 'deposited_by');
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
