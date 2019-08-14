import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Sign from "./pages/sign/Sign";
import Header from "./components/header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
