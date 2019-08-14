import React from "react";

import "./Sign.scss";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const Sign = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
