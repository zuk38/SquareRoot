import React from "react";
import ContactForm from "../../components/ContactForm";
import { useTranslation } from "react-i18next";
import {FooterContainer} from "../../components/footer/FooterContainer";

export default function Contact() {
  const { t } = useTranslation();

  return (
      <div className="front-container">
       <div className="c-section">
      <div className="o-container">
        <div className="c-hero">
          <h1 className="c-txt--hero">{t("contact_page.title")}</h1>
          <p className="c-txt--hero-p">{t("contact_page.subtitle")}</p>
        </div>
      </div>

      <div className="c-section">
        <div className="o-container">
          <div className="c-grid--2x1">
            <div>
              <div className="c-grid--3x3fixed">
                <div>
                  <h3 className="c-txt--h3">{t("contact_page.email")}</h3>
                  <p className="c-mrg--top-sm">michel@squareroot.cc</p>
                </div>

                <div>
                  <h3 className="c-txt--h3">{t("contact_page.phone")}</h3>
                  <p className="c-mrg--top-sm">925 57 654</p>
                </div>
                {/*
                <div>
                  <h3 className="c-txt--h3">Alt annet</h3>
                  <p className="c-mrg--top-sm">contact@squareroot.cc</p>
                </div>
                */}
              </div>
                
                {/** 
              <Link
                to={{ pathname: "/projects", state: { modalOpen: true } }}
                className="o-btn c-mrg--top/3"
              >
                {t("start")}
              </Link>
*/}
              <div className="c-splitlines">
                <h2 className="c-splitlines--h2">
                  <span>{t("contact_page.or")}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="o-container u-mrg--reset">
          <ContactForm title="send_message" title_classname="o-form__heading" subject="Contact from website"/>
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
