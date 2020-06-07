import React,{Component} from 'react';

import PropTypes from 'prop-types';

class Counter extends Component{

    static propTypes = {
        count : PropTypes.number.isRequired,
        increment : PropTypes.func.isRequired,
        decrement : PropTypes.func.isRequired
    }

    increment = ()=>{
        const selectValue = this.select.value * 1;
        this.props.increment(selectValue);
    }

    decrement = ()=>{
        const selectValue = this.select.value * 1;
        const {count} = this.props;
        if((count-selectValue) <= 0 ){
            this.props.decrement(count);
        }else{
            this.props.decrement(selectValue);
        }
    }

    incrementOdd = ()=>{
        const selectValue = this.select.value * 1;
        const {count} = this.props;
        if(count % 2 === 1){
            this.props.increment(selectValue);
        }
    }

    incrementAsync = ()=>{
        const selectValue = this.select.value * 1;
        setTimeout(()=>{
            this.props.increment(selectValue);
        },1000)
    }

    render(){
        const {count} = this.props;
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

export default Counter;
