import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";
import ProfileModal from "./modals/ProfileModal";
import { Navigate, useNavigate } from "react-router";

const Header = (props) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (props.user == null) {
      setImage(
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
      );
    } else {
      setImage(props.user.picture);
    }
  }, [props.user]);
  const [click, setClick] = useState(false);

  const toggleModal = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  let navigate = useNavigate();
  const toAbout = () => {
    let path = `/about`;
    navigate(path);
  };

  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item">
          <h3 className="pages" onClick={() => navigate("/")}>
            Home
          </h3>
        </div>
        <div
          className="flex-item"
          onClick={() => {
            return <Navigate to="/about" />;
          }}
        >
          <h3 className="pages" onClick={() => navigate("/about")}>
            About
          </h3>
        </div>
        <div className="flex-item">
          <img
            className="profile-image"
            src={image}
            onClick={() => toggleModal()}
           alt="profile pic"/>
        </div>
      </div>
      <ProfileModal isClick={click} user={props.user} logout={props.logout} />
    </Fragment>
  );
};

export default Header;
