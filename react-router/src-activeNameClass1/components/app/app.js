import React,{Component} from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';

import About from '../../views/about/about'
import Home from '../../views/home/home'

class App extends Component{

    render(){
        return(
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header mb-5">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-offset-2 col-xs-2">
                        <div className="list-group">
                                <NavLink className="list-group-item" to="/about" activeClassName="activeClass">About</NavLink>
                                <NavLink className="list-group-item" to="/home" activeClassName="activeClass">Home</NavLink>
                        </div>
                    </div>

                    <div className="col-xs-6 ml-5">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
		        </div>
            </div>
            </>
        )
    }
}

export default App;