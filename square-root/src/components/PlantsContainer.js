import React from "react";
import { withPlantConsumer } from "../context/plants";
import Loading from "./Loading";
import PlantsFilter from "./PlantsFilter";
import PlantsList from "./PlantsList";

function PlantsContainer(props) {
  const { loading, sortedPlants, plants } = props.context;

  if (loading) return <Loading />;

  const handleChangeInPlants = (...args) => {
    console.log("lalala")
    props.handleChangeInPlants(...args);
  }

  return (
    <>
      <PlantsFilter plants={plants} />
      <PlantsList plants={sortedPlants} conceptPlants={props.conceptPlants} handleChangeInPlants={handleChangeInPlants} />
    </>
  );
}

export default withPlantConsumer(PlantsContainer);
