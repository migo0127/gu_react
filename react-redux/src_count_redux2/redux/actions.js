import { INCREMENT,DECREMENT } from "./action-types";

export const increment = (selectValue)=> ({type:INCREMENT,data:selectValue});
export const decrement = (selectValue)=> ({type:DECREMENT,data:selectValue});