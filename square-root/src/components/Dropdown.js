import React, { useState, useEffect, useRef } from "react";
import Auth from "@aws-amplify/auth";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as LogoutIcon } from "../icons/logout.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuItems } from "./NavbarData";

export default function Dropdown(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    let height = el.offsetHeight;
    setMenuHeight(height);
  }

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

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="dropdown-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FaIcons.FaUser/>}
            rightIcon={<ChevronIcon />}
            goToMenu="profile"
          >
            My Profile
          </DropdownItem>

          <DropdownItem leftIcon={<LogoutIcon />} onClick={handleLogOut}>
            Log Out
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Profile</h2>
          </DropdownItem>
          <DropdownItem>My Projects</DropdownItem>
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Help Center</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
