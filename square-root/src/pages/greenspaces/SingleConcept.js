import React, { Component } from "react";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";
import { ReactComponent as BeeIcon } from "../../icons/bee.svg";
import { ReactComponent as EdibleIcon } from "../../icons/eat.svg";
import { ReactComponent as NativeIcon } from "../../icons/norway.svg";
import { ReactComponent as PetKidsIcon } from "../../icons/pets.svg";
import { ReactComponent as AirIcon } from "../../icons/air-purifier.svg";
import { ReactComponent as SunIcon } from "../../icons/sun.svg";

export default class SingleConcept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
    };
  }

  static contextType = ConceptContext;

  render() {
    const { getConcept } = this.context;
    const concept = getConcept(this.state.name);
    console.log(concept);

    const iconMap = {
      pollinator_friendly: <BeeIcon />,
      edible: <EdibleIcon />,
      pet_kids_friendly: <PetKidsIcon />,
      air_puryfying: <AirIcon />,
      sun_seeker: <SunIcon />,
      native: <NativeIcon />,
    };

    if (!concept) {
      return (
        <div className="error">
          <h3> no such concept could be found...</h3>
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </div>
      );
    }

    const { name, image, description, plants } = concept;

    let tempFeatures = [
      "pollinator_friendly",
      "edible",
      "pet_kids_friendly",
      "air_puryfying",
      "sun_seeker",
      "native",
    ];
  
    var features = Object.keys(tempFeatures).filter(function(x) {
      return plants[tempFeatures[x]] !== false;
    });

    console.log(features)

    return (
      <div className="greenspace">
        <div className="greenspaceinfo">
          <img src={image} className="img-greenspace" alt={name} />
          <h5>{name}</h5>
          <p>{description}</p>
          <button className="button is-medium is-fullwidth">Velg by</button>
          <div className="options">
            <div className="tilpass">
              <a
                className="button is-medium is-light is-fullwidth"
                href="/customize"
              >
                Tilpass
              </a>
            </div>
            <button className="button is-medium is-dark is-fullwidth">
              Legg til i prosjekt
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
        <div className="requirements">
        <h5>OSLO</h5>
          <div className="func">
            <h4>Functional Requirements:</h4>
            <h4>Maintenance Needs:</h4>
            <div className="func_info">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
