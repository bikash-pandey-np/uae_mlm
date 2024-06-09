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
        Schema::create('deposit_requests', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount', 15, 2);
            $table->string('transaction_code', 10)->unique(); 
            $table->enum('currency', ['INR', 'USDT']);
            $table->unsignedBigInteger('deposit_info_id');
            $table->unsignedBigInteger('deposited_by');
            $table->boolean('is_approved')->default(false);
            $table->enum('status', ['Pending', 'Approved', 'Rejected'])->default('Pending');
            $table->decimal('approved_amount', 15, 2)->nullable();
            $table->longText('remark')->nullable();
            $table->timestamps();

            $table->foreign('deposit_info_id')->references('id')->on('deposit_infos');
            $table->foreign('deposited_by')->references('id')->on('customers');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deposit_requests');
    }
};
