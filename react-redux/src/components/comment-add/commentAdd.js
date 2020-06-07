import React,{Component} from 'react';

class CommentAdd extends Component{

    render(){
        return(
            <>
            <div className="col-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"  />
                    </div>
                    <div className="form-group">
                        <label>評論內容</label>
                        <textarea className="form-control" rows="6" placeholder="評論內容" ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10 ">
                            <button type="button" className="btn btn-outline-dark pull-right">提&nbsp;&nbsp;交</button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default CommentAdd;