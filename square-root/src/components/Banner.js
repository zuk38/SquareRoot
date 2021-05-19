import React from "react";

export default function Banner({ children, img, title }) {
  return title ? (
    <div className="errorBanner">
      <h1>{title}</h1>
      <div/>
      {children}
    </div>
  ) : (
    <div className="banner">
      <div className="top-left">
        <img src={img} />
      </div>
      <div className="bottom-right">{children}</div>
    </div>
  );
}
