import React from 'react'
import Question from './Question/Question'
import QuizNavi from './QuizNavi/QuizNavi'

const Main = ({quizes, userAnswers, quizId, currentQuestion, correctAnswers, onIsNext}) => {
    return (
        <div>
          <QuizNavi quizes={quizes} userAnswers={userAnswers} quizId={quizId}/>
          <Question
            currentQuestion={currentQuestion}
            correctAnswers={correctAnswers}
            quizesLength={quizes.length}
            quiz={quizes[currentQuestion]}
            onIsNext={onIsNext}
            ></Question>
        </div>
          
    )
}

export default Main
