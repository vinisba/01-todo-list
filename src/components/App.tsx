import { Header } from "./Header";
import { TodoInput } from "./TodoInput";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <TodoInput />
        </div>
      </main>
    </>
  );
}
