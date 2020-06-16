import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Courses from '../navbar-items/navbar-courses/navbar-courses';
import Videos from '../navbar-items/navbar-videos/navbar-videos';
import Instrument from '../navbar-items/navbar-instrument/navbar-instrument';
import News from '../navbar-items/navbar-news/navbar-news';
import About from '../navbar-items/navbar-about/navbar-about';
import './navbar.scss';

class Navbar extends Component{

    static propTypes = {
        Logo2 : PropTypes.string.isRequired
    }

    render(){
        return (
            <div id="navWrap-others">
              <div className="nav-body-others nav-d-flex">
              {/* nav-logo-left-others */}
                <div className="nav-logo-left-others">
                  <a href="javascript:;">
                    <img src={this.props.Logo2} alt="123" />
                  </a>
                </div>
                {/* navbar-list */}
                <div className="nav-navlist-others nav-d-flex">
                  <div className="nav-items-others nav-courses-others">
                    <a href="javascript:;">Courses</a>
                    <ul className="nav-courses-list-others">
                        {
                          <Courses />
                        }
                    </ul>
                  </div>
                  <div className="nav-items-others nav-videos-others">
                    <a href="javascript:;">Videos</a>
                    <ul className="nav-videos-list-others">
                        {
                          <Videos />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-instrument-others">
                    <a href="javascript:;">Instrument</a>
                    <ul className="nav-instrument-list-others">
                        {
                          <Instrument />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-news-others">
                    <a href="javascript:;">News</a>
                    <ul className="nav-news-list-others">
                        {
                          <News />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-about-others">
                    <a href="javascript:;">About</a>
                    <ul className="nav-about-list-others">
                        {
                          <About />
                        }
                    </ul>
                  </div>
                </div>
                <p className="nav-line-others">|</p>
                {/* navbar-user */}
                <div className="nav-navuser-others d-flex">
                 {/*  <div  className="items-others">
                    <a href="javascript:;">
                      <i className="fas fa-search"></i>
                    </a>
                  </div>
                */}
                  <div className="nav-items-others">
                    <a href="javascript:;">
                      <i className="fas fa-user"></i>
                    </a>
                  </div>
                  <div className="nav-items-others">
                    <a href="javascript:;">
                      <i className="fas fa-cart-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}

export default Navbar;