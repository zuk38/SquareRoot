import React, { useRef } from "react";
import Auth from "@aws-amplify/auth";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as HelpICon } from "../../icons/question.svg";
import { ReactComponent as AccountIcon } from "../../icons/user.svg";
import { ReactComponent as ProjectIcon } from "../../icons/project.svg";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { MenuItems } from "./NavbarData";

export default function Dropdown(props) {
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, props.onClose);
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

  function DropdownItem({ leftIcon, children, onItemClick }) {
    return (
      <a href="#" className="my-dropdown-item" onClick={onItemClick}>
        <span className="icon-button">{leftIcon}</span>
        {children}
      </a>
    );
  }

  return (
    <div className="my-dropdown">
      <div className="menu" ref={dropdownRef}>
        <DropdownItem leftIcon={<ProjectIcon />}>My Projects</DropdownItem>
        <DropdownItem leftIcon={<AccountIcon />}>Account</DropdownItem>
        <DropdownItem leftIcon={<HelpICon />}>Help Center</DropdownItem>

        <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
          Log Out
        </DropdownItem>
      </div>
    </div>
  );
}
