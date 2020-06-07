import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './commentItem.css'


class CommentItem extends Component{

    static propTypes = {
        comment : PropTypes.object.isRequired,
        doDel : PropTypes.func.isRequired,
        index : PropTypes.number.isRequired
    }

    handleDelClick = ()=>{
        const {comment , doDel, index} = this.props;
        if(window.confirm(`確認是否刪除 ${comment.username} 的評論？`)){
            doDel(index);
        }
    }

    render(){
        const {comment} = this.props;
        return(
            <>
            <li className="list-group-item">
                <p className="user">{comment.username}<span></span>说：</p>
                <p className="centence">{comment.content}</p>
                <div className="handle">
                <button className="btn btn-danger" onClick={this.handleDelClick}>删除</button>
                </div>
            </li>
            </>
        )
    }
}

export default CommentItem;