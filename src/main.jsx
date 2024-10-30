import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import * as servicerWorker from "../public/register-pwa.js";
import App from "./App.jsx";
import { store } from "./App/store.jsx";
import "./Styles/main.scss";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // strict mode is just for development 
  // provider component wraps entire application becoz it wraps App so {store} can be accessed by any component
  // store - contains global variables 
  // Helmet is used to change head tag of document of child  page - wrapped here so it can change any child component 
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);

// servicerWorker.register();
