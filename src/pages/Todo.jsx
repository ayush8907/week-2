import { useMemo, useState } from "react";
import Button from "../components/Button.jsx";
import TodoItem from "../components/TodoItem.jsx";
import styles from "./Todo.module.css";
const starterTasks = [{ id: 1, text: "Understand React components", completed: true }, { id: 2, text: "Practise props and state", completed: false }, { id: 3, text: "Build a small React project", completed: false }];
export default function Todo() {
  const [tasks, setTasks] = useState(starterTasks); const [input, setInput] = useState(""); const [error, setError] = useState("");
  const completedCount = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  function addTask(event) { event.preventDefault(); const text = input.trim(); if (!text) { setError("Please enter a task before adding it."); return; } setTasks((current) => [...current, { id: Date.now(), text, completed: false }]); setInput(""); setError(""); }
  function toggleTask(id) { setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)); }
  function deleteTask(id) { setTasks((current) => current.filter((task) => task.id !== id)); }
  return <section className={`container ${styles.page}`}><div className={styles.heading}><p className="eyebrow">TASK 03 / STATE & EVENT HANDLING</p><h1>Make space<br />for <em>what matters.</em></h1><p>Write down a task, add it to your list, mark it complete, or remove it when you're done.</p></div>
    <div className={styles.todoLayout}><div className={styles.listPanel}><div className={styles.listHeader}><div><p className="eyebrow">YOUR CHECKLIST</p><h2>Today's tasks</h2></div><div className={styles.progress}><strong>{completedCount}/{tasks.length}</strong><span>completed</span></div></div>
      <form className={styles.addForm} onSubmit={addTask}><label className={styles.srOnly} htmlFor="new-task">New task</label><input id="new-task" value={input} onChange={(event) => { setInput(event.target.value); if (error) setError(""); }} placeholder="What would you like to do?" maxLength={120} /><Button type="submit">Add task <span aria-hidden="true">+</span></Button></form>
      {error && <p className={styles.error} role="alert">{error}</p>}
      {tasks.length > 0 ? <ul className={styles.taskList}>{tasks.map((task) => <TodoItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />)}</ul> : <div className={styles.empty}><span>✓</span><h3>All clear.</h3><p>Add a task above to get started.</p></div>}
      {tasks.length > 0 && <div className={styles.listFooter}><span>{tasks.length - completedCount} tasks left to do</span><button type="button" onClick={() => setTasks((current) => current.filter((task) => !task.completed))}>Clear completed</button></div>}</div>
      <aside className={styles.tip}><p className="eyebrow">A SMALL REMINDER</p><h2>Progress is built one task at a time.</h2><p>This page demonstrates React state:</p><ul><li><strong>Add:</strong> append a task to an array.</li><li><strong>Complete:</strong> update one task using its ID.</li><li><strong>Delete:</strong> filter a task out of the array.</li></ul></aside></div></section>;
}
