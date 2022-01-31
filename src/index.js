import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-aji86obv.us.auth0.com'  //use different props for dev and main branch
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={process.env.REACT_APP_REDIRECT_URI}
      audience={process.env.REACT_APP_AUDIENCE}
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
