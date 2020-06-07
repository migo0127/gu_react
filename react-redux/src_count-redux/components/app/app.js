import React,{Component} from 'react';

import {INCREMENT,DECREMENT} from '../../redux/action-types';

class App extends Component{

    increment = ()=>{
        const selectValue = this.select.value*1;
        this.props.store.dispatch({type:INCREMENT , data:selectValue});
    }

    decrement = ()=>{
        const selectValue = this.select.value*1;
        const count = this.props.store.getState();
        if((count-selectValue) < 0 ){
            this.props.store.dispatch({type:DECREMENT , data:count});
        }else{
            this.props.store.dispatch({type:DECREMENT , data:selectValue});
        }
    }

    incrementOdd = ()=>{
        const selectValue = this.select.value*1;
        const count = this.props.store.getState();
        if(count%2===1){
            this.props.store.dispatch({type:INCREMENT , data:selectValue});
        }
    }

    incrementAsync = ()=>{
        const selectValue = this.select.value*1;
        setTimeout(()=>{
            this.props.store.dispatch({type:INCREMENT , data:selectValue});
        },1000)
    }

    render(){
        const count = this.props.store.getState();
        console.log("store",this.props.store);
        console.log("store.getState()",this.props.store.getState());

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