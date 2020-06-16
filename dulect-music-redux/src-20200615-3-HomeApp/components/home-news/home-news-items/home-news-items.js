import React,{Component} from 'react';
import PropTypes from 'prop-types';


// import '../home-news.scss';
import { render } from 'react-dom';

class HomeNewsItme extends Component{

    

    static propTypes = {
        homeNews:PropTypes.object.isRequired,
    }

    render(){
        const {homeNews} = this.props;
        return(
            <div className="home-news-card col-md-3">
                <img></img>
                <h3 className="home-news-tilte-txt">{homeNews.title}</h3>
                <div className="home-news-txt">
                    <p>{homeNews.content}</p>
                </div>
                <button type="button" className="home-news-btn">view more...</button>
            </div>
        )
    }
}

export default HomeNewsItme;