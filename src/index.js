import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {connect, Provider} from "react-redux";
import store from "./store";
import {fetchData} from "./models/dataFromServer";

import * as serviceWorker from './serviceWorker';

import "./less/styles.less";

const AppContainer = connect(
    state => ({
        dataFromServer: state.dataFromServer,
    }),
    {
        fetchData 
    }
)(App);

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    rootElement
);

serviceWorker.unregister();
