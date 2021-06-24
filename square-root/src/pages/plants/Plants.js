import React from "react";
import ReactDOM from "react-dom";
import "../../styles/Plants.css";
import Title from "../../components/Title";
import PlantsContainer from "./PlantsContainer";

export default function Plants() {
  return (
    <>
      <Title
        title="PLANTER"
        subtitle="I Oslo anbefales det med biologisk mangfoldige planter og
              temperaturregulerende planter. Vi kan skrive mer her for å gi mer
              informasjon."
        style="plants-title"
      />
      <PlantsContainer/>
    </>
  );
}

/*const plantList =  [
  {
    Id: "1001",
    name: "Musa",
    img: "../../../images/musa.png",
    pollinator_friendly: true,
    edible: false,
    rain_garden: false,
    pet_kids_friendly: false,
    air_puryfying: true,
    sun_seeker: true,
    native: true,
    norwegian_nursery: true,
    featured: true,
  },
  {
    Id: "1002",
    name: "Pertusem",
    img: "../../../images/pertusem.png",   
    pollinator_friendly: true,
    edible: true,
    rain_garden: false,
    pet_kids_friendly: false,
    air_puryfying: false,
    sun_seeker: false,
    native: false,
    norwegian_nursery: true,
    featured: true,
  },
  {
    Id: "1003",
    name: "Philodendron",
    img: "../../../images/philodendron.png",
    pollinator_friendly: true,
    edible: true,
    rain_garden: false,
    pet_kids_friendly: true,
    air_puryfying: true,
    sun_seeker: false,
    native: true,
    norwegian_nursery: true,
    featured: true,
  },
  {
    Id: "1001",
    name: "Musa",
    img: "../../../images/musa.png",
    pollinator_friendly: true,
    edible: false,
    rain_garden: false,
    pet_kids_friendly: false,
    air_puryfying: false,
    sun_seeker: false,
    native: false,
    norwegian_nursery: false,
    featured: false,
  },
  {
    Id: "1002",
    name: "Pertusem",
    img: "../../../images/pertusem.png",
    pollinator_friendly: true,
    edible: true,
    rain_garden: true,
    pet_kids_friendly: true,
    air_puryfying: true,
    sun_seeker: true,
    native: true,
    norwegian_nursery: true,
    featured: true,
  },
  {
    Id: "1003",
    name: "Philodendron",
    img: "../../../images/philodendron.png",
    pollinator_friendly: true,
    edible: true,
    rain_garden: false,
    pet_kids_friendly: false,
    air_puryfying: false,
    sun_seeker: false,
    native: true,
    norwegian_nursery: false,
    featured: true,
  },
];


const plantFilters = {
  "Functional Requirements": ["Rain Garden", "Pollinator Friendly", "Edible"],
  Type: ["Flower", "Grass", "Buss & Berry"],
  Origin: ["Native", "Norwegian Nursery"],
  "Sun Light": ["Sun Seekers", "Shaddow lovers"],
};

function Plants() {
  const [plantFilter, setPlantFilter] = React.useState({
    "Functional Requirements": [],
    Type: [],
    Origin: [],
    "Sun Light": [],
  });

  const [plants, setPlants] = React.useState([]);
  const [filteredPlants, setFilteredPlants] = React.useState([]);

  //Runs at load
  React.useEffect(() => {
    setPlants(plantList);
    setFilteredPlants(plantList);
  }, []);

  //Runs when plantFilter is changed
  React.useEffect(() => {
    let newPlantList = [];
    let tempPlants = plants;

    tempPlants.map((plant) => {
      let matchesFilter = false;

      Object.keys(plantFilter).map((pf) => {
        plantFilter[pf].map((pfAlternative) => {
          if (Array.isArray(plant[pf]) && plant[pf].includes(pfAlternative))
            matchesFilter = true;
          else if (plant[pf] == pfAlternative) {
            matchesFilter = true;
          }
        });
      });

      if (matchesFilter) {
        newPlantList.push(plant);
      }
    });

    if (newPlantList.length <= 0) newPlantList = plantList;

    setFilteredPlants(newPlantList);
  }, [plantFilter]);

  //onClick handler for the filter checkboxes
  const handleFilterChange = (event, pf, pfAlternative) => {
    let currentFilter = plantFilter;

    if (event.target.checked) {
      currentFilter[pf].push(pfAlternative);
    } else {
      currentFilter[pf].splice(currentFilter[pf].indexOf(pfAlternative), 1);
    }

    setPlantFilter({ ...currentFilter });
  };

  return (
    <div>
      <div className="customize-content">
        <div className="cust-concept-title">
          <h1>PLANTER</h1>
          <p>
            I Oslo anbefales det med biologisk mangfoldige planter og
            temperaturregulerende planter. Vi kan skrive mer her for å gi mer
            informasjon.
          </p>
        </div>
      </div>
      <div className="filters">
        {Object.keys(plantFilters).map((pf) => {
          return (
            <div>
              <b className="pf">{pf}</b>
              {plantFilters[pf].map((pfAlternative) => {
                return (
                  <label>
                    <input
                      type="checkbox"
                      key={pfAlternative}
                      value={pfAlternative}
                      onClick={(event) =>
                        handleFilterChange(event, pf, pfAlternative)
                      }
                    />
                    {pfAlternative}
                  </label>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>

      <div className="pn">
        {filteredPlants.map((plant) => {
          return (
            <div className="plants">
              <img className="plant" src={plant.img} />
              <h3 className="name">{plant.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ReactDOM.render(<Plants />, document.getElementById("root"));

export default Plants;*/
