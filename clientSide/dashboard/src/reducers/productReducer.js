import {GET_PRODUCT} from '../actions/type'
const initialProducts=[]
export default function productReducer(state=initialProducts,action){
    if(action.type ==GET_PRODUCT){
        return action.payload
    }     
    return state
}