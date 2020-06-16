import React,{Component} from 'react';
import PropTypes from 'prop-types';

// import './home-courses-videos.scss';

class HomeCoursesVideos extends Component{


    static propTypes = {
        HomeBg_9:PropTypes.string.isRequired,
        HomeBg_20:PropTypes.string.isRequired,
        HomeVideoMovie:PropTypes.string.isRequired,
    }

    render(){

        return(
            <div className="container-fluid">
                <div className="row home-class-d-flex home-class-cour">
                    <div className="home-class-cour-img col-md-7">
                    <img src={this.props.HomeBg_9}></img>
                    </div>
                    <div className="home-class-cour-txt col-md-3">
                        <h1 className="home-class-cour-title">Music Courses</h1>
                        <p className="home-class-cour-title-ch">實體課程</p>
                        <h2>三五好友一起學習</h2>
                        <div className="txt">
                            <p>最專業教學技巧。</p>
                            <p>最有趣音樂課程。</p>
                            <p>最優質學習環境。</p>
                            <p>小班制分級階段課程。</p>
                            <p>嚴選適合的師資教學。</p>
                            <button type='button' className='home-class-btn'>View More...</button>
                        </div>
                    </div>
                </div>
                <div className="row home-class-d-flex home-class-video">
                    <div className="home-class-video-txt col-md-3">
                        <h1 className="home-class-video-tltie">Video Courses</h1>
                        <p className="home-class-video-tltie-ch">線上影片</p>
                        <h2>隨點隨看，反覆聽講。</h2>
                        <div className="home-class-txt">
                            <p>最有趣音樂課程。</p>
                            <p>輕鬆學習，輕鬆上手。</p>
                            <p>多元課程，音樂饗宴。</p>
                            <p>彈性時間，選擇自由。</p>
                            <button type='button' className='home-class-btn'>View More...</button>
                        </div>
                    </div>
                    <div className="home-class-video-img col-md-7">
                        <img src={this.props.HomeBg_20}></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeCoursesVideos;