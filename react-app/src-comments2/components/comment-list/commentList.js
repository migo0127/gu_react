import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './commentList';
import CommentItem from '../comment-item/commentItem';

class CommentList extends Component{

    static propTypes = {
        comments : PropTypes.array.isRequired
    }

    render(){
        const {comments,doDel} = this.props;
        const display = comments.length === 0 ? 'block' : 'none';
        return(
            <>
            <div className="col-8">
                <h3 className="reply">評論回覆：</h3>
                <h2 style={{display}}>暫無評論，請點擊左側添加評論！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=><CommentItem comment={comment} key={index} index={index}/>)
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default CommentList;