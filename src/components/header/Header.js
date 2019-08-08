import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Logo</Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
