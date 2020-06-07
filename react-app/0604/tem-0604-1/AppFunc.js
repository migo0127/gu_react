import React,{useState,useEffect,Component} from 'react';
import $ from 'jquery';

function App(){
  const [data,setData] = useState(0);

useEffect(()=>{
  $('#one').on('click',()=>{
    alert('$:'+this.state.data);
  })

  const one = document.getElementById('one');
  one.addEventListener('click',()=>{
    alert('one:'+this.state.data);
  })

},[data])

  return(
    <>
    <button type="button" id="one">Click Me</button>
    <button type="button" onClick={()=>this.setState({data:111})}>change 111</button>
    </>
  )
}

export default App;


