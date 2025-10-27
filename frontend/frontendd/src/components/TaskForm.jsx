import React, { useState } from 'react';
import styles from './style/TaskForm.module.css';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required!');
      return;
    }
    onSubmit({ title, description, due_date: dueDate || null });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Add a New Task</h3>
      <label className={styles.label}>Title:</label>
      <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label className={styles.label}>Description:</label>
      <textarea className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
      <label className={styles.label}>Due Date:</label>
      <input className={styles.input} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit" className={styles.button}>Add Task</button>
    </form>
  );
};

export default TaskForm;
