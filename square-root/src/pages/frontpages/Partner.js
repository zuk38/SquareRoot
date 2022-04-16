import React, { useState } from "react";
import "../../styles/Partner.css";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm";
import {FooterContainer} from "../../components/footer/FooterContainer";

export default function Partner(props) {
  const { t } = useTranslation();
  return (
      <div className="front-container">
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
                <div className="4x1--item1">
                  <div className="c-txt-punchline--sm">{t("partner_page.RED")}</div>
                  <div className="short-border" />
                  <p>{t("partner_page.RED_d")}</p>
                </div>

                <div className="4x1--item2">
                  <div className="c-txt-punchline--sm">{t("partner_page.LARK")}</div>

                  <div className="short-border" />
                  <p>{t("partner_page.LARK_d")}</p>
                </div>

                <div className="4x1--item3">
                  <div className="c-txt-punchline--sm">{t("partner_page.LENT")}</div>
                  <div className="short-border" />
                  <p>{t("partner_page.LENT_d")}</p>
                </div>

                <div className="4x1--item4">
                  <div className="c-txt-punchline--sm">{t("partner_page.PN")}</div>
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
        <section id="footer">
          <div className="c-section--pad-vh">
            <FooterContainer />
          </div>
        </section>
      </div>
  );
}
