import getQuizes from '../api/getQuizes';
import { CLEAR_QUIZES, SET_CURRENT_QUESTION, SET_QUIZES } from './types';

export const fetchQuizes = () => (dispatch) => {
  getQuizes().then((quizes) => {
    dispatch({ type: SET_QUIZES, payload: { quizes } });
  });
};

export const clearQuizesAction = () => ({
  type: CLEAR_QUIZES,
});
export const setCurrentQuestionAction = () => ({
  type: SET_CURRENT_QUESTION,
});
