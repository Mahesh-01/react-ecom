import { INCREASE, DECREASE,SETVALUE } from "../types";

export const increase = (product_id) => {

    return {
        type: INCREASE,
        payload: product_id
    }

};
export const decrease = (product_id) => {

    return {
        type: DECREASE,
        payload: product_id
    }

};

export const setValue = (product_id) => {
   
    return {
        type: SETVALUE,
        payload: product_id
    }

};
