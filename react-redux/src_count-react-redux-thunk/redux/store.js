import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"

import {count} from './reducers';

const store = createStore(count,composeWithDevTools(applyMiddleware(thunk)));

export default store;

// applyMiddleware(thunk) 中間插件，協助 redux 處理 異步。