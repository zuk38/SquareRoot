import React, { useState } from "react";
import { NavbarData } from "./NavbarData";
import "./Dropdown.css";
import { Link, useHistory } from "react-router-dom";

export default function NavbarDropdown(props) {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const openLink = (path) => {
    setClick(false);
    if (!path) return;
    else {
      history.push(path);
      history.go(0);
    }
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
                  {subtitle.title}
                </Link>
              </li>
            ))
        )}
      </ul>
    </>
  );
}
