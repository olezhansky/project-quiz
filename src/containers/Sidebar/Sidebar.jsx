import React from "react";
import QuizeName from "./QuizName/QuizeName";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.SideBar}>
      <QuizeName />
      <QuizeName />
    </div>
  );
};

export default Sidebar;
