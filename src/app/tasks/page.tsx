import React from "react";
import Task from "./_components/Task";
import styles from "./page.module.scss";

const TasksPage = () => {
  return (
    <div className={styles.tasksPage}>
      <h2>Tarefas</h2>
      <div className={styles.content}>
        <div className={styles.tasks}>
          <Task
            title="teste"
            description="testando nao sei o que láda sadad asdasdasd testando nao sei o que láda sadad asdasdasd testando nao sei o que láda sadad asdasdasdtestando nao sei o que láda sadad asdasdasd"
          />
          <Task title="teste" description="testando nao sei o que lá" />
          <Task title="teste" description="testando nao sei o que lá" />
          <Task title="teste" description="testando nao sei o que lá" />
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
