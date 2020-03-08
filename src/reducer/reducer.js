import { combineReducers } from "redux";
import { showSlider, fetchDataRequest, fetchDataSuccess, fetchDataFail } from "../actions/actions";

export const activeSlideId = (state = 0, action) => {
    switch (action.type) {
        case showSlider:
            return action.index;
        default:
            return state;
    }
};

export const dataFromServer = (state = [], action) => {
    switch (action.type) {
        case fetchDataSuccess:
            return action.dataFromServer;
        case fetchDataRequest:
        case fetchDataFail:
        default:
            return state;
    }
};

export const appStatus = (state = "not ready", action) => {
    switch (action.type) {
        case fetchDataSuccess:
        case fetchDataRequest:
        case fetchDataFail:
            return action.appStatus;
        default:
            return state;
    }
};

const rootReducer = combineReducers({ activeSlideId, dataFromServer, appStatus });
export default rootReducer;