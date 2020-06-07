import React,{useState , useEffect} from 'react'

function MyTestFunc(){

    const [total , setTotal] = useState(100);

    // componentDidMount
    useEffect(()=>{
        console.log('MyTestFunc Child componentDidMount');        
    },[])

    // componentDidUpdate
    useEffect(()=>{
        console.log('MyTestFunc Child componentDidUpdate')
    },[total])

    // componentWillUnmount
    useEffect(()=>{
        return()=>{
            console.log('MyTestFunc Child componentWillUnmount')
        }
    },[])

    return(
        <>
        <h1>MyTestFunc</h1>
        <div onClick={() => setTotal(total + 1)}>{total}</div>
        </>
    )
}

export default MyTestFunc;