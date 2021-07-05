import React from "react";
import "../../styles/Why.css";

function Why() {
  return (

    <div>
      <div className="why-hero">
        <h1 className="why-txt--hero">
          Hvorfor oss
        </h1>
        <p className="why-txt--hero-p">
          Vi gjør det enklere for deg å velge grønt.
        </p>
      </div>

      <div className="why-container">
        <div className="why-img">
          <img src="../images/oslo-flowers.jpeg" />
        </div>
      </div>

{/*

      <div class="float-container">
        <div class="float-child">
          <div className="why">
            <h1 className="why-h1">HVORFOR SquareRoot?</h1>
            <p className="why-desc">
              Well designed urban green spaces are a powerful climate
              adaptation. They improve life quality, minimise risk of floods,
              improve water and air quality, regulate temperature, support
              biodiversity and increase the valuation of nearby property.
            </p>
          </div>
        </div>
        <div class="float-child">
          <img src="../images/flowers-unsplash.jpeg" className="why-image" alt="?"></img>
        </div>
      </div>
*/}

      <div className="why-reasons">
        <h2 className="five-reasons">5 good reasons to choose green spaces</h2>
        <h3 className="reasons">1. Implementation</h3>
        <p>
          We are doing this by making the implementation of urban green spaces
          outside, inside and on top of buildings easy, cheaper, and available
          everywhere.
        </p>
        <h3 className="reasons">3. Implementation</h3>
        <p>
          We are doing this by making the implementation of urban green spaces
          outside, inside and on top of buildings easy, cheaper, and available
          everywhere.
        </p>
        <h3 className="reasons">4. Address</h3>
        <p>
          By simply entering their address on our platform, we make tailored
          offers for the right plant for the right spot and concepts such as
          roof gardens, rain beds to manage heavy rainfall and plants to
          increase biodiversity.
        </p>
        <h3 className="reasons">5. Implementation</h3>
        <p>
          We are doing this by making the implementation of urban green spaces
          outside, inside and on top of buildings easy, cheaper, and available
          everywhere.
        </p>
      </div>
      <h2 className="why-inspo">Inspirational projects</h2>
      <p className="why-inspo-desc">
        We are doing this by making the implementation of urban green spaces
        outside, inside and on top of buildings easy, cheaper, and available
        everywhere.
      </p>
      <div className="inspo-images">
        <div className="inspo-image1">
          <img src="../images/plantbed.png" alt="Project 1"></img>
          <h className="inspo-h">Project 1</h>
        </div>
        <div className="inspo-image1">
          <img src="../images/plantbed.png" alt="Project 2"></img>
          <h className="inspo-h">Project 2</h>
        </div>
      </div>
    </div>
  );
}
export default Why;
