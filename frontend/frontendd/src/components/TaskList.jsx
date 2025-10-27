import React from 'react';

// This component receives the 'tasks' array from App.js and displays it
const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found. Add one!</p>
      ) : (
        <ul>
          {/* Loop through each task and display its details */}
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.title}</strong> - <em>({task.status})</em>
              <p>{task.description}</p>
              {task.due_date && <small>Due: {task.due_date}</small>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;