import React from "react";
import { NavbarData } from "./NavbarData";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Backdrop from "../Backdrop";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

export default function Sidebar(props) {
  return (
    <>
    {props.sidebar && <Backdrop />}
      <div className={props.sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items" onClick={() => props.onClick()}>
          <li className="sidebar-toggle">
            <Link to="#" className="sidebar-close">
                <CloseIcon/>
            </Link>
          </li>
          {props.width <= 1190
            ? NavbarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <NavLink
                      to={item.path}
                      activeStyle={{ fontWeight: "bold" }}
                      exact={true}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })
            : NavbarData.slice(
                0,
                NavbarData.map(function(e) {
                  return e.title;
                }).indexOf("ROOFTOP")
              ).map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <NavLink
                      to={item.path}
                      activeStyle={{ fontWeight: "bold" }}
                      exact={true}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
}
