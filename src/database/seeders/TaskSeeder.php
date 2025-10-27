<?php
namespace Database\Seeders;
use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        // Create 25 tasks with different statuses
        Task::factory()->count(25)->create();
    }
}