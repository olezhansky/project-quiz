import { SET_QUIZES } from "./types"

const initialState = {
    quizes: [],
    isLoading: true,
    currentQuestion: 0
}

export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
       case SET_QUIZES: 
            return {
                ...state,
                quizes: action.payload.quizes,
                isLoading: false
            }
        default: 
            return state
   }
}

