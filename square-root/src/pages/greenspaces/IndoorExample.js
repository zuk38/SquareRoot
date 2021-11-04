import React, { Component } from 'react';
import data from '../data.json';
import '../../styles/SingleGreenspace.css';
import Modal from 'react-modal';
import ProjectPlantsModal from '../../components/user/ProjectPlantsModal';

class IndoorExample extends Component {
  state = {
    modalOpen: false,
    name: '',
    description: '',
    address: '',
    postalCode: '',
    city: '',
    error: '',
  };
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    console.log(this.state);
    this.setState({
      modalOpen: false,
      name: '',
      description: '',
      postalCode: '',
      address: '',
      city: '',
    });
  };

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <div>
        <div className='greenspace'>
          {data.Indoor.map((indoor, i) => {
            return (
              <div key={i}>
                <div className='greenspaceinfo'>
                  <img src={indoor.icon} className='img-greenspace' />
                  <div>
                    {' '}
                    {indoor.roles.map(function (role, i) {
                      return (
                        <div key={i}>
                          <h5>{role.title}</h5>
                          <p>{role.description}</p>
                          <button class='button is-medium is-fullwidth'>
                            Velg by
                          </button>
                          <a href={role.similarurl1}>
                            <img
                              src={role.similaricon1}
                              className='similaricon'
                            />
                          </a>
                          <a href={role.similarurl2}>
                            <img
                              src={role.similaricon2}
                              className='similaricon'
                            />
                          </a>
                          <p className='city'>{role.city}</p>
                        </div>
                      );
                    })}
                    <div className='options'>
                      <div className='tilpass'>
                        <a
                          class='button is-medium is-light is-fullwidth'
                          href='customize'
                        >
                          Tilpass
                        </a>
                      </div>
                      <button class='button is-medium is-dark is-fullwidth'>
                        Legg til i prosjekt
                        <i class='fas fa-chevron-right' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='requirements'>
                  <h5>{indoor.city}</h5>
                  <div className='func'>
                    <h4 className='h4'>{indoor.func}</h4>
                    <h4 className='h4'>{indoor.main}</h4>
                    <div className='func_info'>
                      {indoor.functions.map(function (func, i) {
                        return (
                          <div key={i}>
                            <div className='req_info'>
                              <img src={func.icon} className='func_icon' />{' '}
                              {func.name}{' '}
                            </div>
                          </div>
                        );
                      })}{' '}
                    </div>
                    <div className='main_info'>
                      {indoor.maintenance.map(function (main, i) {
                        return (
                          <div key={i}>
                            <div className='req_box'>
                              <div className='req_info'>
                                <img src={main.icon} className='func_icon' />{' '}
                                {main.name}{' '}
                              </div>
                            </div>
                          </div>
                        );
                      })}{' '}
                    </div>
                  </div>
                </div>
                <div className='description'>
                  {indoor.description.map(function (desc, i) {
                    return (
                      <div key={i}>
                        <div className='desc'>
                          <h4 className='h4'>Description</h4>
                          <div className='desc_info'>{desc.info} </div>
                        </div>
                      </div>
                    );
                  })}{' '}
                </div>
                <div className='plantlist'>
                  {/*BUTTON OPEN MODAL*/}

                  <button
                    className='button is-medium is-light is-fullwidth'
                    onClick={this.openModal}
                  >
                    Se hele plantelisten
                    <i class='fas fa-chevron-right' />
                  </button>
                  {/*MODAL*/}
                  <ProjectPlantsModal
                    modalOpen={this.state.modalOpen}
                    openModal={this.openModal}
                  />
                </div>
              </div>
            );
          })}{' '}
        </div>
      </div>
    );
  }
}
export default IndoorExample;
