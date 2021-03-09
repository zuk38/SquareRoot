import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            {this.props.auth.isAuthenticated && this.props.auth.user && (
              <p>Hello {this.props.auth.user.username}</p>
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
                <a href="/" className="button is-light">
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
