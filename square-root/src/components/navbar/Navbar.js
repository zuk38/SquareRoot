import React, { useEffect, useState, useRef } from "react";
import logo from "../../images/logo--dark.png";
import { Link, NavLink, useHistory } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Dropdown from "./Dropdown";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import NavbarDropdown from "./NavbarDropdown";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { NavButton } from "./NavButton";

export default function Navbar(props) {
  let history = useHistory();
  const { t } = useTranslation();
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
  const closeMobileMenu = (path) => {
    setClick(false);
    if (path === undefined) return;
    else {
      history.push(path);
      if (path.indexOf("/categories") > -1) history.go(0);
    }
  };

  const onMouseEnter = (dropdown) => {
    if (window.innerWidth < 1190) {
      setNavDropdown(false);
    } else {
      setNavDropdown({ [dropdown]: true });
    }
    console.log(dropdown);
  };

  const onMouseLeave = () => {
    setNavDropdown(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="SQUAREROOT" />
          </Link>
        </div>
        {click ? (
          <ul className="nav-menu active">
            {NavbarData.map((item, index) => (
              <>
                {!item.dropdown ?
                    (
                  <NavLink
                    to={item.path}
                    key={index}
                    exact={true}
                    className="nav-links-no-hover"
                    onClick={() => closeMobileMenu(item.path)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                  </NavLink>
                ) : (
                  <div
                    key={index}
                    className="nav-links-no-hover-title"
                    onClick={() => closeMobileMenu(undefined)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                  </div>
                )}
                {item.subtitle &&
                  item.subtitle.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      exact={true}
                      className="sub-item"
                      onClick={() => closeMobileMenu(item.path)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </NavLink>
                  ))}
              </>
            ))}
          </ul>
        ) : (
          <ul className="nav-menu">
            {NavbarData.map((item, index) =>
              item.dropdown ? (
                <li
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => onMouseEnter(item.dropdown)}
                  onMouseLeave={onMouseLeave}
                >
                  <div
                    className="nav-links-no-hover-title"
                    onClick={() => closeMobileMenu(undefined)}
                  >
                    <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    <i className="fas fa-caret-down" />
                  </div>
                  {
                    {
                      dropdownGreenspaces: navDropdown.dropdownGreenspaces && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                      dropdownAbout: navDropdown.dropdownAbout && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                      dropdownContact: navDropdown.dropdownContact && (
                        <NavbarDropdown
                          {...props}
                          item={item}
                          openLink={closeMobileMenu}
                        />
                      ),
                    }[item.dropdown]
                  }
                </li>
              ) : (
                <li key={index} className="nav-item">
                  {!item.dropdown ? (
                    <NavLink
                      to={item.path}
                      exact={true}
                      className={click ? "nav-links-no-hover" : "nav-links"}
                      onClick={() => closeMobileMenu(item.path)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </NavLink>
                  ) : (
                    <div
                      exact={true}
                      className={
                        click ? "nav-links-no-hover-title" : "nav-links-title"
                      }
                      onClick={() => closeMobileMenu(undefined)}
                    >
                      <Trans i18nKey={item.i18nKey}>{item.title}</Trans>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
        )}
        <ul className="navbar-nav">
          <a className="o-btn nav-btn" target="_blank" href="https://platform.squareroot.cc/">
            <Trans i18nKey={'platform'}></Trans>
          </a>

          {/*language */}
          <LanguageSelect />
          {/* user */}
          {/** 
          {!props.auth.isAuthenticated ? (
            <NavButton
              onClick={() => closeMobileMenu("/login")}
              endIcon={<FaUser />}
            >
              <Trans i18nKey="signIn">Sign in</Trans>
            </NavButton>
          ) : (
            <div ref={dropdownRef}>
              <NavButton
                onClick={() => setDropdown(!dropdown)}
                endIcon={<FaAngleDown />}
              >
                {props.auth.user}
              </NavButton>
              <Dropdown
                {...props}
                dropdown={dropdown}
                setDropdown={(value) => setDropdown(value)}
              />
            </div>
          )}*/}

          {/*sidebar*/}
          <div className="sidebar-bars" onClick={handleClick}>
            {!click ? <MenuIcon /> : <CloseIcon />}
          </div>
        </ul>
      </nav>
    </>
  );
}