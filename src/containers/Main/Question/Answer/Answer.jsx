import React from "react";
import styles from "./Answer.module.css";
import classnames from "classnames";

const Answer = ({ answer, onClick, answerId, onIsNext }) => {
  
  const handleClick = () => {
    onClick(answer);
    onIsNext();
  };

  return (
    <li
      className={classnames(styles.Answer, {
        [styles.correct]: answerId && answer.isCorrect,
        [styles.incorrect]: answer.id === answerId && !answer.isCorrect,
      })}
      onClick={handleClick}
    >
      {answer.text}
    </li>
  );
};

export default Answer;
