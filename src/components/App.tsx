import { Header } from "./Header";
import { Todos } from "./Todos";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.wrapper}>
          <Todos />
        </div>
      </main>
    </>
  );
}
