import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "sidebar-text",
  },
  {
    title: "WHY URBAN GREEN SPACES",
    path: "/why-urban-greenspaces",
    icon: <IoIcons.IoIosPaper />,
    className: "sidebar-text",
  },
  {
    title: "BECOME A PARTNER",
    path: "/become-a-partner",
    icon: <FaIcons.FaCartPlus />,
    className: "sidebar-text",
  },
  {
    title: "ABOUT US",
    path: "/about-us",
    icon: <IoIcons.IoMdPeople />,
    className: "sidebar-text",
  },
  {
    title: "CONTACT",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: "sidebar-text",
  },
];
