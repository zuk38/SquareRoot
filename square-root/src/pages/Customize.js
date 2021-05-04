import React, {Component} from 'react';
import './Customize.css';
import Modal from "react-modal";

const plantList = [
    {
        Id: "1001",
        name: "Musa",
        img: "../../../images/musa.png",
        "Water Management": "Low",
        "Functional Requirements": [
            "Stormwater Management", "Pollinator Friendly"
        ],
        Origin: "Local"
    },
    {
        Id: "1002",
        name: "Pertusem",
        img: "../../../images/pertusem.png",
        "Water Management": "Medium",
        "Functional Requirements": [
            "Edible", "Pollinator Friendly"
        ],
        Origin: "Norwegian Nursery"
    },
    {
        Id: "1003",
        name: "Philodendron",
        img: "../../../images/philodendron.png",
        "Water Management": "High",
        "Functional Requirements": [
            "Stormwater Management", "Edible", "Pollinator Friendly"
        ],
        Origin: "Local"
    },
    {
        Id: "1001",
        name: "Musa",
        img: "../../../images/musa.png",
        "Water Management": "Low",
        "Functional Requirements": [
            "Stormwater Management", "Pollinator Friendly"
        ],
        Origin: "Local"
    }, {
        Id: "1002",
        name: "Pertusem",
        img: "../../../images/pertusem.png",
        "Water Management": "Medium",
        "Functional Requirements": [
            "Edible", "Pollinator Friendly"
        ],
        Origin: "Norwegian Nursery"
    }, {
        Id: "1003",
        name: "Philodendron",
        img: "../../../images/philodendron.png",
        "Water Management": "High",
        "Functional Requirements": [
            "Stormwater Management", "Edible", "Pollinator Friendly"
        ],
        Origin: "Local"
    }
];

const plantFilters = {
    "Functional Requirements": [
        "Rain Garden", "Pollinator Friendly", "Edible"
    ],
    Type: [
        "Flower", "Grass", "Buss & Berry"
    ],
    Origin: [
        "Native", "Norwegian Nursery"
    ],
    "Sun Light": ["Sun Seekers", "Shaddow lovers"]
};


function PlantPage() {
    const [plantFilter, setPlantFilter] = React.useState({"Functional Requirements": [], Type: [], Origin: [], "Sun Light": []});

    const [plants, setPlants] = React.useState([]);
    const [filteredPlants, setFilteredPlants] = React.useState([]);

    // Runs at load
    React.useEffect(() => {
        setPlants(plantList);
        setFilteredPlants(plantList);
    }, []);


    const [modalOpen, setModalOpen] = React.useState(false);
    const [items, setItems] = React.useState([]);

    // Runs when plantFilter is changed
    React.useEffect(() => {
        let newPlantList = [];
        let tempPlants = plants;

        tempPlants.map(plant => {
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

        if (newPlantList.length <= 0) 
            newPlantList = plantList;
        

        setFilteredPlants(newPlantList);
    }, [plantFilter]);

    // onClick handler for the filter checkboxes
    const handleFilterChange = (event, pf, pfAlternative) => {
        let currentFilter = plantFilter;

        if (event.target.checked) {
            currentFilter[pf].push(pfAlternative);
        } else {
            currentFilter[pf].splice(currentFilter[pf].indexOf(pfAlternative), 1);
        }

        setPlantFilter({
            ... currentFilter
        });
    };


    return (
        <div>
            <a href="Rooftop"><i class="fas fa-chevron-left"/>Tilbake til Rooftop</a>
            <div className="check">
                <button class="button is-rounded">
                    <span class="icon is-small">
                        <i class="fas fa-check"></i>
                    </span>
                </button>
            </div>

            <button className="btn-orders"
                onClick={
                    () => setModalOpen(true)
            }>
                <i className="fas fa-tasks fa-2x"></i>12{/*GET NUMBER OF ITEMS*/}
                <i className="fas fa-chevron-down"/>
            </button>

            <Modal isOpen={modalOpen}
                onRequestClose={
                    () => setModalOpen(false)
                }
                className={"modal-orders"}>
                <div className="o-modal-content">
                    <h1 className="o-h1">
                        Det er {/*GET ITEM NUMBERS*/}
                        i {/*GET GREENSPACE NAME*/} </h1>

                    <div className="modal-plantList">
                        {/*PLANTS GO HERE*/}</div>

                    <div className="modal-btns-footer">
                        <button className="orders-btn-close"
                            onClick={
                                () => setModalOpen(false)
                            }
                            alt="Lukk">
                            Lukk
                        </button>
                        <button className="orders-btn-save"
                            onClick={
                                () => setModalOpen(false)
                            }
                            alt="Lagre">
                            Lagre
                        </button>
                    </div>
                </div>
            </Modal>


            <h5>Customize Rooftop Garden</h5>
            <p>Tekst om hvorfor Rooftop Garden er bra for alle.</p>
            <div className="filters">
                {
                Object.keys(plantFilters).map((pf) => {
                    return <div>
                        <b className="pf">
                            {pf}</b>
                        {
                        plantFilters[pf].map((pfAlternative) => {
                            return <label>
                                <input type="checkbox"
                                    key={pfAlternative}
                                    value={pfAlternative}
                                    onClick={
                                        (event) => handleFilterChange(event, pf, pfAlternative)
                                    }/> {pfAlternative} </label>
                    })
                    }
                        <br/>
                    </div>
            })
            } </div>


            <div className="pn">
                {
                filteredPlants.map((plant) => {
                    return <div className="plants">
                        <img className="plant"
                            src={
                                plant.img
                            }/>
                        <h3 className="name">
                            {
                            plant.name
                        }</h3>
                    </div>
            })
            } </div>
        </div>
    );


}


export default PlantPage;
