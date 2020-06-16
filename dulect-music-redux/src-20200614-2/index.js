import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './container/app';
import store from './redux/store';
import './index.scss'


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ),document.getElementById('root')
);