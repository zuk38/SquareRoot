import React, { useState } from "react";
import { API } from "aws-amplify";
import Loading from "../../components/Loading";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/ContactFormValidation";
import "../../styles/Partner.css";
import PartnerContainer from "../../components/PartnerContainer";
import { useTranslation } from "react-i18next";

export default function Partner(props) {
  const { t } = useTranslation();
  const { values, errors, handleChange, handleSubmit } = useForm(
    addContact,
    validate,
    callback
  );

  const [isSending, setIsSending] = useState(false);
  async function addContact() {
    setIsSending(true);
    // create request body
    const data = {
      body: {
        name: values.name,
        email: values.email,
        message: values.message,
      },
    };
    console.log(data);
    // call the API gateway
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
        <div className="o-container">
          <div className="c-hero">
            <h1 className="c-txt--hero">{t("partner_page.title")}</h1>

            <div className="c-mrg--bottom"></div>

            <div className="c-grid--2x2">
              <div className="grid-item3 margin-left">
                <img src="../images/partner.jpg" className="c-img flip-img" />
              </div>

              <div className="grid-item1">
                <div className="c-txt-punchline--sm">
                  <h2 className="c-txt-punchline--sm">
                    {t("partner_page.subtitle")}
                  </h2>
                  {t("partner_page.d1")}
                  <br />
                  <br />
                  {t("partner_page.d2")}
                </div>
              </div>

              <div className="c-mrg--bottom"></div>
            </div>
            <div className="c-section c-section--cta background-grey">
              <div className="o-container">
                <h2 className="c-txt-sectiontitle--sm u-txt--center">
                  {t("partner_page.contact")}
                </h2>
                <div className="u-txt--center">
                  <PartnerContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
