import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class CommentItem extends Component{

    static propTypes = {
        comment:PropTypes.object.isRequired,
        //deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }

    handleDelete = ()=>{
        const {comment,index} = this.props
        //if(window.confirm(`确定删除${comment.username}的评论吗？`)){
            console.log(`确定删除${comment.username}的评论吗？`);
            //deleteComment(index)
            PubSub.publish('delete',index)
        //}
    }

    render(){
        const {comment} = this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                    <button className="btn btn-danger" onClick={this.handleDelete}>删除</button>
                </div>
                <p className="user"><span>{comment.username}</span>说：</p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
