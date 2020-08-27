import productReducer from './productReducer'
import {combineReducers} from 'redux'
const allReducers = combineReducers({
    product: productReducer,
  });
  
  export default allReducers;
