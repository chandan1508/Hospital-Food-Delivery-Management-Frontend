import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from "./Store/index.js";
// import App from "./App.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
// import { Provider } from "react-redux";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <PersistGate loading={null} persistor={persistor}>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </PersistGate>
//     </Router>
//   </React.StrictMode>
// );

