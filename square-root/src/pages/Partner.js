import React from "react";
import PartnerWithUs from "../components/Partner";
import "./Partner.css";
import Title from "../components/Title";

function Partner() {
  return (
    <>
      <Title
        title="PARTNERS"
        subtitle="Vi jobber tett, strategisk og målrettet sammen med våre platinumpartnere
        i det viktige arbeidet med å skape en bedre balanse i Tech. Gjennom
        synlighet, events og ulike initiativer skaper vi ringvirkninger utover
        partnernes organisasjoner. Platinumpartnerne er representert fra scenen
        på Inspirasjonsdagen og eier egne nettverkstreff."
        style="partner-title"
      />
      <PartnerWithUs />
      <Title
        title="Inspirational projects"
        subtitle="We are doing this by making the implementation of urban green spaces
        outside, inside and on top of buildings easy, cheaper, and available
        everywhere."
        style="partner-title"
      />
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
    </>
  );
}
export default Partner;
