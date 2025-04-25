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
        Schema::create('drop_down_content', function (Blueprint $table) {
            $table->id();
            $table->integer('app_id');
            $table->integer('content_id');
            $table->integer('selectable_content_id');
            $table->string('selectable_content_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drop_down_content');
    }
};
