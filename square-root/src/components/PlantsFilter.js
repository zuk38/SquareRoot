import React, { useContext } from "react";
import { PlantContext } from "../context/plants";
import "../styles/Plants.css";
import Dropdown from "./Dropdown";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const formatData = (items) => {
  let tempItems = items.map((item) => {
    let value = item;
    let id = item;
    let newItem = { id: id, value: value };
    return newItem;
  });
  return tempItems;
};

export default function PlantsFilter({ plants }) {
  const context = useContext(PlantContext);
  const {
    handleChange,
    type,
    norwegian_nursery,
    native,
    light,
    greenspace_category, //dropdown
    minSize,
    maxSize,
    climate_zone, //dropdown
    edible, //checkbox
    pollinator_friendly, //checkbox
    pet_kids_friendly, //checkboox
    rain_garden, //checkbox
    air_puryfying, //checkbox
  } = context;

  //get unique types
  let types = getUnique(plants, "type");
  //add all
  types = ["All", ...types];
  //format to dropdown
  types = formatData(types);

  //get unique categories
  let categories = getUnique(plants, "greenspace_category");
  //add all
  categories = ["All", ...categories];
  //format to dropdown
  categories = formatData(categories);

  //get unique climate zones
  let zones = getUnique(plants, "climate_zone");
  //add all
  zones = ["All", ...zones];
  //format to dropdown
  zones = formatData(zones);

  const items_properties = [
    {
      name: "pollinator_friendly",
      id: "pollinator_friendly",
      checked: { pollinator_friendly },
      value: "Bievennlig",
    },
    {
      name: "edible",
      id: "edible",
      checked: { edible },
      value: "Spiselig",
    },
    {
      name: "air_puryfying",
      id: "air_puryfying",
      checked: { air_puryfying },
      value: "Luftrensende",
    },
    {
      name: "pet_kids_friendly",
      id: "pet_kids_friendly",
      checked: { pet_kids_friendly },
      value: "Dyr- og barnevennlig",
    },
  ];

  const items_size_inputs = [
    {
      name: "minSize",
      id: "size_in_cm",
      value: { minSize },
      type: "number",
      className: "size-input",
    },
    {
      name: "maxSize",
      id: "size_in_cm",
      value: { maxSize },
      type: "number",
      className: "size-input",
    },
  ];

  const items_origin = [
    {
      name: "norwegian_nursery",
      id: "norwegian_nursery",
      value: "Norsk planteskole",
      checked: { norwegian_nursery },
    },
    {
      name: "native",
      id: "native",
      value: "Norske planter",
      checked: { native },
    },
  ];

  const items_light = [
    {
      name: "sun_seeker",
      id: "sun_seeker",
      value: "Mest sol",
      checked: { light },
    },
    {
      name: "shadow_lover", //is this correct since it's not in DB?
      id: "shadow_lover",
      value: "Mest skygge",
      checked: { light },
    },
  ];

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/*Dropdown.js */}

        <Dropdown title="Grøntområde" items={categories} />

        <Dropdown title="Type" items={types} />

        <Dropdown title="Klimasone" items={zones} />

        <Dropdown title="Størrelse" items={items_size_inputs} />

        <Dropdown title="Opprinnelse" items={items_origin} multiSelect />

        <Dropdown title="Lysforhold" items={items_light} />

        <Dropdown title="Egenskaper" items={items_properties} multiSelect />

        {/* end Dropdown.js */}
      </form>
    </section>
  );
}
