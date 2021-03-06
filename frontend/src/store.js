import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./Reducers/productReducers";
import { cartReducer } from "./Reducers/cartReducers";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
