"use client";
import CheckBox from "@/components/checkBox/CheckBox";
import styles from "./Task.module.scss";
import { CSSProperties, useCallback, useState } from "react";
type TaskProps = {
  title: string;
  description: string;
};
const Task = ({ description }: TaskProps) => {
  const [isCompleted, setisCompleted] = useState(false);

  const handleClickCheckBox = useCallback(() => {
    setisCompleted(!isCompleted);
  }, [isCompleted]);

  const handleTextStyles = useCallback(() => {
    const styles: CSSProperties = {
      textDecoration: isCompleted ? "line-through #c9c9c9 3px" : "none",
      color: isCompleted ? "#a5a3a3" : "white",
    };

    return styles;
  }, [isCompleted]);

  return (
    <div className={styles.taskContainer}>
      <div className={styles.task}>
        <div className={styles.checkBoxContainer}>
          <CheckBox onClick={handleClickCheckBox} />
        </div>
        <div className={styles.textContainer} style={handleTextStyles()}>
          <h3>
            {description} 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Task;
