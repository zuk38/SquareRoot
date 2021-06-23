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
    greenspace_category,  //dropdown
    minSize,
    maxSize,
    climateZone,  //dropdown
    edible, //checkbox
    pollinator_friendly,  //checkbox
    pet_kids_friendly,  //checkboox
    rain_garden,  //checkbox
    air_puryfying,  //checkbox
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
          <label htmlFor="size_in_cm">Plant Size [cm]</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size_in_cm"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size_in_cm"
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
                <input type="checkBox" name="native" id="native" checked={origin} onChange={handleChange}/>
                <label htmlFor="native">Native</label>
            </div>
        </div>
        {/* end of norwegian nursery */ }
        
        {/* light req */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="sun_seeker" id="sun_seeker" checked={light} onChange={handleChange}/>
                <label htmlFor="sun_seeker">Sun seekers</label>
            </div>
        </div>
        {/* end of light req */ }
      </form>
    </section>
  );
}
