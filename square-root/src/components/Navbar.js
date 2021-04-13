import Auth from "@aws-amplify/auth";
import React, { Component, useEffect, useState } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

/*function Navbar() {
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SQUAREROOT
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                RAINBEDS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BIODIVERSITY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                WALLS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                INDOOR
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <div className='user'>
          <i class="fas fa-user"/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar; */

export default class Navbar extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
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
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SQUAREROOT
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
          <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Rooftop" className="nav-links">
                Rooftop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Rainbed" className="nav-links">
                Rainbed
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Indoor" className="nav-links">
                Indoor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Plants" className="nav-links">
                Our Plants
              </Link>
            </li>
          </ul>
          <div className="user">
            <i class="fas fa-user" />
          </div>
        </div>

        {/*<div className="nav-center">
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
            {/* please correct this and render links as an array in constants file or something */
        /*}
            <li>
              <Link to="/Rooftop">Rooftop</Link>
            </li>
            <li>
              <Link to="/Rainbed">Rainbed</Link>
            </li>
            <li>
              <Link to="/Indoor">Indoor</Link>
            </li>
            <li>
              <Link to="/Plants">Our Plants</Link>
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
        </div>*/}
      </nav>
    );
  }
}
