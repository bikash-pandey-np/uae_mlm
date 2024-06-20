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
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount', 15, 2);
            $table->string('pair');
            $table->enum('type', ['Long', 'Short']);
            $table->integer('duration_minutes');
            $table->decimal('outcome', 15, 2);
            $table->datetime('expired_time');

            $table->unsignedBigInteger('traded_by');

            $table->foreign('traded_by')->references('id')->on('customers');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
