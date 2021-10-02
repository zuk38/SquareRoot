import React from "react";

export default function Banner({ children, img, title }) {
  return (
    <header className="defaultHero">
      <div className="errorBanner">
        <h1>{title}</h1>
        <div />
        {children}
      </div>
    </header>
  );
}
