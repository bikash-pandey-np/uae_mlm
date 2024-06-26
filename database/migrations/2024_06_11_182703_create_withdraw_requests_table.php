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
        Schema::create('withdraw_requests', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount', 15, 2);
            $table->string('transaction_code', 10)->unique(); 
            $table->enum('currency', ['USDT','INR'])->default('USDT');
            $table->string('wallet_address')->nullable();
            $table->string('bank_info')->nullable();

            $table->enum('status', ['Pending', 'Approved', 'Rejected'])->default('Pending');
            
            $table->boolean('is_approved')->default(false);
            $table->timestamp('approved_at')->nullable();
            $table->decimal('approved_amount', 15, 2)->nullable();
            
            $table->longText('remark')->nullable();
            $table->unsignedBigInteger('requested_by');


            $table->foreign('requested_by')->references('id')->on('customers');

          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('withdraw_requests');
    }
};
