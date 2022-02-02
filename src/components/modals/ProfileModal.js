import React, { Fragment } from "react";
import "./ProfileModal.css";
import LogoutIcon from '@mui/icons-material/Logout';
import {Box, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router";
const ProfileModal = (props) => {
  const navigate= useNavigate();

  return props.isClick ? (
    <Fragment>
      <div className="flex-container-modal">
        <div className="flex-items">{props.user.name}</div>
        <div className="flex-items">{props.user.email}</div>
        <div className="separator" />
        <div className="flex-items" onClick={()=>navigate("/profile")}>Your profile</div>
        <div className="separator" />
        <Box margin="10px" display="flex" flexDirection="row">
        <LogoutIcon  onClick={props.logout}/>
        <Typography >Log out</Typography>
        </Box>
      </div>
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default ProfileModal;
