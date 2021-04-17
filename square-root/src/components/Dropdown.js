import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./NavbarData";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu-clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.className}
                to={item.path}
                exact={true}
                activeStyle={{ fontWeight: "bold" }}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
