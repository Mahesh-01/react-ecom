import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { loadingReducer } from "./loadingReducer";
import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";
import { detailReducer } from "./detailReducer";

export default combineReducers({ productReducer, loadingReducer, cartReducer, loginReducer,detailReducer });
