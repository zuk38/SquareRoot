import React, { useState } from "react";
import Loading from "./Loading";
import useForm from "./hooks/useForm";
import validate from "./utility/ContactFormValidation";
import "../styles/Partner.css";
import { useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Trans, useTranslation } from "react-i18next";
import {sendAWSEmail} from "../api/sendEmail";

export default function ContactForm(props) {
  const { t } = useTranslation();
  const history = useHistory();
  const pathname = history.location.pathname;

  const { values, errors, handleChange, handleSubmit } = useForm(
    addContact,
    validate,
    callback
  );

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  function callback() {
    setIsSending(false);
  }

  function addContact() {
    if (!values.email || !values.message) {
      return;
    }

    setIsSending(true);

    values.subject = props.subject;

    sendAWSEmail(values.email, values).then((resp) => {
        setSent(true);
      }).catch((e) => {
        setSent(false);
        console.error(e);
      }).finally(() => {
        setIsSending(false);
      })
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
                <strong>{t("contact_page.email_notif_title")}</strong>
              </AlertTitle>
              {t("contact_page.email_notif_text")}
            </Alert>
          )}
          <form>
            <div
              className={
                pathname === "/contact-us"
                  ? "o-form__group"
                  : pathname === "/"
                  ? "o-form__group-full"
                  : "o-form__group u-txt--center"
              }
            >
              {props.title && (
                <h3 className={props.title_classname}>
                  {t(`contact_page.${props.title}`)}
                </h3>
              )}
              <div className="o-form__matrix-2">
                <span className="form-control-wrap your-name is-required">
                  <input
                    type="text"
                    name="name"
                    value-size="40"
                    className="o-form__control"
                    placeholder="Name"
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
                    placeholder="E-mail"
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
                    placeholder="Phone number (optional)"
                  />
                </span>
                {!props.demo && (
                  <span className="form-control-wrap your-location">
                    <input
                      type="text"
                      name="location"
                      value-size="40"
                      value={values.location || ""}
                      onChange={handleChange}
                      className="o-form__control"
                      placeholder="Location (optional)"
                    />
                  </span>
                )}
              </div>
            </div>
            {!props.demo && (
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
                    placeholder="Tell us what you're working on"
                    type="text"
                    value={values.message || ""}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="help is-danger">{errors.message}</p>
                  )}
                </span>
              </div>
            )}

            <div
              className={
                pathname === "/contact-us"
                  ? "o-form__group"
                  : pathname === "/"
                  ? "o-form__group-full"
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

                    <span className={props.demo ? "list-item-label is-white" : "list-item-label"}>
                      <Trans i18nKey="contact_page.accept1">
                        I accept SquareRoot's
                        <a
                          onClick={() =>
                            openInNewTab(
                              "https://squareroot-as.github.io/SquareRoot/tou.html"
                            )
                          }
                        >
                          &nbsp;Terms of Use&nbsp;
                        </a>
                        and
                        <a
                          onClick={() =>
                            openInNewTab(
                              "https://squareroot-as.github.io/SquareRoot/privacy.html"
                            )
                          }
                        >
                          &nbsp;Privacy Policy
                        </a>
                      </Trans>
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

                    <span className={props.demo ? "list-item-label is-white" : "list-item-label"}>
                      {t("contact_page.accept2")}
                    </span>
                  </label>
                </span>
              </span>
            </div>
            {props.demo ? (
              <button
                className="submit-form-control submit o-btn"
                onClick={handleSubmit}
                disabled={errors.conditions || errors.name || errors.email}
              >
                {t("contact_page.send")}
              </button>
            ) : (
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
                {t("contact_page.send")}
              </button>
            )}
          </form>
        </>
      )}{" "}
    </>
  );
}
