import React from 'react';
import styles from './QuizNaviResult.module.css'
import QuizNaviResultItem from './QuizNaviResultItem/QuizNaviResultItem';

const QuizNaviResult = ({userAnswers}) => {
    if (!userAnswers) return null
    return (
        <ul className={styles.QuizNaviResult}>
            {userAnswers.map(answer => {
                console.log(answer);
                return (     
                    <QuizNaviResultItem
                    key={answer.quizId}
                    answer={answer}
                    />
                )
            })}
        </ul>
    )
}

export default QuizNaviResult;