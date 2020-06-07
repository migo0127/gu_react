import React,{Component} from 'react';
import CommentAdd from './components/comment-add/commentAdd';
import CommentList from './components/comment-list/commentList';
import $ from 'jquery';

class App extends Component{

    render(){
        return(
            <>
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>請發表對 React 的評論</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <CommentAdd />
                    <CommentList />
                </div>
            </div>
            </>
        )
    }
}

export default App;