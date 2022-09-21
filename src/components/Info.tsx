import { ReactNode } from "react";
import styles from "./Info.module.css";

interface InfoProps {
  children: ReactNode;
  value: number;
  total?: number;
  active?: boolean;
}

export function Info({ children, value, total, active }: InfoProps) {
  return (
    <div className={active ? styles.active : styles.todoInfo}>
      {children}
      <span className={styles.badge}>
        {total && total > 0 ? `${value} de ${total}` : value}
      </span>
    </div>
  );
}
