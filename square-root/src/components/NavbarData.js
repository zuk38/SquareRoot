import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const NavbarData = [
  {
    title: "ROOFTOP",
    path: "/rooftop",
    className: "sidebar-text",
    fontWeight: "bold" 
  },
  {
    title: "RAINBED",
    path: "/rainbed",
    className: "sidebar-text",
  },
  {
    title: "INDOOR",
    path: "/indoor",
    className: "sidebar-text",
  },
  {
    title: "OUR PLANTS",
    path: "/plants",
    className: "sidebar-text",
  },
  {
    title: "HOME",
    path: "/",
    className: "sidebar-text"
  },
  {
    title: "WHY URBAN GREEN SPACES",
    path: "/why-urban-greenspaces",
    className: "sidebar-text",
  },
  {
    title: "BECOME A PARTNER",
    path: "/become-a-partner",
    className: "sidebar-text",
  },
  {
    title: "ABOUT US",
    path: "/about-us",
    className: "sidebar-text",
  },
  {
    title: "CONTACT",
    path: "/contact",
    className: "sidebar-text",
  },
];

const MenuItems = [
  {
    title: "RAINBED",
    path: "/rainbed",
    icon: <AiIcons.AiFillHome />,
    className: "dropdown-link",
  },
  {
    title: "RAINBED",
    path: "/rainbed",
    icon: <AiIcons.AiFillHome />,
    className: "dropdown-link",
  },
  {
    title: "RAINBED",
    path: "/rainbed",
    icon: <AiIcons.AiFillHome />,
    className: "dropdown-link",
  },
  {
    title: "RAINBED",
    path: "/rainbed",
    icon: <AiIcons.AiFillHome />,
    className: "dropdown-link",
  },
];

export {
  NavbarData,
  MenuItems
};
