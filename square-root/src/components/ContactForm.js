import React, { useState } from "react";
import { API } from "aws-amplify";
import Loading from "./Loading";
import useForm from "./hooks/useForm";
import validate from "./utility/ContactFormValidation";
import "../styles/Partner.css";
import { useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ContactForm(props) {
  const history = useHistory();
  const pathname = history.location.pathname;

  const { values, errors, handleChange, handleSubmit } = useForm(
    addContact,
    validate,
    callback
  );

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function addContact() {
    setIsSending(true);
    // create request body
    const data = {
      body: {
        name: values.name,
        email: values.email,
        message: values.message,
        phone: values.phone || "",
        location: values.location || "",
      },
    };
    // call the API gateway
    const apiData = await API.post("contactFormApi", "/contact", data);
    console.log({ apiData });
    setIsSending(false);
    setSent(true);
  }

  function callback() {
    console.log("success");
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      {isSending ? (
        <Loading />
      ) : (
        <>
          {sent && (
            <Alert
              severity="success"
              onClose={() => {
                setSent(false);
              }}
            >
              <AlertTitle>
                <strong>Email sent!</strong>
              </AlertTitle>
              We will get back to you as soon as possible.
            </Alert>
          )}
          <form>
            <div
              className={
                pathname === "/contact-us"
                  ? "o-form__group"
                  : "o-form__group u-txt--center"
              }
            >
              <div className="o-form__matrix-2">
                <span className="form-control-wrap your-name is-required">
                  <input
                    type="text"
                    name="name"
                    value-size="40"
                    className="o-form__control"
                    placeholder="Navn"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </span>
                <span className="form-control-wrap your-email is-required">
                  <input
                    type="text"
                    name="email"
                    value-size="40"
                    className="o-form__control"
                    placeholder="E-post"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </span>
                <span className="form-control-wrap your-name">
                  <input
                    type="text"
                    name="phone"
                    value-size="40"
                    value={values.phone || ""}
                    onChange={handleChange}
                    className="o-form__control"
                    placeholder="Mobilnummer (valgfritt)"
                  />
                </span>
                <span className="form-control-wrap your-location">
                  <input
                    type="text"
                    name="location"
                    value-size="40"
                    value={values.location || ""}
                    onChange={handleChange}
                    className="o-form__control"
                    placeholder="Beliggenhet (valgfritt)"
                  />
                </span>
              </div>
            </div>

            <div
              className={
                pathname === "/contact-us"
                  ? "o-form__group"
                  : "o-form__group u-txt--center"
              }
            >
              <span className="form-control-wrap message">
                <textarea
                  name="message"
                  cols="40"
                  rows="6"
                  className="o-form__control textarea is-required o-form__control"
                  placeholder="Fortell oss hva du jobber med"
                  type="text"
                  value={values.message || ""}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="help is-danger">{errors.message}</p>
                )}
              </span>
            </div>

            <div
              className={
                pathname === "/contact-us"
                  ? "o-form__group"
                  : "o-form__group u-txt--center"
              }
            >
              <span className="form-control-wrap gdpr-contact-consent">
                <span className="list-item is-required">
                  <label>
                    <input
                      type="checkbox"
                      name="conditions"
                      value={values.conditions || false}
                      onChange={handleChange}
                    />

                    <span className="list-item-label">
                      Jeg godtar SquareRoots
                      <a onClick={() => openInNewTab("https://squareroot-as.github.io/SquareRoot/tou.html")}>
                        &nbsp;vilkår for bruk&nbsp;
                      </a>
                      og
                      <a onClick={() => openInNewTab("https://squareroot-as.github.io/SquareRoot/privacy.html")}>
                        &nbsp;personvernerklæring
                      </a>
                    </span>
                  </label>
                </span>
              </span>
              {errors.conditions && (
                <p className="help is-danger">{errors.conditions}</p>
              )}

              <span className="form-control-wrap subscribe-contact">
                <span className="list-item">
                  <label>
                    <input
                      type="checkbox"
                      name="consent"
                      value={values.consent || false}
                      onChange={handleChange}
                    />

                    <span className="list-item-label">
                      Jeg ønsker å iblant motta nyhetsbrev fra SquareRoot om
                      tilbud, nyheter og oppdateringer innen grønn byutvikling.
                    </span>
                  </label>
                </span>
              </span>
            </div>

            <button
              className="submit-form-control submit o-btn"
              onClick={handleSubmit}
              disabled={
                errors.conditions ||
                errors.name ||
                errors.email ||
                errors.message
              }
            >
              Send
            </button>
          </form>
        </>
      )}{" "}
    </>
  );
}
