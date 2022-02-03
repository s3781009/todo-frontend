import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./login.css"
import pic from "../assets/1567665.png"
import {Box, Button, Typography} from "@mui/material";
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
      navigate("/");
    }
  },[]);
  return (
    <Box display="flex" flexDirection="row">
      <Box>
        <Button onClick={(e)=>handleClick(e)}>login</Button>
      </Box>
    </Box>
  );
};

export default Login;
