import React from "react";
import "../../styles/frontpages.css";

export default function What() {
  return (
    <div>
      <div className="c-section background-grey">
        <div className="o-container">
          <div className="c-hero">
            <h1 className="c-txt--hero">Hva vi gjør</h1>
            <p className="c-txt--hero-p">
              Med vår plattform samler vi markedsaktører på ett sted slik at det
              blir enklere å utvikle bærekraftige byer.
              <br />
              <div className="c-mrg--bottom"></div>
              <h2 className="c-txt-punchline--sm c-mrg--top">
                Vi har et sterkt fokus på "de beste plantene for det rikige
                stedet" for prosjekter med urbane grøntområder med mange krav.
                Vårt utvalg av planter er forskningsbasert, og i samarbeid med
                arkitekturselskapene &nbsp;
                <a href="https://www.asplanviak.no">Asplan Viak</a>&nbsp;og
                &nbsp;
                <a href="https://edit.land/home">Edit Atelier</a>. Sammen
                utarbeider vi konsepter bestående av ulike plantearter som
                passer sammen i et gitt grøntareale, for eksempel på en
                takterrasse, eller for ønsket funksjonalitet, som
                overvannshåndtering.
              </h2>
              <br />
              <div className="c-grid--span">
                <div className="c-grid--span-item-a">
                  <img
                    className="zoom-on-hover"
                    src="../images/portrait--indoor-wall.jpg"
                    alt="Indoor Wall"
                  />
                </div>
                <div className="c-grid--span-item-b">
                  <img
                    className="zoom-on-hover"
                    src="../images/rainbeds.png"
                    alt="Rainbeds"
                  />
                </div>
                <div className="c-grid--span-item-c">
                  <img
                    className="zoom-on-hover"
                    src="../images/netflix-hq.jpg"
                    alt="Netflix HQ"
                  />
                </div>
              </div>
              <h2 className="c-txt-punchline--sm c-mrg--top">
                På plattformen vår kan disse konseptene bli lagt inn i
                prosjekter du selv oppretter og administrer. Herfra kan du velge
                å redigere hvilke planter som skal være med i et konsept, eller
                bestille det "as is". Du kan også velge ut planter enkeltvis og
                utvikle et eget konsept. Vi håndterer deretter bestillingen din
                og tar oss av kommunikasjonen med ulike planteskoler, og kommer
                tilbake til deg med et prisestimat og leveransetid, og legger
                til slutt din bestilling inn hos planteskolene.
              </h2>
            </p>
          </div>
        </div>
      </div>

      <div className="c-section o-container background-white">
        <div className="c-grid--2x3">
          <div className="grid-item0 u-mrg--txt1">
            <h2 className="c-txt--sectiontitle u-mrg--txt4">Hva vi tilbyr</h2>
          </div>

          <div className="grid-item4 u-mrg--txt1">
            <h3 className="c-txt-sectiontitle--sm">Sømløs kommunikasjon</h3>
            <div className="u-mrg--reset c-mrg--top">
              <p className="c-txt-punchline--sm">description</p>
            </div>
          </div>
          <div className="grid-item2 u-mrg--txt1">
            <img
              className="attachment-company_into"
              src="../images/relaxation-character.jpg"
              alt="Relaxation character"
            />
          </div>

          <div className="grid-item5 u-mrg--txt1">
            <h3 className="c-txt-sectiontitle--sm">
              Enkel og rask tilgang til de riktige plantene
            </h3>
            <div className="u-mrg--reset c-mrg--top">
              <p className="c-txt-punchline--sm">description</p>
            </div>
          </div>
          <div className="grid-item6 u-mrg--txt1">
            <img
              className="attachment-company_into"
              src="../images/earth-plants.jpg"
              alt="Plants"
            />
          </div>

          <div className="grid-item8 u-mrg--txt1">
            <h3 className="c-txt-sectiontitle--sm">Tilpass etter dine behov</h3>
            <div className="u-mrg--reset c-mrg--top">
              <p className="c-txt-punchline--sm">description</p>
            </div>
          </div>
          <div className="grid-item7 u-mrg--txt1">
            <img
              className="attachment-company_into"
              src="../images/project-checklist.png"
              alt="Checklist"
            />
          </div>
        </div>
      </div>

      <div className="c-section background-grey">
        <div className="o-container u-mrg--txt4">
          <p className="c-txt--punchline">
            Det skal være enkelt å velge grønt.
          </p>
          Vi har knyttet alle aktører til samme plattform slik at vi sammen kan
          gjøre det enklere å velge grønt.
          <br />
          <br />
          Vi baserer databasen vår på forskningsbaserte resultater for å finne
          de beste plantene for riktig sted. Dette knyttes til lovgivninger,
          miljøsertifiseringer og økonomiske insentiver, og sørger dermed for at
          du velger et motstandsyktig, bærekraftig og økonomisk grøntområde. Vi
          samarbeider med planteskoler slik at forsyningen av planter holder
          tritt med etterspørselen, slik at din bedrift mottar bestillingen i
          tide med de rette plantene.
          <br />
          <br />
          Vi forstår at slike prosesser kan innebære endringer grunnet ulike
          faktorer. For at denne prosessen skal forbli sømløs er det enkelt å
          kontinuerlige endre og oppdatere prosjektet ditt.
        </div>
      </div>
    </div>
  );
}
