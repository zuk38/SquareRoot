import React, { useState } from "react";
import { API } from "aws-amplify";
import Loading from "../../components/Loading";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/ContactFormValidation";
import "../../styles/Partner.css";
import { useTranslation, Trans } from "react-i18next";
import ContactForm from "../../components/ContactForm";

export default function Partner(props) {
  const { t } = useTranslation();
  return (
    <div className="o-container">
      <div className="c-hero">
        <h1 className="c-txt--hero">{t("partner_page.title")}</h1>

        <div className="c-mrg--bottom" />

        <div className="c-grid--2x1">
          <div className="grid-item3 margin-left">
            <img
              src="../images/partner.jpg"
              className="c-img flip-img"
              alt="Partner"
            />
          </div>

          <div className="grid-item1 padding-top">
            <div className="c-txt-punchline--sm">
              <h2 className="c-txt-punchline--sm">
                {t("partner_page.subtitle")}
              </h2>
              {t("partner_page.description")}
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="o-container--lrg background-grey">
          <div className="c-grid--4x1">
            <div className="grid-item1">
              <div className="c-txt-punchline--sm">Real Estate Developers</div>
              <div className="short-border" />
              <p>{t("partner_page.RED_d")}</p>
            </div>

            <div className="grid-item3">
              <div className="c-txt-punchline--sm">Landscape Architects</div>

              <div className="short-border" />
              <p>{t("partner_page.LARK_d")}</p>
            </div>

            <div className="grid-item9">
              <div className="c-txt-punchline--sm">Landscape Entrepreneurs</div>
              <div className="short-border" />
              <p>{t("partner_page.LENT_d")}</p>
            </div>

            <div className="grid-item11">
              <div className="c-txt-punchline--sm">Plant Nurseries</div>
              <div className="short-border" />
              <p>{t("partner_page.PN_d")}</p>
            </div>
          </div>
        </div>
        <div className="c-section c-section--cta background-grey">
          <div className="o-container">
            <h2 className="c-txt-sectiontitle--sm u-txt--center">
              {t("partner_page.contact")}
            </h2>
            <div className="u-txt--center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
