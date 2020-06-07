import { INCREMENT,DECREMENT } from "./action-types";

/*
    redux 不支持「異步」，要使用「異步」就得透過中間插件來協助處理。
    redux-thunk 中間插件。

    ※ redux-dispatch：
        - 同步處理：返回一個 物件。
        - 異步處理：返回一個 函數。

*/

// 同步：
export const increment = (selectValue)=> ({type:INCREMENT,data:selectValue});
export const decrement = (selectValue)=> ({type:DECREMENT,data:selectValue});

// 異步：
export const incrementAsync = (selectValue) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(increment(selectValue));
        },1000)
    }
}