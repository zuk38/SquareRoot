import React from "react";
import ContactForm from "../../components/ContactForm";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="c-section">
      <div className="o-container">
        <div className="c-hero">
          <h1 className="c-txt--hero">Kontakt oss</h1>
          <p className="c-txt--hero-p">Hvordan kan vi hjelpe deg?</p>
        </div>
      </div>

      <div className="c-section">
        <div className="o-container">
          <div className="c-grid--2x1">
            <div>
              <div className="c-grid--3x3fixed">
                <div>
                  <h3 className="c-txt--h3">E-post</h3>
                  <p className="c-mrg--top-sm">michel@squareroot.cc</p>
                </div>

                <div>
                  <h3 className="c-txt--h3">Telefon</h3>
                  <p className="c-mrg--top-sm">925 57 654</p>
                </div>
                {/*
                <div>
                  <h3 className="c-txt--h3">Alt annet</h3>
                  <p className="c-mrg--top-sm">contact@squareroot.cc</p>
                </div>
                */}
              </div>

              <Link
                to={{ pathname: "/projects", state: { modalOpen: true } }}
                className="o-btn c-mrg--top/3"
              >
                Start prosjekt
              </Link>

              <div className="c-splitlines">
                <h2 className="c-splitlines--h2">
                  <span>eller</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="o-container u-mrg--reset">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
