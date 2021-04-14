import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";

function MyNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true); //mobile menu

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //depending on the screen size hide or show
  const showButton = () => {
    if (window.innerWidth <= 768) setButton(false);
    else setButton(true);
  };

  //render only once
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
            SQUAREROOT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/rooftop" className="nav-links">
                Rooftop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rainbed" className="nav-links" onClick={closeMobileMenu}>
                Rainbed
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/indoor" className="nav-links" onClick={closeMobileMenu}>
                Indoor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plants" className="nav-links" onClick={closeMobileMenu}>
                Our Plants
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <>
                  <Link to="/login" className="btn-link">
                    <button class="button is-primary is-outlined">
                      SIGN IN
                    </button>
                  </Link>
                  {/*<FaIcons.FaUser />*/}
                </>
              ) : (
                <Link to="/login" className="btn-link" onClick={closeMobileMenu}>
                  <button
                    class="button is-primary is-outlined is-small"
                  >
                    SIGN IN
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;

/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./MyNavbar.css";
import { IconContext } from "react-icons";

function MyNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaTimes />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>

        
      </IconContext.Provider>
    </>
  );
}

export default MyNavbar;*/
