import { ALL_PRODUCTS } from "../types";
import { SEARCH_PRODUCTS } from "../types";

export const productReducer = (state = {products:[]}, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        products:action.payload
      };
    
    default:
      return state;
  }
};
