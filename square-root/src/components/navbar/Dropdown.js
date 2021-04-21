import React, { useState, useEffect, useRef } from "react";
import Auth from "@aws-amplify/auth";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import * as FaIcons from "react-icons/fa";
import { MenuItems } from "./NavbarData";

export default function Dropdown(props) {
  const dropdownRef = useRef(null);
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

  function DropdownItem({leftIcon, children, onItemClick}) {
    return (
      <a
        href="#"
        className="my-dropdown-item"
        onClick={onItemClick}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
      </a>
    );
  }

  return (
    <div className="my-dropdown">
      <div className="menu">
        <DropdownItem leftIcon={<FaIcons.FaUser />}>My Projects</DropdownItem>
        <DropdownItem leftIcon="">Account</DropdownItem>
        <DropdownItem leftIcon="">Help Center</DropdownItem>

        <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
          Log Out
        </DropdownItem>
      </div>
    </div>
  );
}
