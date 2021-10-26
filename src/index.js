import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/app.css";
import FirebaseContext from "./context/firebase";
import { firebase, fireDB, fireAuth } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, fireDB, fireAuth }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
