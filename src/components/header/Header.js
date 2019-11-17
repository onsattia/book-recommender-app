import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Header.scss";

import CartICon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { auth } from "../../firebase/firebase.utils";

import { selectCartHidden } from "../../redux/cart/selector";
import { selectCurrentUser } from "../../redux/user/selector";

const Header = ({ currentUser, hidden }) => {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("/books").then(res => res.json().then(books => setBooks(books)));
  // }, []);

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <div className="options">
        <Link className="option" to="/explore">
          EXPLORE
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
        <CartICon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
