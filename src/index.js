import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./css/normalize.css";
import "./css/grid.css";
import "./css/style.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
