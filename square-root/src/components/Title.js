import React from "react";

export default function Title({ title, subtitle, typeName}) {
  const componentClass = classNames("Title", {
    error: typeName === "customize",
    confirm: typeName === "howitworks",
  });

  return (
    <div className={componentClass}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
