import React,{Component} from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component{

    state = {
        username:'',
        content:''
    }

    static propTyeps = {
        doAdd : PropTypes.func.isRequired
    }

    handleClick = ()=>{
        const comment = this.state;
        if(!this.state.username || !this.state.content){
            return alert('用戶名及評論不可為空白');
        }
        this.props.doAdd(comment);
        this.setState({
            username:'',
            content:''
        })
    }

    handleNameChange = (event)=>{
        const username = event.target.value;
        this.setState({username});
    }

    handleContentChange = (event)=>{
        const content = event.target.value;
        this.setState({content});
    }


    render(){

        return(
            <>
            <div className="col-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"  value={this.state.username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>評論內容</label>
                        <textarea className="form-control" rows="6" placeholder="評論內容" value={this.state.content} onChange={this.handleContentChange} ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10 ">
                            <button type="button" className="btn btn-outline-dark pull-right" onClick={this.handleClick}>提&nbsp;&nbsp;交</button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default CommentAdd;