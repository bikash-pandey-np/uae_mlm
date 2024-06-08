<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\DepositRequest;


class DepositInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'is_active',
        'currency',
        'type',
        'wallet_address',
        'network_type',
        'flat_account_name',
        'flat_bank_name',
        'flat_account_no',
        'deposit_instruction',
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function deposits()
    {
        return $this->hasMany(DepositRequest::class);
    }

   
}
