import Auth from "@aws-amplify/auth";
import React, { useState } from "react";
import logo from "../images/logo.png";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MenuItems, NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import Backdrop from "./Backdrop";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Dropdown from "./Dropdown";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  let width = useWindowDimensions();

  const [dropdown, setDropdown] = useState(true);
  const showDropdown = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      props.auth.setAuthStatus(false);
      props.auth.setUser(null);
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
            <div className="user">
              {!props.auth.isAuthenticated && (
                <a href="/login" className="button is-outlined">
                  <span>Sign in</span>
                  <span class="icon is-small">
                    <FaIcons.FaUser />
                  </span>
                </a>
              )}
            </div>
            {props.auth.isAuthenticated && (
              <div className="user-logged">
                <span className="icon-text" onClick={handleLogOut}>
                  <span>{props.auth.user} </span>
                  <span class="icon is-medium">
                    <FaIcons.FaChevronDown />
                  </span>
                </span>
              </div>
            )}
          </div>

          <ul className="nav-links">
            {width > 1190 &&
              NavbarData.slice(
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
        </div>

        {/*sidebar*/}
        <Link to="#" className="sidebar-bars" onClick={showSideBar}>
          {!sidebar && <FaIcons.FaBars />}
        </Link>
        {sidebar && <Backdrop />}
        <div className={sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSideBar}>
            <li className="sidebar-toggle">
              <Link to="#" className="sidebar-bars">
                <FaIcons.FaTimes />
              </Link>
            </li>
            {width <= 1190
              ? NavbarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <NavLink
                        to={item.path}
                        activeStyle={{ fontWeight: "bold" }}
                        exact={true}
                      >
                        {item.title}
                      </NavLink>
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
                      <NavLink
                        to={item.path}
                        activeStyle={{ fontWeight: "bold" }}
                        exact={true}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;