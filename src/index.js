import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Contextapi from "./context/Contextapi";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
    <Contextapi>
      <App />
    </Contextapi>
  </BrowserRouter>
);
