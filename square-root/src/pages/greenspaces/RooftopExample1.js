import React, { Component } from "react";
import data from "../pages/data.json";
import "./SingleGreenspace.css";
import Modal from "react-modal";

class RooftopExample1 extends Component {
  state = {
    modalOpen: false,
    name: "",
    description: "",
    address: "",
    postalCode: "",
    city: "",
    error: "",
  };
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    console.log(this.state);
    this.setState({
      modalOpen: false,
      name: "",
      description: "",
      postalCode: "",
      address: "",
      city: "",
    });
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <div className="greenspace">
          {data.Rooftop1.map((rooftop, i) => {
            return (
              <div key={i}>
                <div className="greenspaceinfo">
                  <img src={rooftop.icon} className="img-greenspace" />
                  <div>
                    {" "}
                    {rooftop.roles.map(function(role, i) {
                      return (
                        <div key={i}>
                          <h5>{role.title}</h5>
                          <p>{role.description}</p>
                          <button class="button is-medium is-fullwidth">
                            Velg by
                          </button>
                          <a href={role.similarurl1}>
                            <img
                              src={role.similaricon1}
                              className="similaricon"
                            />
                          </a>
                          <a href={role.similarurl2}>
                            <img
                              src={role.similaricon2}
                              className="similaricon"
                            />
                          </a>
                          <p className="city">{role.city}</p>
                        </div>
                      );
                    })}
                    <div className="options">
                      <div className="tilpass">
                        <a
                          class="button is-medium is-light is-fullwidth"
                          href="customize"
                        >
                          Tilpass
                        </a>
                      </div>
                      <button class="button is-medium is-dark is-fullwidth">
                        Legg til i prosjekt
                        <i class="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="requirements">
                  <h5>{rooftop.city}</h5>
                  <div className="func">
                    <h4 className="h4">{rooftop.func}</h4>
                    <h4 className="h4">{rooftop.main}</h4>
                    <div className="func_info">
                      {rooftop.functions.map(function(func, i) {
                        return (
                          <div key={i}>
                            <div className="req_info">
                              <img src={func.icon} className="func_icon" />{" "}
                              {func.name}{" "}
                            </div>
                          </div>
                        );
                      })}{" "}
                    </div>
                    <div className="main_info">
                      {rooftop.maintenance.map(function(main, i) {
                        return (
                          <div key={i}>
                            <div className="req_box">
                              <div className="req_info">
                                <img src={main.icon} className="func_icon" />{" "}
                                {main.name}{" "}
                              </div>
                            </div>
                          </div>
                        );
                      })}{" "}
                    </div>
                  </div>
                </div>
                <div className="description">
                  {rooftop.description.map(function(desc, i) {
                    return (
                      <div key={i}>
                        <div className="desc">
                          <h4 className="h4">{desc.name}</h4>
                          <div className="desc_info">{desc.info} </div>
                        </div>
                      </div>
                    );
                  })}{" "}
                </div>
                <div className="plantlist">
                  {/*BUTTON OPEN MODAL*/}

                  <button
                    className="button is-medium is-light is-fullwidth"
                    onClick={this.openModal}
                  >
                    Se hele plantelisten
                    <i class="fas fa-chevron-right" />
                  </button>
                  {/*MODAL*/}
                  <Modal
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    className={"modal-dashboard"}
                  >
                    <button
                      onClick={this.closeModal}
                      className="btn-modal-close"
                      alt="Lukk"
                    >
                      <i class="fas fa-times fa-lg"></i>
                    </button>
                    <div className="d-modal-content">
                      <h1 className="p-h1">Oslo Takterrasse</h1>{" "}
                      {/*greenspace_name*/}
                      <br />
                      <div className="d-modal-container">
                        <table className="d-table">
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-lucifer.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">Crocosmia Lucifer</td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">3 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-falcatum.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">Cyrtomium Falcatum</td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">6 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-belladonna.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">Delpinium Belladonna</td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">3 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-tomatosoup.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">
                              Echinacea 'Tomato Soup'
                            </td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">3 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-purpurea.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">
                              Echinacea Purpurea 'tiki torch'
                            </td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">2 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-bremen.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">Gaillardia 'Bremen'</td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">7 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-woblitz.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">
                              Galium Odoratum 'Woblitz'
                            </td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">1 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-thomson.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">
                              Geranium 'Anne Thomson'
                            </td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">4 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                          <tr>
                            <td className="d-modal-img">
                              <img src="../../../images/r-helenium.jpg"></img>
                            </td>{" "}
                            {/*greenspace_img*/}
                            <td className="d-td">
                              Helenium 'Sahins Early Flowerer'
                            </td>{" "}
                            {/*greenspace_name*/}
                            <td className="d-td">3 stk</td>{" "}
                            {/*number of one plant in greenspace*/}
                          </tr>
                        </table>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}
export default RooftopExample1;
