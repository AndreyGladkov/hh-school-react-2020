import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import middleware from './components/catalog-section/catalog-middleware';

import MainComponent from "./components/main-component";

const store = createStore(reducer, {product: []}, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.getElementById("root")); 
