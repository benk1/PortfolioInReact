import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <header style={headerStyle}>

        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/projects">
          Projects
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/contact">
          Contact
        </Link>{" "}
        {" "}
        {" "}
      </header>
    </div>
  );
}

const headerStyle = {
  background: "#000000",
  textAlign: "justify",
  padding: "10px"

};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "20px"

};
export default NavBar;