import React, { useEffect, useState } from 'react'
import styles from './Log.module.css'
import classnames from "classnames";
import { useDispatch } from 'react-redux';
import { clearQuizesAction } from '../store/actions';

const Log = ({userAnswers}) => {

    const dispatch = useDispatch();
    const [correctAnswers, setCorrectAnswers] = useState([])

    useEffect(() => {
        setCorrectAnswers(userAnswers.filter(item => item.isCorrect))
    }, [userAnswers])


    const handleClearQuizes = () => {
        dispatch(clearQuizesAction())
    }
    
    
    
    return (
        <div className={styles.Wrapper}>
            <h2 className={styles.Title}>Result IT-QUIZE:</h2>
            <ul className={styles.List}>
                {userAnswers.map((item, index) => { 
                    return (
                            <li  
                                key={index}
                                className={classnames(styles.logItem, {
                                    [styles.correct]: item.isCorrect,
                                    [styles.incorrect]: !item.isCorrect,
                                })}>
                                {index + 1}
                                {'.'}
                                &nbsp;
                                {item.isCorrect ? "Correct answer" : "Incorrect answer"} 
                                {' '}
                                {item.text}
                            </li>    
                        )  
                    })
                };            
            </ul>
            <p className={styles.Text}>Correct  {correctAnswers.length} answers of {userAnswers.length} </p>
            <button 
                onClick={handleClearQuizes} 
                className={styles.ButtonRestart
            }>
                Restart
            </button>
        </div>

    )
}

export default Log
