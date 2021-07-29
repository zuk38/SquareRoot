import React, { Component } from "react";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";
import { ReactComponent as BeeIcon } from "../../icons/bee.svg";
import { ReactComponent as EdibleIcon } from "../../icons/eat.svg";
import { ReactComponent as NativeIcon } from "../../icons/norway.svg";
import { ReactComponent as PetKidsIcon } from "../../icons/pets.svg";
import { ReactComponent as AirIcon } from "../../icons/air-purifier.svg";
import { ReactComponent as SunIcon } from "../../icons/sun.svg";
import { ReactComponent as ShadowIcon } from "../../icons/shadow.svg";
import Modal from "react-modal";

export default class SingleConcept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      modalOpen: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  static contextType = ConceptContext;

  render() {
    const { getConcept } = this.context;
    const concept = getConcept(this.state.name);
    console.log(concept);

    const iconMap = [
      {
        feature: "pollinator_friendly",
        icon: <BeeIcon />,
        name: "Pollinator friendly",
      },
      {
        feature: "edible",
        icon: <EdibleIcon />,
        name: "Edible",
      },
      {
        feature: "pet_kids_friendly",
        icon: <PetKidsIcon />,
        name: "Pet & kids friendly",
      },
      {
        feature: "air_puryfying",
        icon: <AirIcon />,
        name: "Air purifying",
      },
      {
        feature: "native",
        icon: <NativeIcon />,
        name: "Native",
      },
    ];

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

    const { name, image, description, plants, benefits, maintenance } = concept;

    console.log(maintenance);

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
                href={`/customize/${this.state.name}`}
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
              {iconMap.map((icon) =>
                Object.keys(benefits).map(
                  (key) =>
                    key === icon.feature && (
                      <div className="req_info">
                        <i className="func_icon">{icon.icon}</i>
                        {icon.name}
                      </div>
                    )
                )
              )}
            </div>
            <div className="main_info">
              <div className="req_box">
                <div className="req_info">
                  {maintenance ? (
                    <>
                      <i className="func_icon">
                        <SunIcon />
                      </i>{" "}
                      Sun: high
                    </>
                  ) : (
                    <>
                      <i className="func_icon">
                        <ShadowIcon />
                      </i>{" "}
                      Sun: low
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="desc">
            <h4>Description</h4>
            <div className="desc_info">{description} </div>
          </div>
        </div>
        <div className="plantlist">
          {/*BUTTON OPEN MODAL*/}

          <button
            className="button is-medium is-light is-fullwidth"
            onClick={() => this.setState({ modalOpen: true })}
          >
            Se hele plantelisten
            <i class="fas fa-chevron-right" />
          </button>
          {/*MODAL*/}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={() => this.setState({ modalOpen: false })}
            className={"modal-dashboard"}
          >
            <button
              onClick={() => this.setState({ modalOpen: false })}
              className="btn-modal-close"
              alt="Lukk"
            >
              <i class="fas fa-times fa-lg"/>
            </button>
            <div className="d-modal-content">
              <h1 className="p-h1">{this.state.name}</h1>
              <br />
              <div className="d-modal-container">
                <table className="d-table">
                  <tbody>
                    {plants.map((plant) => (
                      <tr>
                        <td className="d-modal-img">
                          <img src={plant.image} alt={plant.norwegian_name}/>
                        </td>
                        {/*greenspace_img*/}
                        <td className="d-td">{plant.norwegian_name}</td>
                        {/*greenspace_name*/}
                        <td className="d-td">{plant.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
