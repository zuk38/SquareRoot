import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeSidebar = () => setSidebar(false);
  const closeDropDown = () => setDropdown(false);
  let width = useWindowDimensions();

  return (
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
            <a href="/login" class="button is-white pad">
              <span>Sign in</span>
              <span class="icon is-small">
                <i class="fas fa-user"></i>
              </span>
            </a>
          ) : (
            <>
              <button
                class="button is-white pad"
                onClick={() => setDropdown(!dropdown)}
              >
                <span>{props.auth.user}</span>
                <span class="icon is-medium">
                  <i class="fas fa-angle-down"></i>
                </span>
              </button>
              {dropdown && <Dropdown {...props} onClose={closeDropDown} />}
            </>
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
            <Sidebar width={width} onClose={closeSidebar} sidebar={sidebar} />
          </div>
        </ul>
      </nav>
  );
};

export default Navbar;
