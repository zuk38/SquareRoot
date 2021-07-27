import React, { useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as HelpICon } from "../../icons/question.svg";
import { ReactComponent as AccountIcon } from "../../icons/user.svg";
import { ReactComponent as ProjectIcon } from "../../icons/project.svg";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

function Dropdown(props) {
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => props.setDropdown(false));

  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      await props.auth.logout()
      props.history.push("/")
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
      {props.dropdown && (
        <div className="my-dropdown">
          <div className="menu">
            <DropdownItem leftIcon={<ProjectIcon />} path="/projects">
              Mine Prosjekter
            </DropdownItem>
            <DropdownItem leftIcon={<AccountIcon />} path="/account">
              Kontoinnstillinger
            </DropdownItem>
            {/*<DropdownItem leftIcon={<HelpICon />} path="/help">
              Hjelp
      </DropdownItem>*/}
            <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
              Logg Ut
            </DropdownItem>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(Dropdown)
