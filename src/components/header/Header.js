import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Styling
import "./Header.scss";

//Utils
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/selector";

const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="header">
      <Link to="/" className="home">
        HOME
      </Link>
      <div className="options">
        <Link className="option" to="/explore">
          EXPLORE
        </Link>

        {currentUser ? (
          <>
            <Link className="option" to="/my-books">
              MY BOOKS
            </Link>

            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
