<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    public function definition(): array
    {
        $statuses = ['pending', 'in-progress', 'completed'];

        return [
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->optional()->paragraph(2),
            'status' => $this->faker->randomElement($statuses),
            'due_date' => $this->faker->optional()->date('Y-m-d', '+1 year'),
        ];
    }
}