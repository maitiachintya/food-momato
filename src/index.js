import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App"; // Your main App component
import store from "../src/components/features/store/Store"; // Adjust path as necessary

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
