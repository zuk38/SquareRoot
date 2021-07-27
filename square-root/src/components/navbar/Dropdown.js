import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as HelpICon } from "../../icons/question.svg";
import { ReactComponent as AccountIcon } from "../../icons/user.svg";
import { ReactComponent as ProjectIcon } from "../../icons/project.svg";

function Dropdown(props) {
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
        {/*<span className="icon-button">{leftIcon}</span>*/}
        {children}
      </a>
    );
  }

  return (
    <div>
      {props.dropdown && (
        <div className="my-dropdown">
          <div className="menu">
            <DropdownItem leftIcon={<ProjectIcon />} path="/projects">
              MINE PROSJEKTER
            </DropdownItem>
            <DropdownItem leftIcon={<AccountIcon />} path="/account">
              KONTOINNSTILLINGER
            </DropdownItem>
            {/*<DropdownItem leftIcon={<HelpICon />} path="/help">
              Hjelp
      </DropdownItem>*/}
            <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
              LOGG UT
            </DropdownItem>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(Dropdown)
