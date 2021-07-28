import React from "react";

export default function GreenspaceMiniature(props) {
  return (
    <button onClick={props.openModal} className="btn-dash-greenspace">
      <div className="green-item">
        <img src={props.greenspace.image} className="project_img" />
        <div className="green-info">
          <h3 className="p-h3">{props.greenspace.name}</h3>
          <h4 className="p-h4">{props.greenspace.subtitle}</h4>
        </div>
      </div>
    </button>
  );
}