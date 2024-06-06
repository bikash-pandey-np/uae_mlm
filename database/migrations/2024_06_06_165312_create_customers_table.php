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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('full_name');
            $table->string('country_code');
            $table->string('contact_number');
            $table->string('password');
            $table->boolean('is_active')->default(true);
            $table->string('customer_code')->unique();
            $table->string('profile_img')->nullable();
            $table->string('doc_img')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->float('balance')->default(0);
            $table->rememberToken();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
