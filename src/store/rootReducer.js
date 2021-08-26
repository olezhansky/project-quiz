import { CLEAR_QUIZES, SET_CURRENT_QUESTION, SET_QUIZES } from './types';

const initialState = {
  quizes: [],
  isLoading: true,
  currentQuestion: 0,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZES:
      return {
        ...state,
        quizes: action.payload.quizes,
        isLoading: false,
      };
    case CLEAR_QUIZES:
      return {
        ...state,
        currentQuestion: 0,
      };
    case SET_CURRENT_QUESTION:
        console.log(state.currentQuestion)
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    default:
      return state;
  }
};
