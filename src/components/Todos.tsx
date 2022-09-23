import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Info } from "./Info";
import { TaskForm } from "./TaskForm";
import { EmptyTasks } from "./EmptyTasks";
import { TaskList } from "./TaskList";

import { Task } from "../types/task";
import styles from "./Todos.module.css";

export function Todos() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasksLength = tasks.filter((task) => task.completed).length;

  function handleFormSubmit(content: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  }

  function handleTaskUpdateComplete(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      })
    );
  }

  function handleTaskDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <TaskForm onFormSubmit={handleFormSubmit} />

      <header className={styles.infos}>
        <Info value={tasks.length}>Tarefas criadas</Info>
        <Info value={completedTasksLength} total={tasks.length} active>
          Concluídas
        </Info>
      </header>

      {tasks.length ? (
        <TaskList
          tasks={tasks}
          onToggleComplete={handleTaskUpdateComplete}
          onTaskDelete={handleTaskDelete}
        />
      ) : (
        <EmptyTasks />
      )}
    </>
  );
}
