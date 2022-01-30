import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-aji86obv.us.auth0.com"}
      clientId={"99fjVAp3HINjYILj5snvIp4262fwl6Ek"}
      redirectUri={"https://192.168.0.173:3000"}
      audience="http://api/items"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
