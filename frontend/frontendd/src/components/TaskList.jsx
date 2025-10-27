import React from 'react';
import styles from './style/TaskList.module.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.header}>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found. Add one!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={styles.taskItem}>
              <div className={styles.taskHeader}>
                <strong className={styles.taskTitle}>{task.title}</strong>
                <span className={`${styles.statusBadge} ${styles[task.status || 'pending']}`}>
                  {task.status || 'pending'}
                </span>
              </div>
              <p>{task.description || <em>No description</em>}</p>
              {task.due_date && <small>Due: {task.due_date}</small>}
              <div className={styles.actions}>
                <button className={styles.editBtn} onClick={() => onEdit(task)}>✏️ Edit</button>
                <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>🗑 Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
