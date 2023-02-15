import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootReducer";
const initialstate = {};
const middleware = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootreducer,
  initialstate,
  composeEnhancers(applyMiddleware(...middleware)),
  
  // applyMiddleware(...middleware)
);

export default store;
