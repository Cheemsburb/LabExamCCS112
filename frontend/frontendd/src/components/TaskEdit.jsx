import React, { useState } from 'react';
import styles from './style/TaskEdit.module.css';

const TaskEdit = ({ task, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.due_date || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required!');
      return;
    }
    onUpdate({ ...task, title, description, due_date: dueDate || null });
  };

  return (
    <div className={styles.editContainer}>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.title}>Edit Task</h3>
        <label className={styles.label}>Title:</label>
        <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label className={styles.label}>Description:</label>
        <textarea className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
        <label className={styles.label}>Due Date:</label>
        <input className={styles.input} type="date" value={dueDate || ''} onChange={(e) => setDueDate(e.target.value)} />
        <div className={styles.buttons}>
          <button type="submit" className={styles.saveBtn}>💾 Save</button>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>✖ Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskEdit;