import React, { Component } from "react";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";
import Signup from "./compnents/Signup";
import Home from "./compnents/Home";
import Login from "./compnents/Login";
import Forget from "./compnents/forget";
import How_its_works from "./compnents/how_its_works";
import { connect } from "react-redux";
import addPost from "./compnents/addPost";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const RestrictedRoute = ({ component: Component, userStatus, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userStatus ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/Login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// import './App.css';
class App extends Component {
  render() {
    const { userStatus } = this.props;
    console.log("=======================userStatus=============");
    console.log(userStatus);
    console.log("====================================");
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/forget" component={Forget} />
            <Route path="/Login" component={Login} />
            <Route path="/how_its_works" component={How_its_works} />
            <RestrictedRoute
              exact
              path="/"
              component={Home}
              userStatus={userStatus}
            />
            <RestrictedRoute
              exact
              path="/addPost"
              component={addPost}
              userStatus={userStatus}
            />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus
  };
};
export default connect(mapStateToProps)(App);
