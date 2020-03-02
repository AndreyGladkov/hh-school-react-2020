import {applyMiddleware, combineReducers, createStore} from "redux";
import dataFromServer from "../models/dataFromServer";
import thunk from "../middleware/thunk";

const stateFromServer = {
    dataFromServer: {},
};

const reducer = combineReducers({dataFromServer});

export default createStore(
    reducer,
    stateFromServer,
    applyMiddleware(thunk)
);
