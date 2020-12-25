import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducers/userReducer";
import "./i18next";

const store = createStore(Reducer);

ReactDOM.render(
  <Suspense fallback={<div> Loading</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
