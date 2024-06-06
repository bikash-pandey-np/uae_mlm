<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;
use App\Models\DepositInfo;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user1 = User::create([
            'name' => 'John Doe',
            'email' => 'admin@app.com',
            'password' => Hash::make('admin123')
        ]);

        DepositInfo::create([
            'title' => 'Sample Deposit Info',
            'currency' => 'INR',
            'type' => 'flat',
            'wallet_address' => null,
            'network_type' => null,
            'flat_account_name' => 'Account Holder Name',
            'flat_bank_name' => 'Punjab National Bank',
            'flat_account_no' => '8098989889DB',
            'deposit_instruction' => 'Sample deposit instruction.',
        ]);

        DepositInfo::create([
            'title' => 'Sample Deposit Info 1',
            'currency' => 'USDT',
            'type' => 'Crypto',
            'wallet_address' => '12312312312312',
            'network_type' => 'TRC20',
            'flat_account_name' => null,
            'flat_bank_name' => null,
            'flat_account_no' => null,
            'deposit_instruction' => 'Sample deposit instruction.',
        ]);
    }
}
