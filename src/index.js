import React from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from "./components/containers/App";
import { store } from './store/index';
import './style.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
