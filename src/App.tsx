import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <div className={styles.mainContent}>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
