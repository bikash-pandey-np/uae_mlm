<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\DepositRequest;
use App\Models\Trade;

class Customer extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'full_name',
        'country_code',
        'contact_number',
        'password',
        'is_active',
        'customer_code',
        'profile_img',
        'doc_img',
        'is_verified',
        'balance',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_verified' => 'boolean',
        'balance' => 'float',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($customer) {
            $customer->customer_code = 'CS' . str_pad(Customer::count() + 1, 6, '0', STR_PAD_LEFT);
        });
    }

    public function trades()
    {
        return $this->hasMany(Trade::class, 'traded_by');
    }

    public function deposits()
    {
        return $this->hasMany(DepositRequest::class, 'deposited_by');
    }
}
