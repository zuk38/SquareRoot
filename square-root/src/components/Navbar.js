import Auth from "@aws-amplify/auth";
import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLogOut = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="SquareRoot" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            {/* please correct this and render links as an array in constants file or something */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {this.props.auth.isAuthenticated && this.props.auth.user && (
              <p>Hello {this.props.auth.user}</p>
            )}
            <div className="buttons">
              {!this.props.auth.isAuthenticated && (
                <div>
                  <a href="/register" className="button is-primary">
                    <strong>Register</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                  </a>
                </div>
              )}
              {this.props.auth.isAuthenticated && (
                <a
                  href="/"
                  onClick={this.handleLogOut}
                  className="button is-light"
                >
                  Log out
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
