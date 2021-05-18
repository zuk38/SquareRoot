import React, { useContext } from "react";
import { PlantContext } from "../context/plants";
import "../styles/Plants.css";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function PlantsFilter({ plants }) {
  const context = useContext(PlantContext);
  const {
    handleChange,
    type,
    nursery,
    origin,
    light,
    greenspace_category,
    size,
    minSize,
    maxSize,
    climateZone,
    edible,
    pollinator_friendly,
    pet_kids_friendly,
    rain_garden,
    air_puryfying,
  } = context;

  //get unique types
  let types = getUnique(plants, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Plant Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  );
}
