import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import {useAuth0} from "@auth0/auth0-react";

const App = () => {
    const {isAuthenticated, user, getAccessTokenSilently, logout, loginWithPopup } =useAuth0();
    useEffect(()=>localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated)),[isAuthenticated]);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={
                        <Home
                            authorized={isAuthenticated}
                            user={user}
                            logout={logout}
                            token={getAccessTokenSilently}
                        />}
                    />
                    <Route path="/about" element={
                        <About
                            authorized={isAuthenticated}
                            user={user}
                            logout={logout}
                        />}
                    />
                    <Route path="/login" element={
                        <Login
                            authorized={isAuthenticated}
                            user={user}
                            login={loginWithPopup}
                        />}
                    />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;