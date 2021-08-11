import React, { Component } from "react";
import { PlantContext } from "../context/plants";
import "../styles/Plants.css";
import Dropdown from "./Dropdown";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const formatData = (items, index) => {
  let tempItems = items
    .filter(function(item) {
      //skip nulls
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

if (!Array.prototype.last) {
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
}

export default class PlantsFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectPlant: [],
      selectType: [],
      selectCategory: [],
      selectLight: [],
      selectOrigin: [],
      selectZone: [],
      selectProperties: [],
      lastSelectPlant: [],
      lastSelectType: [],
      lastSelectCategory: [],
      lastSelectLight: [],
      lastSelectOrigin: [],
      lastSelectZone: [],
      lastSelectProperties: [],
    };
  }

  static contextType = PlantContext;

  getCurrentItem = (orgArray, copyArray) => {
    let currentItem;

    if (orgArray.length > copyArray.length) {
      //element added
      currentItem = orgArray.filter((el) => !copyArray.includes(el));
    } else if (orgArray.length < copyArray.length) {
      //element remnoved
      currentItem = copyArray.filter((el) => !orgArray.includes(el));
    }
    this.context.handleChange(currentItem);
  };

  setValues = (orgName, values) => {
    //console.log(values)
    let tempArray = [...this.state[orgName]];
    this.setState(
      {
        [orgName]: values,
      },
      () => {
        this.getCurrentItem(this.state[orgName], tempArray);
      }
    );
  };

  render() {
    const { handleChange, searchName, minSize, maxSize } = this.context;

    //get unique types
    let types = getUnique(this.props.plants, "type");
    //format to dropdown
    types = formatData(types, "type");

    //get unique categories
    let categories = [
      ...new Set(this.props.plants.flatMap(({ category }) => category)),
    ].sort();
    categories = formatData(categories, "category");

    //get unique climate zones
    let zones = getUnique(this.props.plants, "climate_zone");
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

    let ps = this.props.plants.map((p) => {
      let newPlant = { value: p.norwegian_name, image: p.image };
      return newPlant;
    });

    return (
      <section className="filter-container">
        <form className="filter-form">
          {/*Dropdown.js */}
          <Dropdown
            multi={false}
            selectValues={this.state.selectPlant}
            clearable={true}
            closeOnSelect={true}
            options={ps}
            placeholder="Search for plant..."
            onChange={(values) => this.setValues("selectPlant", values)}
            itemRenderer={true}
            searchable={true}
          />
          {/* Category */}
          <Dropdown
            multi={true}
            selectValues={this.state.selectCategory}
            clearable={true}
            closeOnSelect={false}
            options={categories}
            placeholder="Grøntområde"
            onChange={(values) => this.setValues("selectCategory", values)}
          />
          {/*Type */}
          <Dropdown
            multi={true}
            selectValues={this.state.selectType}
            clearable={true}
            closeOnSelect={false}
            options={types}
            placeholder="Type"
            onChange={(values) => this.setValues("selectType", values)}
          />
          {/*Zone */}
          <Dropdown
            multi={true}
            selectValues={this.state.selectZone}
            clearable={true}
            closeOnSelect={false}
            options={zones}
            placeholder="Klimasone"
            onChange={(values) => this.setValues("selectZone", values)}
          />
          {/* Origin */}
          <Dropdown
            multi={true}
            selectValues={this.state.selectOrigin}
            clearable={true}
            closeOnSelect={false}
            options={items_origin}
            placeholder="Opprinnelse"
            onChange={(values) => this.setValues("selectOrigin", values)}
          />
          {/*Light */}
          <Dropdown
            multi={false}
            selectValues={this.state.selectLight}
            clearable={true}
            closeOnSelect={true}
            options={items_light}
            placeholder="Lysforhold"
            onChange={(values) => this.setValues("selectLight", values)}
          />
          {/* Properties */}
          <Dropdown
            multi={true}
            selectValues={this.state.selectProperties}
            clearable={true}
            closeOnSelect={false}
            options={items_properties}
            placeholder="Egenskaper"
            onChange={(values) => this.setValues("selectProperties", values)}
          />

          {/* end Dropdown.js */}
        </form>
      </section>
    );
  }
}

/*export default function PlantsFilter({ plants }) {
  useEffect(() => {
    let filters = [
      ...selectLight,
      ...selectType,
      ...selectZone,
      ...selectCategory,
      ...selectOrigin,
      ...selectProperties,
    ];
    handleChange(filters);
  }, [
    selectType,
    selectCategory,
    selectProperties,
    selectZone,
    selectLight,
    selectOrigin,
  ]);

  useEffect(() => {
    if (plant !== "") searchName(plant);
  }, [plant]);

  

  */
