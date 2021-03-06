import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Courses from './courses/courses';
import Videos from './videos/videos';
import Instrument from './instrument/instrument';
import News from './news/news';
import About from './about/about';
import './navbar.scss';

class NavBar extends Component{

    static propTypes = {
        Logo : PropTypes.string.isRequired,
        Logo2 : PropTypes.string.isRequired,
    }

    render(){
        return (
          <div className="nav-wrap d-flex" id="navWrap">
          {/* nav-logo-left */}
            <div className="logo-left">
              <a href="javascript:;">
                <img src={this.props.Logo2} alt="123" />
              </a>
            </div>
            {/* navbar-list */}
            <div className="navlist d-flex">
              <div className="items courses">
                <a href="javascript:;">Courses</a>
                <ul className="courses-list">
                    {
                      <Courses />
                    }
                </ul>
              </div>
              <div className="items videos">
                <a href="javascript:;">Videos</a>
                <ul className="videos-list">
                    {
                      <Videos />
                    }
                </ul>
              </div>
              <div  className="items instrument">
                <a href="javascript:;">Instrument</a>
                <ul className="instrument-list">
                    {
                      <Instrument />
                    }
                </ul>
              </div>
              <div className="logo-middle">
                <a href="javascript:;">
                  <img src={this.props.Logo} alt="123" />
                </a>
              </div>
              <div  className="items news">
                <a href="javascript:;">News</a>
                <ul className="news-list">
                    {
                      <News />
                    }
                </ul>
              </div>
              <div  className="items about">
                <a href="javascript:;">About</a>
                <ul className="about-list">
                    {
                      <About />
                    }
                </ul>
              </div>
            </div>
            <p className="line">|</p>
            {/* navbar-user */}
            <div className="navuser d-flex">
              <div  className="items">
                <a href="javascript:;">
                  <i class="fas fa-search"></i>
                </a>
              </div>
              <div className="items">
                <a href="javascript:;">
                  <i class="fas fa-user"></i>
                </a>
              </div>
              <div className="items">
                <a href="javascript:;">
                  <i class="fas fa-cart-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        )
    }
}

export default NavBar;