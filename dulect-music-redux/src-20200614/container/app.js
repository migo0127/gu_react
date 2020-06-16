import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomeSliderIndex from '../components/home-slider-index/home-slider-index';
import HomeNavbarIndex from '../components/home-navbar-index/home-navbar-index';
import HomeSliderNews from '../components/home-slider-news/home-slider-nesw';
import HomeSlogan from '../components/home-slogan/home-slogan';
import HomeCoursesVideos from '../components/home-courses-videos/home-courses-videos';
import HomeInstruments from '../components/home-istruments/home-instruments';
import HomeNews from '../components/home-news/home-news';
import Footer from '../components/footer/footer';
import HomeLogo from '../components/img/logo_方1.png';
import HomeLogo2 from '../components/img/logo_長2.svg';
import HomeLogo3 from '../components/img/logo_方.png';
import HomeBg_9 from '../components/img/bg_9.jpg';
import HomeBg_20 from '../components/img/bg_20.jpg';

class App extends Component{

    static propTypes = {
        homeNews:PropTypes.array.isRequired,
        homeSilderNews:PropTypes.object.isRequired,
    }

    render(){
        const {homeNews,homeSilderNews} = this.props;
        return(
            <>
                <HomeSliderIndex />
                <HomeNavbarIndex HomeLogo={HomeLogo} HomeLogo2={HomeLogo2}/>
                <HomeSliderNews homeSilderNews={homeSilderNews}/>
                <HomeSlogan />
                <HomeCoursesVideos HomeBg_9={HomeBg_9} HomeBg_20={HomeBg_20} />
                <HomeInstruments />
                <HomeNews homeNews={homeNews} />
                <Footer HomeLogo3={HomeLogo3}/>
            </>
        )
    }
}

export default connect(
    state =>(
        {
            homeNews:state.homeNews,
            homeSilderNews:state.homeSilderNews,
        }
    )
)(App);