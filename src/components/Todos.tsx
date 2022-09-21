import { useState } from "react";
import { Info } from "./Info";
import { TaskInput } from "./TaskInput";
import { EmptyTasks } from "./EmptyTasks";

import { Task } from "../types/task";
import styles from "./Todos.module.css";

export function Todos() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasksLength = tasks.filter((task) => task.completed).length;

  return (
    <>
      <TaskInput />

      <header className={styles.infos}>
        <Info value={tasks.length}>Tarefas criadas</Info>
        <Info value={completedTasksLength} total={tasks.length} active>
          Concluídas
        </Info>
      </header>

      {tasks.length ? "Tarefas" : <EmptyTasks />}
    </>
  );
}
