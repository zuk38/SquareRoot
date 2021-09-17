export const NavbarData = [
  {
    title: "HOME",
    path: "/",
    className: "sidebar-text",
    i18nKey: "home"
  },
  {
    title: "WHO WE ARE",
    path: "/who-we-are",
    className: "sidebar-text",
    i18nKey: "who"
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
        path: "/categories/takterrasse",
        className: "d-link",
      },
      {
        title: "RAINBED",
        i18nKey: "rainbed",
        path: "/categories/regnseng",
        className: "d-link",
      },
      {
        title: "INDOOR",
        i18nKey: "indoor",
        path: "/categories/innendørsplanter",
        className: "d-link",
      },
    ],
  },
  
  /* {
    title: "ABOUT",
    i18nKey: "about",
    path: "/about-us",
    className: "sidebar-text",
    dropdown: "dropdownAbout",
   subtitle: [
      { title: "WHAT WE DO", path: "/what-we-do", i18nKey: "what", className: "d-link" },
      {
        title: "HOW IT WORKS",
        i18nKey: "how",
        path: "/how-it-works",
        className: "d-link",
      },
      {
        title: "WHY US",
        i18nKey: "why",
        path: "/why-us",
        className: "d-link",
      },
    ],
  },*/
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