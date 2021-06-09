import React, { useEffect, useState } from 'react'
import styles from './Log.module.css'
import classnames from "classnames";

const Log = ({userAnswers}) => {
    const [correctAnswers, setCorrectAnswers] = useState([])

    useEffect(() => {
        setCorrectAnswers(userAnswers.filter(item => item.isCorrect))
    }, [userAnswers])
    
    return (
        <>
        <ul>
            {userAnswers.map((item, index) => { 
                return (
                        <li  
                            key={index}
                            className={classnames(styles.logItem, {
                                [styles.correct]: item.isCorrect,
                                [styles.incorrect]: !item.isCorrect,
                            })}>
                            {index + 1}
                            &nbsp;
                            {item.isCorrect ? "Correct answer" : "Incorrect answer"} 
                        </li>    
                    )  
                })
            };            
        </ul>
        <p>Correct  {correctAnswers.length} answers of {userAnswers.length} </p>
        </>

    )
}

export default Log
