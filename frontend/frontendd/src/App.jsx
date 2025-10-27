import React, { useState, useEffect } from 'react';
// Import the new components you will create
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 

// Define your Laravel API's URL
// Make sure this port (8000) matches your Laravel server
const API_URL = 'http://localhost:8000/api';

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Objective: Fetch and display data
  const fetchTasks = () => {
    // This uses your 'GET api/tasks' route
    fetch(`${API_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  // Run fetchTasks() once when the component loads
  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. Objective: Add a new task
  const handleAddTask = (taskData) => {
    // This uses your 'POST api/tasks' route
    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(() => {
      // After adding, refresh the list to show the new task
      fetchTasks();
    })
    .catch(error => console.error('Error adding task:', error));
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      
      {/* Component for the "Add new task" form [cite: 81] */}
      <TaskForm onSubmit={handleAddTask} />

      {/* Component to "Display list of tasks" [cite: 81] */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;