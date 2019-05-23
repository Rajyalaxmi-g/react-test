import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import updateQuoteReducer from './updateQuoteReducer';

export default combineReducers({
    simpleReducer,
    updateQuoteReducer
});