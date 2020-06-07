import React,{useState, Component} from 'react';
import MyDisplay from './components/MyDisplay';
import MyButton from './components/MyButton';

function App() {
  const [total,setState] = useState(0);
  return (
    <>
      {/* 可刪除total={total} 查看 MyDisplay 的預設值設定*/}
      {/* 可變更total={"值"} 的值，查看 MyDisplay 的propTypes 設定*/}
      <MyDisplay total={total} />

      <MyButton title = "+1" onClickMethod = {()=>{
        setState(total + 1);
      }} />

      
    <MyButton title = "-1" onClickMethod = {()=>{
        setState(total - 1);
      }}  />

      </>
  )
}

export default App;
