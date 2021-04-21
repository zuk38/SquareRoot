import React, { Component } from "react";
import "./Projects.css";
import icon from "../../../images/proj_icon.png";
import Modal from "react-modal";
import { findCityFromZip } from "../../../functions/apiCalls";

export default class All_Projects extends Component {
  state = {
    modalOpen: false,
    name: "",
    address: "",
    postalCode: "",
    city: "",
    error: "",
  };

  updateModalState = (key, value) => {
    if (key == "postalCode" && value.length == 4) {
      this.setState({ postalCode: value }, function() {
        findCityFromZip(value).then((response) => {
          if (response) this.setState({ city: response });
          else this.setState({error: "invalid zip"})
        });
      });
    }
    this.setState({ [key]: value });
    this.setState({ error: "" });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  submitModal = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="projects-title">
        <img class="p-icon-main" src={icon} alt="Prosjektikon" />
        <h1>PROSJEKTER</h1>

        <button className="btn-new-project" onClick={this.openModal}>
          <i class="fas fa-plus"></i>NYTT PROSJEKT
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className={"modal-project"}
        >
          <div className="p-modal-content">
            <button
              onClick={this.closeModal}
              className="btn-modal-close"
              alt="Lukk"
            >
              <i class="fas fa-times fa-lg"></i>
            </button>
            <h1>La oss lage et økosystem</h1>
            <br />
            <h2>Fortell oss litt mer om prosjektet</h2>

            <form>
              <div className="p-inputBox">
                <label className="p-lbl">Navn</label>
                <input
                  type="text"
                  placeholder="Prosjektets navn.."
                  className="p-inp-text"
                  onChange={(e) =>
                    this.updateModalState("name", e.target.value)
                  }
                />

                <label className="p-lbl">Adresse</label>
                <input
                  type="text"
                  placeholder="Prosjektets adresse.."
                  className="p-inp-text"
                  onChange={(e) =>
                    this.updateModalState("address", e.target.value)
                  }
                />

                <div className="p-flex">
                  <div className="p-classFlex">
                    <label className="p-lblFlex">PostNr</label>
                    <input
                      type="text"
                      className="p-input-inline"
                      pattern="[0-4]*"
                      value={this.state.postalCode}
                      onChange={(e) =>
                        this.updateModalState("postalCode", e.target.value)
                      }
                    />
                  </div>

                  <div className="p-classFlex">
                    <label className="p-lblFlex">Poststed</label>
                    <input
                      type="text"
                      className="p-input-inline"
                      value={this.state.city}
                      onChange={(e) =>
                        this.updateModalState("city", e.target.value)
                      }
                    />
                    <p className="help is-danger">{this.state.error}</p>
                  </div>
                </div>
                <button>tab navigation</button>
                <button>the modal</button>
              </div>
            </form>
          </div>
        </Modal>

        <br></br>

        <h2>
          Velg et prosjekt for å legge til eller endre et grøntområde, eller
          opprett et nytt prosjekt.
        </h2>

        {/*TABLE must GET data from GraphQL*/}
        <table id="projects-table">
          <tr>
            <th>PROSJEKTNAVN</th>
            <th>ADRESSE</th>
            <th>BESKRIVELSE</th>
            <th>OPPRETTET</th>
          </tr>
          <tr>
            <td>Sørengkaia</td>
            <td>Sørengkaia 63, 0166 Oslo</td>
            <td>OBOS</td>
            <td>04.03.2021</td>
          </tr>
          <tr>
            <td>Liertoppen</td>
            <td>Lierveien 3, 1657 Lier</td>
            <td>Privat</td>
            <td>12.02.2021</td>
          </tr>
        </table>
      </div>
    );
  }
}
