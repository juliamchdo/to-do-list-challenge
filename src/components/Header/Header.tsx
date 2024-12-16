import logo from "../../assets/todo-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerBox}>
      <img className={styles.logoTodo} src={logo} alt="Rocket logo" />
    </header>
  );
}
