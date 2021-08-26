import React from 'react'
import Question from './Question/Question'
import QuizNavi from './QuizNavi/QuizNavi'
import QuizNaviResult from './QuizNaviResult/QuizNaviResult'
import styles from './Main.module.css'

const Main = ({quizes, userAnswers, quizId, currentQuestion, correctAnswers, onNext}) => {
    console.log('Main');
    return (
        <div className={styles.Wrapper}>
          <QuizNavi quizes={quizes} userAnswers={userAnswers} quizId={quizId}/>
          <QuizNaviResult userAnswers={userAnswers}/>
          <Question
            currentQuestion={currentQuestion}
            correctAnswers={correctAnswers}
            quizesLength={quizes.length}
            quiz={quizes[currentQuestion]}
            onNext={onNext}
            ></Question>
        </div>
          
    )
}

export default Main;
