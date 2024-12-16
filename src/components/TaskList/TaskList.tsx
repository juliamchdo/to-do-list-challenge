import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./TaskList.module.css";
import clipboard from "../../assets/clipboard.svg";
import { TaskCard } from "../TaskCard/TaskCard";

interface Task {
  content: string;
  isChecked: boolean;
  id: number;
}

export function TaskList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  function handleTaskValue(value: string) {
    if (value) {
      setTask(value);
    }
  }

  function handleCreateNewTask() {
    const randomID = Math.floor(Math.random() * 10000);
    const taskCreated = {
      content: task,
      isChecked: false,
      id: randomID,
    };
    if (task) {
      setTaskList((e) => [...e, taskCreated]);
      setTask("");
    }
  }

  function onToggleTask(task: Task) {
    const updatedTasks = taskList.map((item) =>
      item.id === task.id ? { ...item, isChecked: !item.isChecked } : item
    );

    setTaskList(updatedTasks);
  }

  function removeTask(task: Task) {
    const taskListWithRemovedOne = taskList.filter(
      (item) => item.id !== task.id
    );

    setTaskList(taskListWithRemovedOne);
  }

  return (
    <section className={styles.todoList}>
      <div className={styles.inputForm}>
        <input
          value={task}
          onChange={(e) => handleTaskValue(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={handleCreateNewTask} className={styles.createButton}>
          Criar
          <PlusCircle size={22} />
        </button>
      </div>

      <div className={styles.listBox}>
        <div className={styles.listInfo}>
          <strong className={`${styles.infoText} ${styles.infoTextCreated}`}>
            Tarefas criadas <span>5</span>
          </strong>
          <strong className={`${styles.infoText} ${styles.infoTextCompleted}`}>
            Concluídas <span>2 de 5</span>
          </strong>
        </div>

        {taskList.length <= 0 && (
          <div className={styles.emptyList}>
            <img src={clipboard} alt="Clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}

        {taskList.length > 0 && (
          <div className={styles.tasksList}>
            {taskList.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                removeTask={removeTask}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
