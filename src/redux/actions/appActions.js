import { ADD_FRUIT } from "../constants";

export const addFruitAction = (fruit) => {
    return{
        type: ADD_FRUIT,
        payload: fruit,
    } 
}