import React, { useContext } from "react";
import { PlantContext } from "../context/plants";
import "../styles/Plants.css";
import Dropdown from "./Dropdown"
import {StyleButton} from "../styles/StyledComponents"


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
    native,
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

  const items_properties = [
    {
      name: 'pollinator_friendly',
      id: 'pollinator_friendly',
      checked: {pollinator_friendly},
      value: 'Bievennlig'
    },
    {
      name: 'edible',
      id: 'edible',
      checked: {edible},
      value: 'Spiselig'
    },
    {
      name: 'air_puryfying',
      id: 'air_puryfying',
      checked: {air_puryfying},
      value: "Luftrensende"
    },
    {
      name: 'pet_kids_friendly',
      id: 'pet_kids_friendly',
      checked: {pet_kids_friendly},
      value: "Dyr- og barnevennlig"
    }

  ];

const items_greenspace = [
    {
      name:  'greenspace',
      id: 'greenspace',
      value: {categories}
    }
  ];

  const items_types = [
    {
      name:  'type',
      id: 'type',
      value: {types}
    }
  ];

  const items_zones = [
    {
      name:  'zone',
      id: 'zone',
      checked: {zones},
      value: 'H6',
    }
  ];

  const items_size_inputs = [
    {
      name:  'minSize',
      id: 'size_in_cm',
      value: {minSize},
      type: "number",
      className: "size-input"
    },
    {
      name:  'maxSize',
      id: 'size_in_cm',
      value: {maxSize},
      type: "number",
      className: "size-input"
    }

  ];

  const items_origin = [
    {
      name:  'norwegian_nursery',
      id: 'size_in_cm',
      value: 'Norsk planteskole',
      checked: {norwegian_nursery}
    },
    {
      name:  'native',
      id: 'native',
      value: 'Norske planter',
      checked: {native}
    }
  ];

  const items_light = [
    {
      name:  'sun_seeker',
      id: 'sun_seeker',
      value: 'Mest sol',
      checked: {light}
    },
    {
      name:  'shadow_lover', //is this correct since it's not in DB?
      id: 'shadow_lover',
      value: 'Mest skygge',
      checked: {light}
    }
  ];



  return (

    <section className="filter-container">
      <form className="filter-form">

    {/*Dropdown.js */}
    
      <Dropdown title="Grøntområde" items={items_greenspace}/>
   
      <Dropdown title="Type" items={items_types}/>

      <Dropdown title="Klimasone" items={items_zones}/>

      <Dropdown title="Størrelse" items={items_size_inputs}/>

      <Dropdown title="Opprinnelse" items={items_origin} multiSelect/>

      <Dropdown title="Lysforhold" items={items_light}/>
 
      <Dropdown title="Egenskaper" items={items_properties} multiSelect/>

    {/* end Dropdown.js */}
      </form>
    </section>

  );
}
