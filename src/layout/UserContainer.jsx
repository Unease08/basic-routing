import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../App.css";

function UserContainer({ children }) {
  return (
    <>
      <div className="user-container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default UserContainer;
