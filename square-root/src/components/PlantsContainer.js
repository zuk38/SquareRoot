import React from "react";
import { withPlantConsumer } from "../context/plants";
import Loading from "./Loading";
import PlantsFilter from "./PlantsFilter";
import PlantsList from "./PlantsList";

function PlantsContainer(props) {
  const { loading, sortedPlants, plants } = props.context;

  if (loading) return <Loading />;

  return (
    <>
      <PlantsFilter plants={plants} />
      <PlantsList plants={sortedPlants} conceptPlants={props.conceptPlants} />
    </>
  );
}

export default withPlantConsumer(PlantsContainer);
