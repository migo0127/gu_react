import React,{Component} from 'react';
import {Route} from 'react-router-dom';

import MessageDetail from './message-detail';
import MyNavLink from '../../components/app/MyNavLink';

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
        return(
            <div>
                <ul>
                    {
                        this.state.messages.map((m,index)=> (
                            <li key={index}>
                                <MyNavLink to={`/home/messages/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            </li>
                        ))
                    }
                </ul>
                <Route path="/home/messages/messagedetail/:id" component={MessageDetail} />
            </div>
        )
    }
}

export default Messages;