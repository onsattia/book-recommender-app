import React, { Component } from "react";

import "./SignIn.scss";

import Input from "../input/Input";
import Button from "../button/Button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    console.log(e.target);
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
