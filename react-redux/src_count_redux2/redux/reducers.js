import { INCREMENT,DECREMENT } from "./action-types";

export function count(state = 0,action){
    switch(action.type){
        case INCREMENT:
            return state + action.data;

        case DECREMENT:
                return state - action.data;

        default:
            return state;
    }
}