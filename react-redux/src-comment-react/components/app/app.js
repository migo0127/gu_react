import React,{Component} from 'react';
import CommentAdd from '../comment-add/commentAdd';
import CommentList from '../comment-list/commentList';

class App extends Component{

    state = {
        comments:[]
    }

    componentDidMount(){
        setTimeout(()=>{
            const comments = [
                {username : 'DL',content:'React加油！！'},
                {username : 'AYG',content:'React你可以的！！'}
            ]
            this.setState({comments});
        },1000)
    }

    doAdd = (comment)=>{
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }

    doDel = (index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({comments});
    }

    render(){
        const {comments} = this.state;
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
                    <CommentAdd doAdd={this.doAdd}/>
                    <CommentList comments={comments} doDel={this.doDel}/>
                </div>
            </div>
            </>
        )
    }
}

export default App;