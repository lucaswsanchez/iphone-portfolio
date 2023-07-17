import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
