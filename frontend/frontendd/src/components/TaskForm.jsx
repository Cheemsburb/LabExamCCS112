import React, { useState } from 'react';

// This component shows a form and calls the 'onSubmit' function
// passed from App.js when the form is submitted.
const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!title) {
      alert('Title is required!');
      return;
    }

    // Call the handleAddTask function in App.js with the new task data
    onSubmit({ 
      title: title, 
      description: description,
      due_date: dueDate || null // Send null if date is empty
    });

    // Clear the form fields
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description (optional):</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Due Date (optional):</label>
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;