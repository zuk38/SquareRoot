import React from "react";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as HelpICon } from "../../icons/question.svg";
import { ReactComponent as AccountIcon } from "../../icons/user.svg";
import { ReactComponent as ProjectIcon } from "../../icons/project.svg";
import { useTranslation } from "react-i18next";

function Dropdown(props) {
  const { t } = useTranslation();
  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      await props.auth.logout();
      props.history.push("/");
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
    <>
      {props.dropdown && (
        <div className="my-dropdown">
          <div className="menu">
            <DropdownItem leftIcon={<ProjectIcon />} path="/projects">
              {t("my_projects")}
            </DropdownItem>
            <DropdownItem leftIcon={<AccountIcon />} path="/account">
              {t("account")}
            </DropdownItem>
            {/*<DropdownItem leftIcon={<HelpICon />} path="/help">
              Hjelp
      </DropdownItem>*/}
            <DropdownItem leftIcon={<LogoutIcon />} onItemClick={handleLogOut}>
              {t("log_out")}
            </DropdownItem>
          </div>
        </div>
      )}
    </>
  );
}

export default Dropdown;
