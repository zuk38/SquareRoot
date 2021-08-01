import React from "react";
import { withPlantConsumer } from "../context/plants";
import Loading from "./Loading";
import PlantsFilter from "./PlantsFilter";
import PlantsList from "./PlantsList";

function PlantsContainer(props) {
  const { loading, sortedPlants, plants } = props.context;

  if (loading) return <Loading />;

  const onAdd = (...args) => {
    props.onAdd(...args);
  }

  const onRemove = (...args) => {
    props.onRemove(...args);
  }

  const handleQuantityInput = (...args) => {
    props.handleQuantityInput(...args);
  }

  return (
    <>
      <PlantsFilter plants={plants} />
      <PlantsList plants={sortedPlants} conceptPlants={props.conceptPlants} onAdd={onAdd} onRemove={onRemove} handleQuantityInput={handleQuantityInput} />
    </>
  );
}

export default withPlantConsumer(PlantsContainer);
