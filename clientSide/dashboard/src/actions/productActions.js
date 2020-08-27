import {GET_PRODUCT} from './type'

import axios from 'axios'

// GET REQUEST , PRODUCT
export const getProduct =(payload) =>({
    type:GET_PRODUCT,
    payload
});

export function getProductFromApi() {
    return (dispatch) =>
      axios
      .get("http://localhost:8080/products")
      .then((res) =>{dispatch(getProduct(res.data))
        console.log('ici get user donners',res.data)}                
      );
  }

