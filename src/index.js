import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="rooms">
      <App />
    </BrowserRouter>
  </Provider>
);
