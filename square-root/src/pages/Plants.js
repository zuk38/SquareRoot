import React from "react";
import "../styles/Plants.css";
import Title from "../components/Title";
import PlantsContainer from "../components/PlantsContainer";

export default function Plants() {
  return (
    <>
      <Title
        title="PLANTER"
        subtitle="I Oslo anbefales det med biologisk mangfoldige planter og
              temperaturregulerende planter. Vi kan skrive mer her for å gi mer
              informasjon."
        style="plants-title"
      />
      <PlantsContainer isCustomising={false} />
    </>
  );
}
