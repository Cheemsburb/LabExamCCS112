<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id(); // id – primary key
            $table->string('title'); // title – string
            $table->text('description')->nullable(); // description – text (nullable)
            $table->enum('status', ['pending', 'in-progress', 'completed'])->default('pending'); // status – enum
            $table->date('due_date')->nullable(); // due_date – date (nullable)
            $table->timestamps(); // created_at and updated_at – timestamps
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};