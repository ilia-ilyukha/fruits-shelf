import { ADD_FRUIT } from '../constants';

const initialState = {
    fruits: [1,2,3,4],
    boxes: [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRUIT:
            let fruits = state.fruits;
            fruits = state.fruits.concat(action.payload);
            return {
                ...state,
                fruits: action.payload
            }
        default:
            return state;
    }
}