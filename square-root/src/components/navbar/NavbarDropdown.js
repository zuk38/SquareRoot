import React, { useState } from "react";
import { NavbarData } from "./NavbarData";
import "./Dropdown.css";
import { Link, useHistory } from "react-router-dom";
import { Trans } from "react-i18next";

export default function NavbarDropdown(props) {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const openLink = (path) => {
    setClick(false);
    history.push(path);
    if (path.indexOf("/categories") > -1) history.go(0);
  };

  return (
    <>
      <ul onClick={handleClick} className={click ? "d-menu clicked" : "d-menu"}>
        {NavbarData.map(
          (item) =>
            item.subtitle &&
            item === props.item &&
            item.subtitle.map((subtitle, index) => (
              <li key={index}>
                <Link
                  className={subtitle.className}
                  to={subtitle.path}
                  onClick={() => openLink(subtitle.path)}
                >
                  <Trans i18nKey={subtitle.i18nKey}>{subtitle.title}</Trans>
                </Link>
              </li>
            ))
        )}
      </ul>
    </>
  );
}
