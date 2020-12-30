import {createStore} from 'redux';
import reduce from './reduce/index.js';


let store = createStore(reduce);

export default store