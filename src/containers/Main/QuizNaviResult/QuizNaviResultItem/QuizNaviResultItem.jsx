import React from 'react'
import styles from './QuizNaviResultItem.module.css'

const QuizNaviResultItem = ({answer}) => {
    return (
        <li 
            className={answer.isCorrect ? styles.QuizNaviResultItemGreen : styles.QuizNaviResultItemRed}
        >
                {answer.quizId}
        </li>
    ) 
    
}

export default QuizNaviResultItem;


