import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SetLocalStorageJwt = (isAuthenticated) => {
  useEffect(
    () =>
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated)),
    [isAuthenticated]
  );
};
