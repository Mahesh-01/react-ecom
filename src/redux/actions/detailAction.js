

import NetworkService from "../../services/NetworkService";
import {PRODUCT_DETAIL } from "../types";
export const getProducts = () => (dispatch,action) => {
    
  NetworkService.get("products/1")
    .then(({ data }) => {

      dispatch({
        type: PRODUCT_DETAIL,
        payload: data
      });

    });
};