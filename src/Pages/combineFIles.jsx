import React from "react";
import { useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CombineFiles = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegister = () => {
    setShowRegister(true);
  };
  const handleLogin = () => {
    setShowRegister(false);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="formBox">
        <div className="form">
          <div className="formHeader">
            <div
              onClick={handleLogin}
              className={`${showRegister ? "logIn" : "registerActive"}`}
            >
              Log In
            </div>
            <div
              onClick={handleRegister}
              className={`${showRegister ? "logInActive" : "logIn"}`}
            >
              Register
            </div>
          </div>
          {showRegister ? <Register /> : <Login />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CombineFiles;
