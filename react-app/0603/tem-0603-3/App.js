import React,{useState, Component} from 'react';
import MyTextInput from './components/MyTextInput';

function App() {
  const [nameFromCildren,setNameFromCild] = useState('');
  return (
    <>
      <h1>您好，{nameFromCildren}</h1>
      <MyTextInput sendToMe = {(text)=>{
          setNameFromCild(text)
        }}/>
    </>
  )
}

export default App;
