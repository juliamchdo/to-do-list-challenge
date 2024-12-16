import styles from "./TaskCard.module.css";
import { Trash, Check } from "phosphor-react";

interface Task {
  content: string;
  isChecked: boolean;
  id: number;
}

interface TaskCard {
  task: Task;
  onToggleTask: (task: Task) => void;
  removeTask: (task: Task) => void;
}

export function TaskCard({ task, onToggleTask, removeTask }: TaskCard) {
  function handleTaskToggle() {
    onToggleTask(task);
  }

  function handleRemove() {
    removeTask(task);
  }

  const checkboxCheckedClassname = task.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const contentCheckedClassname = task.isChecked
    ? styles["content-checked"]
    : "";
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={task.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.content} ${contentCheckedClassname}`}>
            {task.content}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
