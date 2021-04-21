import React, { useState } from "react";
import logo from "../../images/logo.png";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import Backdrop from "../Backdrop";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
                NavbarData.map(function(e) {
                  return e.title;
                }).indexOf("ROOFTOP")
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
                className="user-round-button"
                onClick={() => setDropdown(!dropdown)}
              >
                {props.auth.user}
                <span>
                  <i class="fas fa-caret-down" />
                </span>
              </button>
              {dropdown && <Dropdown {...props}/>}
            </li>
          )}

          {/*sidebar*/}
          <li className="nav-item">
            <Link
              to="#"
              className="sidebar-bars"
              onClick={() => setSidebar(!sidebar)}
            >
              {!sidebar && <MenuIcon />}
            </Link>
          </li>
          <div className={props.sidebar ? "side-menu active" : "side-menu"}>
            <Sidebar width={width} onClick={showSidebar} sidebar={sidebar} />
          </div>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
