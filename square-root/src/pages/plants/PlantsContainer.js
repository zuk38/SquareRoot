import React from "react";
import { withPlantConsumer } from "../../context/plants";
import Loading from "../../components/Loading";
import PlantsFilter from "./PlantsFilter";
import PlantsList from "./PlantsList";

function PlantsContainer({ context }) {
  const { loading, sortedPlants, plants } = context;

  //if (loading) return <Loading />;

  return (
    <>
      <PlantsFilter plants={plants} />
      <PlantsList plants={sortedPlants} />
    </>
  );
}

export default withPlantConsumer(PlantsContainer);
