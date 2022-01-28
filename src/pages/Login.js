import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Login = (props) => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated"))
  );
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    props.login();
  };
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/home");
    }
  });
  return (
    <div>
      <h1>this is the login page</h1>
      <button onClick={(event) => handleClick(event)}>Click here</button>
      <p>to sign up or create a free account</p>
    </div>
  );
};

export default Login;
