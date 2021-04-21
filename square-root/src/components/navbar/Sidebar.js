import React, { useRef } from "react";
import { NavbarData } from "./NavbarData";
import { Link, NavLink } from "react-router-dom";
import Backdrop from "../Backdrop";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import useOutsideAlerter  from "../hooks/useOutsideAlerter";

export default function Sidebar(props) {
  const sidebarRef = useRef(null);
  useOutsideAlerter(sidebarRef, props.onClose);
  return (
    <>
      {props.sidebar && <Backdrop />}
      <div className={props.sidebar ? "side-menu active" : "side-menu"} ref={sidebarRef}>
        <ul className="side-menu-items" onClick={() => props.onClose()}>
          <li className="sidebar-toggle">
            <Link to="#" className="sidebar-close">
              <CloseIcon />
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
