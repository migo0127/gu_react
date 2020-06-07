import React,{Component} from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

class Main extends Component{

    /*
        四種狀態：
            1.待輸入關鍵字查詢時
            2.查詢中
            3.獲取資料並顯示
            4.錯誤
    */

    state = {
        initView:true,
        loading:false,
        users:null,
        errorMsg:null
    }

    componentDidMount(){
        PubSub.subscribe('search', (msg,searchName)=>{
            this.setState({
                initView:false,
                loading:true
            })
            // console.log(searchName);

            const url = `https://api.github.com/search/users?q=${searchName}`;
            axios.get(url)
                .then(r =>{
                    const result = r.data;
                    const users = result.items.map((item,index)=> ({
                        name:item.login,
                        url:item.html_url,
                        avatar:item.avatar_url
                    }))
                    this.setState({
                        loading:false,
                        users
                    })
                })
                .catch(error =>{
                    this.setState({
                        loading:false,
                        errorMsg:error.message
                    })
                })
        })
    }

    render(){
        const {initView,loading,errorMsg,users} = this.state;

        if(initView){
            return <h2>請輸入關鍵字查詢</h2>
        }else if(loading){
            return <h2>關鍵字查詢中...</h2>
        }else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        }else{
            const display = users.length === 0 ? 'block' : 'none';
            return(
                <div className="row">
                    {
                        users.map((user,index)=> (
                            <div className="card col-2 m-2" style={{width: 100}} key={index}>
                                <a href={user.url} alt="" target="_blank">
                                    <img src={user.avatar} className="card-img-top" alt="" />
                                </a>
                                <div className="card-body">
                                    <p className="card-text">{user.name}</p>
                                </div>

                            </div>
                        ))
                    }
                    <p style={{display}}>查無資料</p>
                </div>
            )
        }
    }
}

export default Main;