import Button from "./Button.jsx";
import styles from "./TodoItem.module.css";
export default function TodoItem({ task, onToggle, onDelete }) {
  return <li className={`${styles.item} ${task.completed ? styles.completed : ""}`}><label className={styles.taskLabel}><input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /><span className={styles.taskText}>{task.text}</span></label><Button variant="ghost" onClick={() => onDelete(task.id)} className={styles.deleteButton}>Delete</Button></li>;
}
