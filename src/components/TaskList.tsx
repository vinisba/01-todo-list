import styles from "./TaskList.module.css";
import { Task } from "./Task";
import { Task as ITask } from "../types/task";

export interface TaskActions {
  onToggleComplete: (id: string) => void;
  onTaskDelete: (id: string) => void;
}

interface TaskListProps extends TaskActions {
  tasks: ITask[];
}

export function TaskList({ tasks, ...actions }: TaskListProps) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <Task key={task.id} {...actions} {...task} />
      ))}
    </ul>
  );
}
