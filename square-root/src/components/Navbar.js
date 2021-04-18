import React, { useState } from "react";
import logo from "../images/logo.png";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import Backdrop from "./Backdrop";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  let width = useWindowDimensions();

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="SQUAREROOT" />
            </Link>
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
                    <NavLink
                      to={item.path}
                      exact={true}
                      activeStyle={{ fontWeight: "bold" }}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className="navbar-nav">
          {/* user */}
          {!props.auth.isAuthenticated ? (
            <button href="/login" className="user-round-button">
              <a href="/login">Sign in</a>
              <span>
                <FaIcons.FaUser />
              </span>
            </button>
          ) : (
            <li className="nav-item">
              <button
                class="user-round-button"
                onClick={() => setDropdown(!dropdown)}
              >
                {props.auth.user}
                <span>
                  <i class="fas fa-caret-down" />
                </span>
              </button>
              {dropdown && <Dropdown />}
            </li>
          )}

          {/*sidebar*/}
          {sidebar && <Backdrop />}
          <li className="nav-item">
            <Link
              to="#"
              className="icon-button"
              onClick={() => setSidebar(!sidebar)}
            >
              {!sidebar && <MenuIcon />}
            </Link>
          </li>
          <div className={sidebar ? "side-menu active" : "side-menu"}>
            <ul
              className="side-menu-items"
              onClick={() => setSidebar(!sidebar)}
            >
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
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
