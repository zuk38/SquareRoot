import React, { useEffect, useRef, useState } from "react";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import i18next from "i18next";
import cookies from "js-cookie";
import { NavButton } from "./NavButton";
import { FaAngleDown } from "react-icons/fa";

const languages = {
  en: {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  no: {
    code: "no",
    name: "Norsk",
    country_code: "no",
  },
};

export default function LanguageSelect() {
  const selected = cookies.get("i18next") || "en";
  const [menuAnchor, setMenuAnchor] = useState(null);

  useEffect(() => {
    setMenuAnchor(languages[selected]);
  }, [selected]);

  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => setDropdown(false));
  const [dropdown, setDropdown] = useState(false);

  const setLang = (language) => {
    setDropdown(!dropdown);
    setMenuAnchor(languages[language]);
    i18next.changeLanguage(language);
  };

  return (
    <>
      <div ref={dropdownRef}>
        <NavButton
          endIcon={<FaAngleDown />}
          onClick={() => setDropdown(!dropdown)}
        >
          <span style={{"margin-right": "10px"}}
            className={
              menuAnchor
                ? `flag-icon flag-icon-${menuAnchor.country_code} mx-2`
                : `flag-icon flag-icon-${languages[selected].country_code} mx-2`
            }
          />
          {menuAnchor ? menuAnchor.name : languages[selected].name}
        </NavButton>
        {dropdown && (
          <ul onClick={() => setDropdown(false)} className="d-language-menu">
            {Object.keys(languages).map((language) => (
              <li key={languages[language].country_code}>
                <button
                  name={language}
                  className="d-language"
                  onClick={() => setLang(language)}
                >
                  <span
                    className={`flag-icon flag-icon-${languages[language].country_code} mx-2`}
                  />
                  {languages[language].name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
