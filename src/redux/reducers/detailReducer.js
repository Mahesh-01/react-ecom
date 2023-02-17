import { PRODUCT_DETAIL } from "../types";

export const detailReducer = (state = {products:[]}, action) => {
  switch (action.type) {
      case PRODUCT_DETAIL:
      return {
        ...state,
        products:action.payload
      };
      
    default:
      return state;
  }
};
