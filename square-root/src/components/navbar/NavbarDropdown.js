import React, { useState } from "react";
import { NavbarData } from "./NavbarData";
import "./Dropdown.css";
import { Link } from "react-router-dom";

export default function NavbarDropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "d-menu clicked" : "d-menu"}
      >
        {NavbarData.map(
          (item) =>
            item.subtitle && item === props.item &&
            item.subtitle.map((subtitle, index) => (
              <li key={index}>
                <Link
                  className={subtitle.className}
                  to={subtitle.path}
                  onClick={() => setClick(false)}
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
