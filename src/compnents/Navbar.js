import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "../App.css";
import Signup from "./Signup";
import Home from "./Home";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/userActions";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo">
              Get work
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/how_its_works">How It Works</Link>
              </li>
              {/* <li><a href="badges.html">lOG IN</a></li> */}

              <li>
                <Link to="/showpost">Show All Post</Link>
              </li>

              <li>
                <Link
                  to="/addPost"
                  className="waves-effect waves-light btn light-blue darken-3"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <button
                  onClick={() => this.props.startLogout()}
                  className="waves-effect waves-light btn light-blue darken-3"
                  style={{ marginRight: "15px" }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <nav className="blue accent-1 ">
            <div className="nav-content ">
              <ul className="tabs tabs-transparent">
                <li className="tab">
                  <a href="#">Web Dev</a>
                </li>
                <li className="tab">
                  <a className="active" href="#test2">
                    Mobile Dev
                  </a>
                </li>
                <li className="tab ">
                  <a href="#test3">Design</a>
                </li>
                <li className="tab">
                  <a href="#test4">Admin Support</a>
                </li>
                <li className="tab">
                  <a href="#test4">Customer Service</a>
                </li>
                <li className="tab">
                  <a href="#test4">Marketing</a>
                </li>
                <li className="tab">
                  <a href="#test4">Accounting</a>
                </li>
                <li className="tab">
                  <a href="#test4">See All Categories</a>
                </li>
              </ul>
            </div>
          </nav>
          echo "# getworkclone" >> README.md git init git add README.md git
          commit -m "first commit" git remote add origin
          https://github.com/umairnaeem49/getworkclone.git git push -u origin
          master
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { startLogout }
)(Navbar);
