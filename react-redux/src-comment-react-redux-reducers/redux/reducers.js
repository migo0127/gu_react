import {combineReducers} from 'redux';

import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENTS,INCREMENT,DECREMENT} from './action-types';

const initComments = [];

function comments( state = initComments , action ){

    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state];

        case DEL_COMMENT:
            return state.filter( (comment,index)=> index!==action.data);

        case RECEIVE_COMMENTS:
            return action.data;

        default:
            return state;
    }
}

function count(state = 0,action){
    switch(action.type){
        case INCREMENT:
            return state + action.data;

        case DECREMENT:
                return state - action.data;

        default:
            return state;
    }
}

export default combineReducers({
    comments,
    count
});

/*
    redux 向外暴露的state結構：
    { comments:[] , count:2 }

*/
