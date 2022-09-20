import { PlusCircle } from "phosphor-react";
import styles from "./TodoInput.module.css";

export function TodoInput() {
  return (
    <div className={styles.todoInput}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
