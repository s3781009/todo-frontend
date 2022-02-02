import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { SetLocalStorageJwt} from "./api/Auth";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/Profile";
const App = () => {
  const {
    isAuthenticated,
    user, // an object containing details of user provided by the scope
    getAccessTokenSilently,
    logout,
    loginWithPopup,
  } = useAuth0();

  SetLocalStorageJwt(isAuthenticated);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authorized={isAuthenticated}
                user={user}
                logout={logout}
                token={getAccessTokenSilently}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About authorized={isAuthenticated} user={user} logout={logout} />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                authorized={isAuthenticated}
                user={user}
                login={loginWithPopup}
              />
            }
          />
            <Route
                path="/profile"
                element={
                    <Profile
                        authorized={isAuthenticated}
                        user={user}
                    />
                }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
