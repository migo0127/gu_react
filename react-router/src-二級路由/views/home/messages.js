import React,{Component} from 'react';

class Messages extends Component{

    state = {
        messages:[]
    }

    componentDidMount(){
        const {messages} = this.state;
        setTimeout(() =>{
            const messages = [
                {id:3,title:'Message003'},
                {id:6,title:'Message006'},
                {id:9,title:'Message009'}
            ]

            this.setState({messages});
        },1000)
    }

    render(){
        const {messages} = this.state;
        return(
            <ul>
                {
                    messages.map((m,index)=> (
                        <li key={index}>
                            <a href="??">{m.title}</a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Messages;