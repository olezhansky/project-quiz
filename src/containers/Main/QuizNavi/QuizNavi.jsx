// import React from 'react'
// import styles from './QuizNavi.module.css'
// import QuizNavItem from './QuizItem/QuizNavItem'


// const QuizNavi = ({quizes, userAnswers, quizId}) => {
//     return (
//         <ul className={styles.QuizNavi}>
//         {quizes.map(quiz => {
//             console.log(quiz);
//             console.log(userAnswers);
//             return (     
//                 <QuizNavItem
//                 key={quiz.id}
//                 quizId={quizId}
//                 quiz={quiz} 
//                 userAnswers={userAnswers}
//                 />
//             )
//         })}
//         </ul>
//     )
// }

// export default QuizNavi

import React from 'react'
import styles from './QuizNavi.module.css'
import QuizNavItem from './QuizItem/QuizNavItem'


const QuizNavi = ({quizes, userAnswers, quizId}) => {
    return (
        <ul className={styles.QuizNavi}>
        {quizes.map(quiz => {
            return (     
                <QuizNavItem
                key={quiz.id}
                quizId={quizId}
                quiz={quiz} 
                userAnswers={userAnswers}
                />
            )
        })}
        </ul>
    )
}

export default QuizNavi

