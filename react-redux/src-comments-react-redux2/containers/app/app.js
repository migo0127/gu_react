import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentAdd from '../../components/comment-add/commentAdd';
import CommentList from '../../components/comment-list/commentList';
import {doAdd,doDel,getComments} from '../../redux/actions';

class App extends Component{

    static propTypes = {
        comments:PropTypes.array.isRequired,
        doAdd:PropTypes.func.isRequired,
        doDel:PropTypes.func.isRequired,
        getComments:PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getComments();
    }

    render(){
        const {comments,doAdd,doDel} = this.props;
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
                    <CommentAdd doAdd={doAdd}/>
                    <CommentList comments={comments} doDel={doDel}/>
                </div>
            </div>
            </>
        )
    }
}

export default connect(
    state => ({comments:state}),
    {doAdd,doDel,getComments}
)(App);