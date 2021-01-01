import {createStore,applyMiddleware} from 'redux';
import reduce from './reduce/index.js';
import thunk from 'redux-thunk'

let store = createStore(reduce,applyMiddleware(thunk));

export default store