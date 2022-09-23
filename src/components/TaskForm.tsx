import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  onFormSubmit: (content: string) => void;
}

export function TaskForm({ onFormSubmit }: TaskFormProps) {
  const [taskContent, setTaskContent] = useState("");

  const contentIsEmpty = !taskContent.length;

  function handleInputchange(e: ChangeEvent<HTMLInputElement>) {
    setTaskContent(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (contentIsEmpty) {
      return;
    }

    onFormSubmit(taskContent);
    setTaskContent("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskInput}>
      <input
        value={taskContent}
        onChange={handleInputchange}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit" disabled={contentIsEmpty}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
