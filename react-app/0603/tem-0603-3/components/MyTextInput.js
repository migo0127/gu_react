import React,{useState} from 'react';

function MyTextInput(props){
    
    const [name,setName] = useState('') 
    
    return(
        <>
            <input type="text" value={name} onChange={(event)=>{
                setName(event.target.value)
            }} />

            <button onClick={()=>{props.sendToMe(name)}}>送到父母原件</button>
        </>
    )
}

export default MyTextInput;