import {ADD_COMMENT,DEL_COMMENT} from './action-types';

const initComments = [
    {username : 'DL',content:'React加油！！'},
    {username : 'AYG',content:'React你可以的！！'}
];

export function comments( state = initComments , action ){

    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state];

        case DEL_COMMENT:
            return state.filter( (comment,index)=> index!==action.data);

        default:
            return state;
    }
}