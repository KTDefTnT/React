import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
// import SetStatePage from "./pages/CoreConcepts/SetState";

// import ContextPage from "./pages/CoreConcepts/Context/ContextPage";

// import HookPage from "./pages/CoreConcepts/Hook/HookPage";
// import ReduxPage from "./pages/Redux/ReduxPage";

// import ReactReduxPage from "./pages/ReactRedux/ReactReduxPage";

import ReactRouterPage from "./pages/ReactRouter";

import store from './store';
import { Provider } from './React-Redux';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <div className="center">
      {/* <SetStatePage /> */}
      {/* <ContextPage /> */}
      {/* <HookPage /> */}
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}
      <ReactRouterPage />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
