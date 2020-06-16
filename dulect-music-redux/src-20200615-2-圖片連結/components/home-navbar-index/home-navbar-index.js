import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Courses from '../navbar-items/navbar-courses/navbar-courses';
import Videos from '../navbar-items/navbar-videos/navbar-videos';
import Instrument from '../navbar-items/navbar-instrument/navbar-instrument';
import News from '../navbar-items/navbar-news/navbar-news';
import About from '../navbar-items/navbar-about/navbar-about';

class HomeNavbarIndex extends Component{

  state = {
    scrolled:false,
    // height:0,
    // width:0
  }


  static propTypes = {
        HomeLogo2 : PropTypes.string.isRequired
    }

    componentDidMount(){
      // this.updateWindowclient();
      // window.addEventListener('resize',this.updateWindowclient);


      window.addEventListener('scroll',()=>{
        const navHie = document.getElementById('home-navWrap').offsetHeight;

        const isfixed  = window.scrollY > (navHie*2);

        if(isfixed){
          this.setState({scrolled:true})
        }else{
          this.setState({scrolled:false})
        }
      })
    }

    // updateWindowclient = ()=>{
    //   this.setState({height:window.innerHeight,width:window.innerWidth})
    // }

    render(){
      const {width} = this.state;

        return (
          <div className={this.state.scrolled ? 'home-navwrap' : ''} id="home-navWrap">
            <div className="home-nav-body home-d-flex">
            {/* nav-logo-left */}
              <div className="home-logo-left">
                <a href="javascript:;">
                  <img src={this.props.HomeLogo2} alt="logo2" />
                </a>
              </div>
              {/* navbar-list */}
              <div className="home-navlist home-d-flex">
                <div className="home-items home-courses">
                  <a href="javascript:;">Courses</a>
                  <ul className="home-courses-list">
                      {
                        <Courses />
                      }
                  </ul>
                </div>
                <div className="home-items home-videos">
                  <a href="javascript:;">Videos</a>
                  <ul className="home-videos-list">
                      {
                        <Videos />
                      }
                  </ul>
                </div>
                <div  className="home-items home-instrument">
                  <a href="javascript:;">Instrument</a>
                  <ul className="home-instrument-list">
                      {
                        <Instrument />
                      }
                  </ul>
                </div>
                <div className="home-logo-middle">
                  <a href="javascript:;">
                    <img src={require('../../img/logo_方1.png')} alt="123" />
                  </a>
                </div>
                <div  className="home-items home-news">
                  <a href="javascript:;">News</a>
                  <ul className="home-news-list">
                      {
                        <News />
                      }
                  </ul>
                </div>
                <div  className="home-items home-about">
                  <a href="javascript:;">About</a>
                  <ul className="home-about-list">
                      {
                        <About />
                      }
                  </ul>
                </div>
              </div>
              <p className="home-line">|</p>
              {/* navbar-user */}
              <div className="home-navuser home-d-flex">
               {/*  <div  className="items">
                  <a href="javascript:;">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              */}
                <div className="home-items">
                  <a href="javascript:;">
                    <i className="fas fa-user"></i>
                  </a>
                </div>
                <div className="home-items">
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

export default HomeNavbarIndex;