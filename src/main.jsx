import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./app/strore.js";
const helmetContext = {}; 
import "animate.css/animate.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { HashLoader } from "react-spinners";
import App from "./App.jsx";

// const MainApp = React.lazy(() => import("./App.jsx"));


 import "react-photo-view/dist/react-photo-view.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <App/>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
