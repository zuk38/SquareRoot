import React from "react";
import ContactForm from "../../components/ContactForm";
import "../../styles/Partner.css";

export default function Partner(props) {
  return (
    <>
      <div className="o-container">
        <div className="c-hero">
          <h1 className="c-txt--hero">Bli partner</h1>

          <div className="c-mrg--bottom"></div>

          <div className="c-grid--2x1">
            <div className="grid-item3 margin-left">
              <img src="../images/partner.jpg" className="c-img flip-img" />
            </div>

            <div className="grid-item1">
              <div className="c-txt-punchline--sm">
                <h2 className="c-txt-punchline--sm">
                  Sammen gjør vi byene våres grønne.
                </h2>
                Vi ønsker å samarbeide med alle aktører i planleggingen og
                utformingen av urbane grøntområder. Dette er for at vi kan gjøre
                arbeidsprosessen sømløs slik at du kan lage og vedlikeholde
                motstandsdyktige grøntområder.
                <br />
                <br />
                Vi ønsker å samarbeide med alle aktører i planleggingen og
                utformingen av urbane grøntområder. Dette er for at vi kan gjøre
                arbeidsprosessen sømløs slik at du kan lage og vedlikeholde
                motstandsdyktige grøntområder.
              </div>
            </div>
          </div>

          <div className="o-container--lrg background-grey">
            <div className="c-grid--4x1">
              <div className="grid-item1">
                <div className="c-txt-punchline--sm">Real Estate Developer</div>
                <div className="short-border"></div>
                <p>See the concepts that will green you building</p>
              </div>

              <div className="grid-item3">
                <div className="c-txt-punchline--sm">Landscape Architect</div>

                <div className="short-border"></div>
                <p>See what is available and make your own amazing project</p>
              </div>

              <div className="grid-item9">
                <div className="c-txt-punchline--sm">
                  Landscape Entrepreneur
                </div>
                <div className="short-border"></div>
                <p>Order the right plant for the right spot on our platform</p>
              </div>

              <div className="grid-item11">
                <div className="c-txt-punchline--sm">Plant nursery</div>
                <div className="short-border"></div>
                <p>Show and sell your plants on our platform</p>
              </div>
            </div>
          </div>
          <div className="c-section c-section--cta background-grey">
            <div className="o-container">
              <h2 className="c-txt-sectiontitle--sm u-txt--center">
                Ta kontakt for en uforpliktende samtale
              </h2>
              <div className="u-txt--center">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
