import React from 'react'
import styles from './QuizNavItem.module.css'
import classnames from "classnames";

const QuizNavItem = ({quiz}) => {
    return <li className={classnames (styles.QuizNavItem)} >{quiz.id}</li>
}

export default QuizNavItem
