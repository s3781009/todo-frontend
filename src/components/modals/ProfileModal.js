import React, { Fragment } from "react";
import "./ProfileModal.css";
const ProfileModal = (props) => {
  return props.isClick ? (
    <Fragment>
      <div className="flex-container-modal">
        <div className="flex-items">{props.user.name}</div>
        <div className="flex-items">{props.user.email}</div>
        <div className="separator" />
        <div className="flex-items">Your profile</div>
        <div className="separator" />
        <div className="flex-items" onClick={props.logout}>
          Log out
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default ProfileModal;
