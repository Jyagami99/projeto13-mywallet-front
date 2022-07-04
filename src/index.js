import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./assets/css/reset.css";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector(".root")
);
