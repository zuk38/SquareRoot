import React, { useContext, useEffect, useState } from "react";
import { PlantContext } from "../context/plants";
import "../styles/Plants.css";
import Dropdown from "./Dropdown";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const formatData = (items, index) => {
  let tempItems = items
    .filter(function(item) {  //skip nulls
      if (item) return true;
      return false;
    })
    .map((item) => {
      let id = index;
      let value =
        item
          .toString()
          .charAt(0)
          .toUpperCase() + item.slice(1);
      
      let newItem = { id: id, value: value };
      return newItem;
    });

  return tempItems;
};

export default function PlantsFilter({ plants }) {
  const context = useContext(PlantContext);
  const {
    handleChange,
    minSize,
    maxSize,
  } = context;

  const [selectType, setSelectType] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectZone, setSelectZone] = useState([]);
  const [selectOrigin, setSelectOrigin] = useState([]);
  const [selectLight, setSelectLight] = useState([]);
  const [selectProperties, setSelectProperties] = useState([]);

  useEffect(() => {
    let filters = [...selectLight, ...selectType, ...selectZone, ...selectCategory, ...selectOrigin, ...selectProperties]
    handleChange(filters)
  }, [selectType, selectCategory, selectProperties, selectZone, selectLight, selectOrigin])

  //get unique types
  let types = getUnique(plants, "type");
  //add all
  //types = ["all", ...types];
  //format to dropdown
  types = formatData(types, "type");

  //get unique categories
  let categories = getUnique(plants, "greenspace_category");
  //add all
  //categories = ["all", ...categories];
  //format to dropdown
  categories = formatData(categories, "greenspace_category");

  //get unique climate zones
  let zones = getUnique(plants, "climate_zone");
  //add all
  //zones = ["all", ...zones];
  //format to dropdown
  zones = formatData(zones, "climate_zone");

  const items_properties = [
    {
      id: "pollinator_friendly",
      value: "Bievennlig",
    },
    {
      id: "edible",
      value: "Spiselig",
    },
    {
      id: "air_puryfying",
      value: "Luftrensende",
    },
    {
      id: "pet_kids_friendly",
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
      id: "norwegian_nursery",
      value: "Norsk planteskole",
    },
    {
      id: "native",
      value: "Norske planter",
    },
  ];

  const items_light = [
    {
      id: "sun_seeker",
      value: "Mest sol",
    },
    {
      id: "shadow_lover",
      value: "Mest skygge",
    },
  ];

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/*Dropdown.js */}
        {/* Category */}
        <Dropdown
          multi={true}
          selectValues={selectCategory}
          clearable={true}
          closeOnSelect={false}
          options={categories}
          placeholder="Grøntområde"
          onChange={(values) => setSelectCategory(values)}
        />
        {/*Type */}
        <Dropdown
          multi={true}
          selectValues={selectType}
          clearable={true}
          closeOnSelect={false}
          options={types}
          placeholder="Type"
          onChange={(values) => setSelectType(values)}
        />
        {/*Zone */}
        <Dropdown
          multi={true}
          selectValues={selectZone}
          clearable={true}
          closeOnSelect={false}
          options={zones}
          placeholder="Klimasone"
          onChange={(values) => setSelectZone(values)}
        />
        {/*Origin */}
        <Dropdown
          multi={true}
          selectValues={selectOrigin}
          clearable={true}
          closeOnSelect={false}
          options={items_origin}
          placeholder="Opprinnelse"
          onChange={(values) => setSelectOrigin(values)}
        />
        {/*Light */}
        <Dropdown
          multi={false}
          selectValues={selectLight}
          clearable={true}
          closeOnSelect={true}
          options={items_light}
          placeholder="Lysforhold"
          onChange={(values) => setSelectLight(values)}
        />
        {/*Light */}
        <Dropdown
          multi={true}
          selectValues={selectProperties}
          clearable={true}
          closeOnSelect={false}
          options={items_properties}
          placeholder="Egenskaper"
          onChange={(values) => setSelectProperties(values)}
        />
        

        {/* end Dropdown.js */}
      </form>
    </section>
  );
}
