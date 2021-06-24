import React, { useContext } from "react";
import { PlantContext } from "../../context/plants";
import "../../styles/Plants.css";

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

  //get unique categories
  let categories = getUnique(plants, "greenspace_category");
  //add all
  categories = ["all", ...categories];
  //map to jsx
  categories = categories.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get unique climate zones
  let zones = getUnique(plants, "climateZone");
  //add all
  zones = ["all", ...zones];
  //map to jsx
  zones = categories.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <form className="filter-form">

        {/* select greenspace */}
        <div className="form-group">
          <label htmlFor="type">Greenspace</label>
          <select
            name="greenspace"
            id="greenspace"
            value={categories}
            className="form-control"
            onChange={handleChange}
          >
            {categories}
          </select>
        </div>
        {/* end of select greenspace */}

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
        {/* select climate */}
        <div className="form-group">
          <label htmlFor="type">Climate Zone</label>
          <select
            name="zone"
            id="zone"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {zones}
          </select>
        </div>
        {/* end of select zone */}
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

<div className="form-group-container">
<label htmlFor="size_in_cm">Origin</label>
        {/* norwegian nursery */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="norwegian_nursery" checked={norwegian_nursery} onChange={handleChange}/>
                <label htmlFor="norwegian_nursery">Norwegian Nursery</label>
            </div>
        </div>
        {/* end of norwegian nursery */ }
        {/* native */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="native" checked={origin} onChange={handleChange}/>
                <label htmlFor="native">Native</label>
            </div>
        </div>
        {/* end of native */ }
        </div>
        {/* end of group container */ }
        
<div className="form-group-container">
<label htmlFor="size_in_cm">Light requirements</label>
        {/* sun seekers */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="sun_seeker" checked={light} onChange={handleChange}/>
                <label htmlFor="sun_seeker">Sun seekers</label>
            </div>
        </div>
      {/* shadow lovers */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="shadow_lover" checked={light} onChange={handleChange}/>
                <label htmlFor="shadow_lover">Shadow lovers</label>
            </div>
        </div>
        {/* end of light req */ }
        </div>
        {/* end of group container */ }

  <div className="form-group-container">
<label htmlFor="size_in_cm">Egenskaper</label>
        {/* pollinator friendly */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="poll_friendly" checked={pollinator_friendly} onChange={handleChange}/>
                <label htmlFor="poll_friendly">Pollinator friendly</label>
            </div>
        </div>

      {/* edible */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="edible" checked={edible} onChange={handleChange}/>
                <label htmlFor="edible">Edible</label>
            </div>
        </div>

        {/* air purifying */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="air_puryfying" checked={air_puryfying} onChange={handleChange}/>
                <label htmlFor="air_puryfying">Air puryfying</label>
            </div>
        </div>

        {/* pet & kids friendly */ }
        <div className="form-group">
            <div className="single-extra">
                <input type="checkBox" name="filter-checkbox" id="pet_kids_friendly" checked={pet_kids_friendly} onChange={handleChange}/>
                <label htmlFor="pet_kids_friendly">Pet and kids friendly</label>
            </div>
        </div>
        
        </div>
        {/* end of group container */ }
      </form>
    </section>
  );
}
