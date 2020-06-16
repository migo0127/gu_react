import React,{Component} from 'react';
import PropTypes from 'prop-types';

import HomeNews_1 from '../../img/board_3-1.jpg';
import HomeNews_2 from '../../img/board_1-1.jpg';
import HomeNews_3 from '../../img/board_2-1.jpg';

import '../home-news.scss';
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