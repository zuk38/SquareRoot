import React, { useRef, useState } from "react";
import Auth from "@aws-amplify/auth";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as HelpICon } from "../../icons/question.svg";
import { ReactComponent as AccountIcon } from "../../icons/user.svg";
import { ReactComponent as ProjectIcon } from "../../icons/project.svg";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

export default function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);
  const closeDropDown = () => setDropdown(false);
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, closeDropDown);

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

  function DropdownItem({ leftIcon, children, onItemClick, path }) {
    return (
      <a href={path} className="my-dropdown-item" onClick={onItemClick}>
        <span className="icon-button">{leftIcon}</span>
        {children}
      </a>
    );
  }

  return (
    <div ref={dropdownRef}>
      <button
        class="button is-white pad"
        onClick={() => setDropdown(!dropdown)}
      >
        <span>{props.auth.user}</span>
        <span class="icon is-medium">
          <i class="fas fa-angle-down"></i>
        </span>
      </button>
      {dropdown && (
        <div className="my-dropdown">
          <div className="menu">
            <DropdownItem leftIcon={<ProjectIcon />} path="/projects">
              My Projects
            </DropdownItem>
            <DropdownItem leftIcon={<AccountIcon />} path="/account">
              Account
            </DropdownItem>
            <DropdownItem leftIcon={<HelpICon />} path="/help">
              Help Center
            </DropdownItem>
            <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
              Log Out
            </DropdownItem>
          </div>
        </div>
      )}
    </div>
  );
}
