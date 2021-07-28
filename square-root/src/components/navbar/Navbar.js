import React, { useEffect, useState, useRef } from "react";
import logo from "../../images/logo-dark.png";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
//import Sidebar from "./Sidebar";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import NavbarDropdown from "./NavbarDropdown";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

export default function Navbar(props) {
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => setDropdown(false));
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [navDropdown, setNavDropdown] = useState({
    dropdownAbout: false,
    dropdownGreenspaces: false,
    dropdownContact: false,
  });

  let width = useWindowDimensions();

  useEffect(() => {
    closeMobileMenu();
  }, [width]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (dropdown) => {
    if (window.innerWidth < 1190) {
      setNavDropdown(false);
    } else {
      setNavDropdown({ [dropdown]: true });
    }
    console.log(dropdown)
  };

  const onMouseLeave = () => {
    setNavDropdown(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="SQUAREROOT" />
          </Link>
        </div>
        {click ? (
          <ul className="nav-menu active">
            {NavbarData.map((item, index) => (
              <>
                <NavLink
                  to={item.path}
                  key={index}
                  exact={true}
                  className="nav-links-no-hover"
                >
                  {item.title}
                </NavLink>
                {item.subtitle &&
                  item.subtitle.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      exact={true}
                      className="sub-item"
                    >
                      {item.title}
                    </NavLink>
                  ))}
              </>
            ))}
          </ul>
        ) : (
          <ul className="nav-menu">
            {NavbarData.map((item, index) =>
              item.title === "GREENSPACES" ||
              item.title === "ABOUT" ||
              item.title === "CONTACT" ? (
                <li
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => onMouseEnter(item.dropdown)}
                  onMouseLeave={onMouseLeave}
                >
                  <NavLink
                    to={item.path && item.path}
                    exact={true}
                    className="nav-links-no-hover"
                    activeStyle={{ fontWeight: "bold" }}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                    <i className="fas fa-caret-down" />
                  </NavLink>
                  {
                    {
                      "GREENSPACES": navDropdown.dropdownGreenspaces && (
                        <NavbarDropdown item={item} />
                      ),
                      "ABOUT": navDropdown.dropdownAbout && (
                        <NavbarDropdown item={item} />
                      ),
                      "CONTACT": navDropdown.dropdownContact && (
                        <NavbarDropdown item={item} />
                      ),
                    }[item.title]
                  }
                </li>
              ) : (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.path && item.path}
                    exact={true}
                    className={click ? "nav-links-no-hover" : "nav-links"}
                    activeStyle={{ fontWeight: "bold" }}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        )}
        <ul className="navbar-nav">
          {/* user */}
          {!props.auth.isAuthenticated ? (
            <a href="/login" className="button is-white pad">
              <span>Sign in</span>
              <span className="icon is-small">
                <i className="fas fa-user"></i>
              </span>
            </a>
          ) : (
            <div ref={dropdownRef}>
              <button
                className="button is-white pad"
                onClick={() => setDropdown(!dropdown)}
              >
                <span>{props.auth.user}</span>
                <span className="icon is-medium">
                  <i className="fas fa-angle-down"></i>
                </span>
              </button>
              <Dropdown
                {...props}
                dropdown={dropdown}
                setDropdown={(value) => setDropdown(value)}
              />
            </div>
          )}

          {/*sidebar*/}
          <div className="sidebar-bars" onClick={handleClick}>
            {!click ? <MenuIcon /> : <CloseIcon />}
          </div>
        </ul>
      </nav>
    </>
  );
}

/*const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => setSidebar(false);
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
          {/* user 
          {!props.auth.isAuthenticated ? (
            <a href="/login" className="button is-white pad">
              <span>Sign in</span>
              <span className="icon is-small">
                <i className="fas fa-user"></i>
              </span>
            </a>
          ) : (
            <>
              <Dropdown {...props} />
            </>
          )}

          {/*sidebar
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

export default Navbar;*/
