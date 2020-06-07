import React from 'react';

function MyButton(props){
    return(
        <>
            <button onClick={props.onClickMethod}>{props.title}</button>
        </>
    )
}

export default MyButton;