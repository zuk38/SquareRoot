import React from "react";
import { withPlantConsumer } from "../context/plants";
import Loading from "./Loading";
import PlantsFilter from "./PlantsFilter";
import PlantsList from "./PlantsList";

function PlantsContainer({ context, conceptPlants }) {
  const { loading, sortedPlants, plants } = context;

  if (loading) return <Loading />;

  return (
    <>
      <PlantsFilter plants={plants} />
      <PlantsList plants={sortedPlants} conceptPlants={conceptPlants}/>
    </>
  );
}

export default withPlantConsumer(PlantsContainer);
