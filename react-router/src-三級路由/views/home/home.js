import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';


import MyNavLink from '../../components/app/MyNavLink';
import News from './news';
import Messages from './messages';

class Home extends Component{

    render(){
        return(
            <>
                <div>
                <h2>Home Route Component</h2>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news" className="mr-3">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/messages" className="mr-3">Messages</MyNavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/messages" component={Messages}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
            </>
        )
    }
}

export default Home;