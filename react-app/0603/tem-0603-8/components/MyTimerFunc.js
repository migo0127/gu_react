import React,{useState,useEffect} from 'react';

function MyTimerFunc(){

    const [date,setDate] = useState(new Date());

      useEffect(()=>{
        const timerId = setInterval(()=>{
            setDate(new Date())
        },1000)
      
      
        return ()=>{
            window.clearInterval(timerId)
        }
       },[date])

    return(
        <>
            <h1>{date.toLocaleString()}</h1>
        </>
    )
}

export default MyTimerFunc;