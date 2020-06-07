
import {ADD_COMMENT,DEL_COMMENT} from './action-types';

export const doAdd = (comment) => ({type:ADD_COMMENT , data:comment});

export const doDel = (index) => ({type:DEL_COMMENT , data:index});