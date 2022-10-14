import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from "./App.jsx";
import "./style.scss";

const appdom = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, appdom);