import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './components/app/app';
import {count} from './redux/reducers';

// createStore(reducer);
const store = createStore(count);

function render(){
  ReactDOM.render(<App store={store}/>,document.getElementById('root'));
}

render();

store.subscribe(render);
