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

    handlePush = (id) =>{
        this.props.history.push(`/home/messages/messagedetail/${id}`);
    }

    handleReplace = (id) =>{
        this.props.history.replace(`/home/messages/messagedetail/${id}`);
    }

    handleGoback = ()=> {
        this.props.history.goBack();
    }

    handleGoforward = ()=> {
        this.props.history.goForward();
    }

    handleblock = ( )=> {
        window.location = 'https://www.google.com';
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.messages.map((m,index)=> (
                            <li key={index}>
                                <MyNavLink to={`/home/messages/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                                &nbsp;&nbsp;<button onClick={() => this.handlePush(m.id)}>push()查看</button>
                                &nbsp;&nbsp;<button onClick={() => this.handleReplace(m.id)}>replace()查看</button>
                            </li>
                        ))
                    }
                </ul>
                <div className="mb-3">
                    <button onClick={this.handleGoback}>goback() 回退</button>&nbsp;&nbsp;
                    <button onClick={this.handleGoforward}>goForward() 前進</button>&nbsp;&nbsp;
                    <button onClick={this.handleblock}>location() 跳轉至Google</button>
                </div>
                <Route path="/home/messages/messagedetail/:id" component={MessageDetail} />
            </div>
        )
    }
}

export default Messages;