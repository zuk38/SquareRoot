export const NavbarData = [
  {
    title: "HOME",
    path: "/",
    className: "sidebar-text",
    i18nKey: "home",
  },
  {
    title: "WHO WE ARE",
    path: "/who-we-are",
    className: "sidebar-text",
    i18nKey: "who",
  },
  {
    title: "PROJECTS",
    path: "/categories",
    className: "sidebar-text",
    i18nKey: "greenspaces",
    dropdown: "dropdownGreenspaces",
    subtitle: [
      {
        title: "ROOFTOP",
        i18nKey: "rooftop",
        path: "/categories/rooftop",
        className: "d-link",
      },
      {
        title: "RAINBED",
        i18nKey: "rainbed",
        path: "/categories/rainbeds",
        className: "d-link",
      },
      {
        title: "INDOOR",
        i18nKey: "indoor",
        path: "/categories/indoor",
        className: "d-link",
      },
    ],
  },
  {
    title: "CONTACT",
    path: "/contact",
    i18nKey: "contact",
    className: "sidebar-text",
    dropdown: "dropdownContact",
    subtitle: [
      {
        title: "CONTACT US",
        i18nKey: "contactU",
        path: "/contact-us",
        className: "d-link",
      },
      {
        title: "BECOME A PARTNER",
        i18nKey: "partner",
        path: "/become-a-partner",
        className: "d-link",
      },
    ],
  },
];
