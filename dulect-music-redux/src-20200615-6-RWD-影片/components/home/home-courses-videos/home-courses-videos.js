import React,{Component} from 'react';
import PropTypes from 'prop-types';

// import './home-courses-videos.scss';
import HomeBg_9 from '../../../img/bg_9.jpg';
import HomeBg_20 from '../../../img/bg_20.jpg';

class HomeCoursesVideos extends Component{

    state ={
        width:window.innerWidth
    }

    componentDidMount(){
        const {width} = this.state;

        const handleRWD = ()=>{
            const width = window.innerWidth;
            this.setState({width});
        }

        window.addEventListener('resize',handleRWD);
    }

    handleCourClick = () =>{
        if(this.state.width <= 768){
            window.location.href = '/test';
        }
    }


    handleVideoClick = ()=>{
        if(this.state.width <= 768){
            window.location.href = '/test';
        }
    }

    render(){
        const {width} = this.state;
        const rwdWidth = width <= 768 ? 'home-class-cour-img col-md-12' : 'home-class-cour-img col-md-7';

        const rwdWidth2 = width <= 768 ? 'home-class-cour-txt col-md-12' : 'home-class-cour-txt col-md-3';

        const rwdWidth3 = width <= 768 ? 'home-class-video-txt col-md-12' : 'home-class-video-txt col-md-3';

        const rwdWidth4 = width <= 768 ? 'home-class-video-img col-md-12' : 'home-class-video-img col-md-7';
        // console.log(this.state.width);
        return(
            <div className="container-fluid">
                <div className="row home-class-d-flex home-class-cour">
                    <div className={rwdWidth}>
                    <img src={HomeBg_9}></img>
                    </div>
                    <div className={rwdWidth2} onClick={this.handleCourClick}>
                        <h1 className="home-class-cour-title">Music Courses</h1>
                        <p className="home-class-cour-title-ch">實體課程</p>
                        <h2>三五好友一起學習</h2>
                        <div className="home-cour-txt">
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
                    <div className={rwdWidth3} onClick={this.handleVideoClick}>
                        <h1 className="home-class-video-tltie"><a src="/test">Video Courses</a></h1>
                        <p className="home-class-video-tltie-ch"><a src="/test">線上影片</a></p>
                        <h2>隨點隨看，反覆聽講。</h2>
                        <div className="home-class-txt">
                            <p>最有趣音樂課程。</p>
                            <p>輕鬆學習，輕鬆上手。</p>
                            <p>多元課程，音樂饗宴。</p>
                            <p>彈性時間，選擇自由。</p>
                            <button type='button' className='home-class-btn'>View More...</button>
                        </div>
                    </div>
                    <div className={rwdWidth4}>
                        <img src={HomeBg_20}></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeCoursesVideos;