import React from "react";
import { NavLink } from "react-router-dom";

export default function footerComp() {
  let footerstyle = {
    position: "relative",
    width: "100%",
    top: "88vh",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
        <NavLink className="nav-link" to="/About">
          Copyright &copy; apniproperty.com
        </NavLink>
      </p>
    </footer>
  );
}
