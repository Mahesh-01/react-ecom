import NetworkService from "../../services/NetworkService";
import { USER_INFO, LOADING_STATE, USER_LOGIN_ERROR } from "../types";

export const loginUser = (formData) => (dispatch) => {

  dispatch({
    type: LOADING_STATE,
    payload: true
  });

  NetworkService.post("login", formData)
    .then(({ data }) => {
      // console.log('api data', data);
      dispatch({
        type: LOADING_STATE,
        payload: false
      });
      if(data.success){
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: ''
      });
        dispatch({
            type: USER_INFO,
            payload: data.user
        });
      }
      
    }).catch(err=>{
      dispatch({
        type: LOADING_STATE,
        payload: false
      });
      dispatch({
          type: USER_INFO,
          payload: {}
      });
      dispatch({
          type: USER_LOGIN_ERROR,
          payload: err.response.data.message
      });
    });
};