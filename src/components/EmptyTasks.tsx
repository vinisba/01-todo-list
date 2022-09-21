import styles from "./EmptyTasks.module.css";
import Clipboard from "../assets/clipboard.svg";

export function EmptyTasks() {
  return (
    <div className={styles.empty}>
      <img src={Clipboard} alt="Imagem de uma lista vazia" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
