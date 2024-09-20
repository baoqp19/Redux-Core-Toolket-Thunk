import { createStore } from 'redux';
import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {composeWithDevTools} from 'reudx'


const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;