import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/styles/reset.css";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector(".root")
);
