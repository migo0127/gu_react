import React,{Component} from 'react';

class News extends Component{

    state = {
        newsArr : [
            'News001',
            'News002',
            'News003',
        ]
    }

    render(){
        const {newsArr} = this.state;
        return(
            <ul>
                {
                    newsArr.map((news,index)=> <li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}

export default News;