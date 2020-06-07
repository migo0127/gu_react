import React,{Component} from 'react';

class App extends Component{

    state = {
        count : 0
    }

    increment = ()=>{
        const selectValue = this.select.value*1;
        const {count} = this.state;
        this.setState({count:count+selectValue});
    }

    decrement = ()=>{
        const selectValue = this.select.value*1;
        const {count} = this.state;
        if( (count-selectValue) <= 0){
            this.setState({count : 0});
        }else{
            this.setState({count:count-selectValue});
        }
    }

    incrementOdd = ()=>{
        const selectValue = this.select.value*1;
        const {count} = this.state;
        if(count%2 === 1){
            this.setState({count:count+selectValue});
        }
    }

    incrementAsync = ()=>{
        const selectValue = this.select.value*1;
        const {count} = this.state;
        setTimeout(()=>{
            this.setState({count:count+selectValue})
        },1000)
    }

    render(){
        const {count} = this.state;
        return(
            <>
                <p>Click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                    <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>&nbsp;
                </div>
            </>
        )
    }
}

export default App;