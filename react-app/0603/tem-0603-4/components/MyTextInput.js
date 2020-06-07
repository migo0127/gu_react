import React,{useState} from 'react';

function MyTextInput(props){
    
    return(
        <>
            {/* <input type="text" value={props.value} onChange={props.onChange}  */}
            {/* 相等於以下語法 */}
            <input type="text" {...props} />            
        </>
    )
}

export default MyTextInput;