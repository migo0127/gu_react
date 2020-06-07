import React,{Component} from 'react';

import './commentList';

class CommentList extends Component{

    render(){
        return(
            <>
            <div className="col-8">
                <h3 className="reply">評論回覆：</h3>
                <h2 style={{display:'none'}}>暫無評論，請點擊左側添加評論！！！</h2>
                <ul className="list-group">
                    <li></li>
                </ul>
            </div>
            </>
        )
    }
}

export default CommentList;