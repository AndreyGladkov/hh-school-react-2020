import { combineReducers } from "redux";
import {
  SHOW_ACTIVE_SLIDE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE
} from "./../actions";

export const activeSlideId = (state = 0, action) => {
  switch (action.type) {
    case SHOW_ACTIVE_SLIDE:
      return action.index;
    default:
      return state;
  }
};

export const dataFromServer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.dataFromServer;
    case FETCH_DATA_REQUEST:
    case FETCH_DATA_FAILURE:
    default:
      return state;
  }
};

export const appStatus = (state = "not ready", action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_REQUEST:
    case FETCH_DATA_FAILURE:
      return action.appStatus;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeSlideId,
  dataFromServer,
  appStatus
});

export default rootReducer;
