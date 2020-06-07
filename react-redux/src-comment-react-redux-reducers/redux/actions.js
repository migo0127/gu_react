
import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENTS} from './action-types';

export const doAdd = (comment) => ({type:ADD_COMMENT , data:comment});

export const doDel = (index) => ({type:DEL_COMMENT , data:index});

const receiveComments = (comments) => ({type:RECEIVE_COMMENTS,data:comments})


// 異步，從資料庫獲取數據
export const getComments = ()=> {
    return dispatch => {
        // 模擬發送ajax請求異步獲取數據
        setTimeout(()=>{
            const comments = [
                {username : 'DL',content:'React加油！！'},
                {username : 'AYG',content:'React你可以的！！'}
            ]
            dispatch(receiveComments(comments));
        },1000);
    }
}

