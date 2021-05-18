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
    norwegian_nursery,
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
        {/* plant size */}
        <div className="form-group">
          <label htmlFor="size">Plant Size [cm]</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of plant size */}
        {/* norwegian nursery */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="norwegian_nursery" id="norwegian_nursery" checked={norwegian_nursery} onChange={handleChange}/>
                <label htmlFor="norwegian_nursery">Norwegian Nursery</label>
            </div>
        </div>
        {/* end of norwegian nursery */ }
        {/* native */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="origin" id="origin" checked={origin} onChange={handleChange}/>
                <label htmlFor="origin">Native</label>
            </div>
        </div>
        {/* end of norwegian nursery? */ }
        
        {/* light req */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="light" id="sunSeeker" checked={light} onChange={handleChange}/>
                <label htmlFor="light">Sun seekers</label>
            </div>
        </div>
        {/* end of light req */ }
      </form>
    </section>
  );
}
