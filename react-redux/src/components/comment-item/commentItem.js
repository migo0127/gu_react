import React,{Component} from 'react';

import './commentItem.css'

class CommentItem extends Component{

    render(){
        return(
            <>
            <li className="list-group-item">
                <p className="user"><span></span>说：</p>
                <p className="centence"></p>
                <div className="handle">
                <button className="btn btn-danger">删除</button>
                </div>
            </li>
            </>
        )
    }
}

export default CommentItem;