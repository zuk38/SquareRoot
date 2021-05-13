import React, { Component } from "react";
import "./Partner.css";

function About() {
  return (
    <div>
      <h1 className="partner-title">PARTNERS</h1>
      <p className="partner-desc">
        Vi jobber tett, strategisk og målrettet sammen med våre platinumpartnere
        i det viktige arbeidet med å skape en bedre balanse i Tech. Gjennom
        synlighet, events og ulike initiativer skaper vi ringvirkninger utover
        partnernes organisasjoner. Platinumpartnerne er representert fra scenen
        på Inspirasjonsdagen og eier egne nettverkstreff.
      </p>
      <div class="float-container-partner">
        <div class="float-child width-40">
          <div className="about">
            <img src="../images/partner.png"></img>
          </div>
        </div>
        <div class="float-child background-white width-60">
          <h1 className="partner-h1">Samarbeid med oss</h1>
          <p className="partner-p">
            Er du en landskapsentreprenør eller eier av en Planteskole og
            interessert i SquareRoot?
          </p>
          <form>
            <fieldset>
              <label className="partner-lbl">
                <input name="partner-input" type="text" placeholder="Navn" />
              </label>
              <label className="partner-lbl">
                <input name="partner-input" type="text" placeholder="E-post" />
              </label>
              <label className="partner-lbl">
                <input name="partner-input" type="text" placeholder="Mobil" />
              </label>
              <label className="checkbox-container">
                <a href="terms-and-conditions">
                  Jeg godtar vilkår og betingelser
                </a>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </fieldset>
            <button className="btn-partner">Send</button>
          </form>
        </div>
      </div>
      <h2 className="about-inspo">Inspirational projects</h2>
      <p className="about-inspo-desc">
        We are doing this by making the implementation of urban green spaces
        outside, inside and on top of buildings easy, cheaper, and available
        everywhere.
      </p>
      <div className="inspo-images">
        <div className="inspo-image1">
          <img src="../images/plantbed.png"></img>
          <h className="inspo-h">Project 1</h>
        </div>
        <div className="inspo-image1">
          <img src="../images/plantbed.png"></img>
          <h className="inspo-h">Project 2</h>
        </div>
      </div>
    </div>
  );
}
export default About;
