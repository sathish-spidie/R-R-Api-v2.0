import React from "react";
import { Link } from "react-router-dom";

export const NavStyle = {
  textDecoration: "none",
  color: "black"
};
export const Nav = () => {
  return (
    <nav>
      <Link style={NavStyle} to="/">
        <h2>Logo</h2>
      </Link>
      <ul>
        <Link style={NavStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={NavStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};
