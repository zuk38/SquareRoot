import React from "react";

export default function Grid_2x2({ title, grid_values }) {
  return (
    <div>
      {" "}
      {/*OUR VALUES*/}
      <div className="c-section">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle c-mrg--bottom">{title}</h2>
          <div className="c-grid--2x2">
            {grid_values.map((grid_values, index) => (
              <div key={index} className="o-card o-card-media c-mrg-bottom/4">
                <div className="c-icon">
                  <img src={grid_values.img}></img>
                </div>
                <div>
                  <h3 className="c-txt--sectionsubtitle c-mrg--bottom/4">
                    {grid_values.subtitle}
                  </h3>
                  <p>{grid_values.paragraph}</p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
}
