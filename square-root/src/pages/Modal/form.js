import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Prosjektets navn</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="adress">Adresse</label>
        <input
          type="text"
          className="form-control"
          id="adress"
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipcode">Postnummer</label>
        <input
          type="int"
          className="form-control"
          id="zipcode"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Poststed</label>
        <input
          type="text"
          className="form-control"
          id="city"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Create ecosystem
        </button>
      </div>
    </form>
  );
};
export default Form;
