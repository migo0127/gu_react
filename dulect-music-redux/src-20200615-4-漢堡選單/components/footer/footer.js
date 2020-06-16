import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { Router,Link, Route } from 'react-router-dom';

// import './footer.scss'

class Footer extends Component{

    static propTypes = {
        HomeLogo3 : PropTypes.string.isRequired
    }

    render(){

        return(
            <div className="footer-wrap contaier-fluid">
                <div className="row footer-body footer-d-flex">
                    <div className="footer-logo col-md-2">
                        <img src={require('../../img/logo_方.png')}></img>
                    </div>
                    <div className="footer-about-us  col-md-2">
                        <div className="footer-title">
                            關於我們
                        </div>
                        <div className="footer-items">
                            <div>
                               <a src="">網站介紹</a>
                            </div>
                            <div>
                                <a src="">加入我們</a>
                            </div>
                            <div>
                                <a src="">防詐騙宣傳</a>
                            </div>
                            <div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="footer-authority  col-md-2">
                        <div className="footer-title">
                            會員權益
                        </div>
                        <div className="footer-items">
                            <div>
                                <a src="">服務條款</a> 
                            </div>
                            <div>
                                <a src="">隱私權政策</a>
                            </div>
                            <div>
                                <a src="">購物約定條款</a>
                            </div>
                            <div>
                                <a src="">網路安全</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-coustom  col-md-2">
                        <div className="footer-title">
                            客戶服務
                        </div>
                        <div className="footer-items">
                            <div >
                                <a src="javascript:;">訂單問題</a>
                            </div>
                            <div>
                                <a src="">商品退/換問題</a>
                            </div>
                            <div>
                                <a src="">付款/發票問題</a>
                            </div>
                            <div>
                                <a src="">客服中心</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-company  col-md-2">
                        <div className="footer-title">
                            廠商專區
                        </div>
                        <div className="footer-items">
                            <div>
                                <a src="">廠商合作</a>
                            </div>
                            <div>
                                <a src="">異業合作</a>
                            </div>
                            <div>
                                <a src="">物流合作</a>
                            </div>
                            <div>
                                <a src="">企業團體採購</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy col-md-12">
                        ©Dulcet Music 2020
                    </div>
            </div>
        )
    }
}

export default Footer;