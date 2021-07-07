import React, { useState } from "react";
import { API } from "aws-amplify";
import Loading from "./Loading";
import useForm from "./hooks/useForm";
import validate from "./utility/ContactFormValidation";
import "../styles/Partner.css"
import ButtonPrimary from "../styles/StyledComponents"

export default function Partner(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    addContact,
    validate,
    callback
  );

  const [isSending, setIsSending] = useState(false);
  async function addContact() {
    setIsSending(true);
    //create request body
    const data = {
      body: {
        name: values.name,
        email: values.email,
        message: values.message,
      },
    };
    console.log(data);
    //call the API gateway
    const apiData = await API.post("contactFormApi", "/contact", data);
    console.log({ apiData });
    setIsSending(false);
    alert("Mail sent!");
  }

  async function callback() {
    console.log(values);
  }

  return (
    <>
      {isSending ? (
        <Loading />
      ) : (
 
 
 <div className="form-wrapper">
          <div className="form-box1">
          <img src="../images/partner.png"></img>
          </div>
          <div className="form-box2">
          <h1 className="box2-h1">Samarbeid med oss</h1>
            <p className="box2-p">
              Er du en landskapsentreprenør eller eier av en Planteskole og
              interessert i SquareRoot? Ta gjerne kontakt!
            </p>
            <form noValidate className="box2-fields">
              <div className="partner-field">
                <input
                  name="name"
                  type="text"
                  placeholder="Navn"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <p className="help is-danger">{errors.name}</p>}
              </div>
              <div className="partner-field">
                <input
                  name="email"
                  type="text"
                  placeholder="E-post"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
              <div className="partner-field">
                <input
                  name="message"
                  type="text"
                  placeholder="Beskjed"
                  onChange={values.message || ""}
                  onChange={handleChange}
                />
              </div>
              <label className="checkbox-container">
                <a href="terms-and-conditions">
                  Jeg godtar vilkår og betingelser
                </a>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={values.conditions}
                />
                <span class="checkmark" />
              </label>
            </form>
            <ButtonPrimary
              float="right"
              onClick={handleSubmit}
            >
              Send
            </ButtonPrimary>
          </div>
        </div>
       
      )}
    </>
  );
}