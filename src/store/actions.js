import getQuizes from '../api/getQuizes'
import { SET_QUIZES } from './types'

export const fetchQuizes = () => dispatch => {
    getQuizes().then(quizes => {
        dispatch({type: SET_QUIZES, payload: {quizes}})
    })
}