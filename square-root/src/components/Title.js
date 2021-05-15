import React from "react";

export default function Title({ title, subtitle, style}) {
  return (
    <div className={style}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
