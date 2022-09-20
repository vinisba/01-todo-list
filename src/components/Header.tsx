import styles from "./Header.module.css";
import Rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Rocket} alt="Logotipo da aplicação" />
      <div className={styles.title}>
        to<span>do</span>
      </div>
    </header>
  );
}
