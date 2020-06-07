import React,{useState , Component} from 'react';
import $ from 'jquery';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : 0
    }
  }

  componentDidMount(){
    $('#one').on('click',()=>{
      alert('$:'+this.state.data);
    })

    const one = document.getElementById('one');
    one.addEventListener('click',()=>{
      alert('one:'+this.state.data);
    })
  }

  render(){
    return(
      <>
      <button id="one">Click Me</button>
      <button onClick={()=> this.setState({data:111})}>change to 111</button>
      </>
    )
  }
}

export default App;


