import React,{useState, Component} from 'react';
import MyTextInput from './components/MyTextInput';
import MyTextDisplay from './components/MyTextDisplay';

function App() {
  const [nameFromCildren,setNameFromCild] = useState('');
  return (
    <>
      <MyTextDisplay text={nameFromCildren}/>
      <MyTextInput value={nameFromCildren} onChange={(event)=>{
          setNameFromCild(event.target.value)
        }}/>
    </>
  )
}

export default App;
