import React from 'react';

class MyTimerClass extends React.Component{
    constructor(){
        super();
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({ date: new Date() })
          }, 1000);
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <>
                <h1>{this.state.date.toLocaleString()}</h1>
            </>
        )
    }
}

export default MyTimerClass;