import { combineReducers } from "redux";
import {
  GET_POPULAR_PRODUCTS_SUCCESS
} from "./../actions";

export const popularProducts = (state = [], action) => {
  switch (action.type) {
    case GET_POPULAR_PRODUCTS_SUCCESS:
      return action.popularProducts;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    popularProducts
});

export default rootReducer;