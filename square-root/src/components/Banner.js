import React from "react";

export default function Banner({ children, img, subtitle }) {
  return (
    <div className="banner">
      <div className="top-left"><img src={img}/></div>
      <div className="bottom-right">{children}</div>
    </div>
  );
}
