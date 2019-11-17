import React from "react";

//Components
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

//Styling
import "./Sign.scss";

const Sign = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
