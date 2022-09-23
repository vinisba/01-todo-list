import styles from "./Task.module.css";
import { Task as ITask } from "../types/task";
import { TaskActions } from "./TaskList";
import { Trash } from "phosphor-react";

interface TaskProps extends ITask, TaskActions {}

export function Task({
  id,
  content,
  completed,
  onToggleComplete,
  onTaskDelete,
}: TaskProps) {
  return (
    <li className={styles.task}>
      <button
        onClick={() => onToggleComplete(id)}
        className={completed ? styles.checked : styles.check}
      />
      <span
        className={completed ? styles.taskContentCompleted : styles.taskContent}
      >
        {content}
      </span>
      <button className={styles.delete} onClick={() => onTaskDelete(id)}>
        <Trash size={20} />
      </button>
    </li>
  );
}
