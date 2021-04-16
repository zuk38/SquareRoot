import Auth from "@aws-amplify/auth";
import React, { Component, useEffect, useState } from "react";
import logo from "../images/logo.png";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import Backdrop from "./Backdrop";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  const [itemsHidden, setItemsHidden] = useState(true);
  const [currentPage, setCurrentPage] = useState("/");

  //depending on the screen size hide or show
  const hideItems = () => {
    if (window.innerWidth <= 768) setItemsHidden(true);
    else setItemsHidden(false);
  };
  //render only once
  useEffect(() => {
    hideItems();
  }, []);

  window.addEventListener("resize", hideItems);

  /*beach resort here */
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="SQUAREROOT" />
            </Link>
            <div className="sidebar-bars" onClick={showSideBar}>
              {sidebar ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
            </div>
          </div>
          {!itemsHidden && (
            <ul className="nav-links">
              {NavbarData.slice(
                0,
                NavbarData.map(function(e) {
                  return e.title;
                }).indexOf("HOME")
              ).map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/*sidebar*/}
        <Link to="#" className="sidebar-bars" onClick={showSideBar}>
          {!sidebar ? <FaIcons.FaBars /> : <></>}
        </Link>
        {sidebar ? <Backdrop /> : <></>}
        <div className={sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSideBar}>
            <li className="sidebar-toggle">
              <Link to="#" className="sidebar-bars">
                <FaIcons.FaTimes />
              </Link>
            </li>
            {itemsHidden
              ? NavbarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })
              : NavbarData.slice(
                  NavbarData.map(function(e) {
                    return e.title;
                  }).indexOf("HOME")
                ).map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
          </ul>
        </div>
      </nav>

      {/* beach resort
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="SQUAREROOT" />
            </Link>
            <button type="button" className="nav-btn">
              <FaIcons.FaAlignRight
                className="nav-icon"
                onClick={handleToggle}
              />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {NavbarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      */}

      {/*
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SQUAREROOT
          </Link>
          <div className="sidebar-bars" onClick={showSideBar}>
            <i className={sidebar ? <FaIcons.FaTimes /> : <FaIcons.FaBars />} />
          </div>
          {!itemsHidden && (
            <ul className="nav-menu">
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link to={item.path} className="nav-links">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {props.auth.isAuthenticated && props.auth.user && (
            <p>{props.auth.user}</p>
          )}
          <div className="user">
            {!props.auth.isAuthenticated && (
              <a href="/login" className="button is-outlined">
                <span>Sign in</span>
                <span class="icon is-small">
                  <FaIcons.FaUser />
                </span>
              </a>
            )}
            {props.auth.isAuthenticated && (
              <a href="/" onClick={handleLogOut} className="button is-outlined">
                Log out
              </a>
            )}
          </div>
        </div>
        

        <div className="user">
            <FaIcons.FaUser />
          </div> 
      </nav> */}
    </IconContext.Provider>
  );
}

export default Navbar;

/*export default class Navbar extends Component {
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
        </div>
      </nav>
    );
  }
}*/
