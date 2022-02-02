import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Header from "../components/Hedear";

const Profile = (props) => {
  return (
    <Fragment>
      <Header user={props.user}/>
      <p>{props.user}</p>
    </Fragment>
  );
};

export default Profile;
