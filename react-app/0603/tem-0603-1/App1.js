import React,{useState, Component} from 'react';


// 函式原件寫法：
// function App() {
//   const [total,setState] = useState(0);
//   return (
//     <>
//       <h1>{total}</h1>

//       <button onClick={()=>{
//         setState(total + 1);
//       }}>+1</button>

//       <button onClick={()=>{
//         setState(total - 1);
//       }}>-1</button>
//     </>
//   )
// }

// 類別原件寫法：
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       total:0
//     };
//   }

//   render(){
//     return(
//       <>
//       <h1>{this.state.total}</h1>
      
//       <button onClick={
//         ()=>{
//           this.setState({total:this.state.total +1})
//         }
//       }>+1</button>

//       <button onClick={
//         ()=>{
//           this.setState({total:this.state.total -1})
//         }
//       }>-1</button>
      
//       </>
//     )
//   }
// }

// 類別原件this寫法：
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      total:0
    }
  }

  handleClick = (value)=>{
    this.setState({total:this.state.total + value});
  }

  render(){
    return(
      <>
      <h1>{this.state.total}</h1>

      <button onClick={
        ()=>{
          this.handleClick(1)
        }
      }>+1</button>


      <button onClick={
        ()=>{
          this.handleClick(-1)
        }
      }>-1</button>

      </>
    )  
  }  
}


export default App;
