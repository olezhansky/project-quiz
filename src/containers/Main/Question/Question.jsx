import React, { useState } from "react";
import Answer from './Answer/Answer'
import styles from "./Question.module.css";

const Question = ({ quiz, onIsNext, quizesLength, currentQuestion, correctAnswers }) => {
  const [answerId, setAnswerId] = useState(null);
  
  const handleIsCorrect = (answer) => {
    setAnswerId(answer.id);
    correctAnswers(answer, quiz.id);
    setTimeout(() => {
      onIsNext();
      setAnswerId(null);
    }, 1000);
  };

  return (
    <div className={styles.questionField}>
      <h2 className={styles.questionText}>{quiz.question}</h2>
      <p>{currentQuestion + 1}/{quizesLength}</p>
      <div className={styles.QuestionCard}>
        <div className={styles.questionImg}>
          <img src={quiz.img} alt={'img'}></img>
        </div>
        <ul className={styles.answerUl}>
          {quiz.answers.map((answer, index) => {
            return (
              <Answer
                key={index}
                onIsNext={onIsNext}
                answer={answer}
                onClick={handleIsCorrect}
                answerId={answerId}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Question;
