import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
// import SetStatePage from "./pages/CoreConcepts/SetState";

// import ContextPage from "./pages/CoreConcepts/Context/ContextPage";

// import HookPage from "./pages/CoreConcepts/Hook/HookPage";

// import UnControlledPage from "./pages/AdvancedGuides/Uncontrolled";
// import PortalsPage from "./pages/AdvancedGuides/Portals";
import ShouldComponentUpdatePage from "./pages/AdvancedGuides/ShouldComponentUpdate";


import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <div className="center">
      {/* <SetStatePage /> */}
      {/* <ContextPage /> */}
      {/* <HookPage /> */}
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}
      {/* <UnControlledPage /> */}
      {/* <PortalsPage>
        protals
      </PortalsPage> */}
      <ShouldComponentUpdatePage />
    </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
