<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('deposit_infos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('is_active')->default(true);
            $table->enum('currency', ['INR', 'USDT']);
            $table->enum('type', ['flat', 'crypto']);
            $table->string('wallet_address')->nullable();
            $table->string('network_type')->nullable();
            $table->string('flat_account_name')->nullable();
            $table->string('flat_bank_name')->nullable();
            $table->string('flat_account_no')->nullable();
            $table->longText('deposit_instruction');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deposit_infos');
    }
};
