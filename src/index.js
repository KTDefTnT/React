import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
// import SetStatePage from "./pages/CoreConcepts/SetState";

// import ContextPage from "./pages/CoreConcepts/Context/ContextPage";

// import HookPage from "./pages/CoreConcepts/Hook/HookPage";


import reportWebVitals from "./reportWebVitals";

ReactDOM.render(>
    <div className="center">
      <SetStatePage />
      {/* <ContextPage /> */}
      {/* <HookPage /> */}
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}
    </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
