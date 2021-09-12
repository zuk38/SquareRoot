import React, {useState} from "react";
import {API} from "aws-amplify";
import Loading from "./Loading";
import useForm from "./hooks/useForm";
import validate from "./utility/ContactFormValidation";
import "../styles/Partner.css"
import ButtonPrimary from "../styles/StyledComponents"
import {Button} from "@material-ui/core";

export default function Partner(props) {
    const {values, errors, handleChange, handleSubmit} = useForm(addContact, validate, callback);

    const [isSending, setIsSending] = useState(false);
    async function addContact() {
        setIsSending(true);
        // create request body
        const data = {
            body: {
                name: values.name,
                email: values.email,
                message: values.message
            }
        };
        console.log(data);
        // call the API gateway
        const apiData = await API.post("contactFormApi", "/contact", data);
        console.log({apiData});
        setIsSending(false);
        alert("Mail sent!");
    }

    async function callback() {
        console.log(values);
    }

    return (
        <> {
            isSending ? (
                <Loading/>) : (


        
                        <form>
        <div className="o-form__group u-txt--center">
          
          <div className="o-form__matrix-2">
            <span className="form-control-wrap your-name is-required">
              <input
                type="text"
                name="your-name"
                value-size="40"
                className="o-form__control"
                placeholder="Navn"
              />
            </span>
            <span className="form-control-wrap your-email is-required">
              <input
                type="email"
                name="your-email"
                value-size="40"
                className="o-form__control"
                placeholder="E-post"
              />
            </span>
            <span className="form-control-wrap your-name">
              <input
                type="text"
                name="your-phone"
                value-size="40"
                className="o-form__control"
                placeholder="Mobilnummer (valgfritt)"
              />
            </span>
            <span className="form-control-wrap your-location">
              <input
                type="tel"
                name="your-location"
                value-size="40"
                className="o-form__control"
                placeholder="Beliggenhet (valgfritt)"
              />
            </span>
          </div>
        </div>

        <div className="o-form__group u-txt--center">
          <span className="form-control-wrap message">
            <textarea
              name="message"
              cols="40"
              rows="6"
              className="o-form__control textarea is-required o-form__control"
              placeholder="Fortell oss hva du jobber med"
            ></textarea>
          </span>
        </div>

        <div className="o-form__group u-txt--center">
          <span className="form-control-wrap gdpr-contact-consent">
            <span className="list-item is-required">
              <label>
                <input
                  type="checkbox"
                  name="checkbox-gdpr-contact-consent"
                  value="1"
                />

                <span className="list-item-label">
                  Jeg godtar SquareRoot's
                  <a href="terms-and-conditions">&nbsp;vilkår og betingelser</a>
                  .
                </span>
              </label>
            </span>
          </span>

          <span className="form-control-wrap subscribe-contact">
            <span className="list-item">
              <label>
                <input
                  type="checkbox"
                  name="checkbox-subscribe-contact"
                  value="1"
                />

                <span className="list-item-label">
                  Jeg ønsker å iblant motta nyhetsbrev fra SquareRoot om tilbud,
                  nyheter og oppdateringer innen grønn byutvikling.
                </span>
              </label>
            </span>
          </span>
        </div>

        {/*Check if fields "is-required" are valid, if not, then disable button*/}
        <input
          type="submit"
          value="Send"
          className="submit-form-control submit o-btn"
          /*disabled*/
        />
      </form>


            )
        } </>
    );
}
