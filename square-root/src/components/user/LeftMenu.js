import React from "react";
import { NavLink } from "react-router-dom";

export default function LeftMenu(props) {
  let currentLocation = props.location.pathname,
    delimiter = "/",
    tokensAfter = currentLocation.split(delimiter).slice(2), //project name
    resultAfter = delimiter + tokensAfter.join(delimiter);

  const locations = [
    {
      pahtname: "/dashboard",
      icon: "fas fa-columns",
      display: "Dashboard",
    },
    {
      pahtname: "/members",
      icon: "fas fa-users",
      display: "Medlemmer",
    },
    {
      pahtname: "/orders",
      icon: "fas fa-tasks",
      display: "Bestillinger",
    },
    {
      pahtname: "/settings",
      icon: "fas fa-cog",
      display: "Innstillinger",
    },
  ];

  return (
    <>
      <div className="p-column left">
        <a href="/projects" className="btn-back">
          <i className="fas fa-chevron-left" />
          Alle Prosjekter
        </a>
        <div className="menu-vertical">
          {locations.map((location, index) => (
            <NavLink
              key={index}
              to={location.pahtname + resultAfter}
              exact={true}
            >
              <i className={location.icon} />
              {location.display}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
