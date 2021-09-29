import React from "react";
import "../../styles/frontpages.css";
import { Trans, useTranslation } from "react-i18next";

export default function Who() {
  const { t } = useTranslation();

  return (
    <>
      <div className="c-section background-grey">
        <div className="o-container">
          <div className="c-hero">
            <h1 className="c-txt--hero">{t("who_page.title")}</h1>
            <div className="short-border u-mrg--txt1"></div>
            <p className="main-punchline--p">
              <Trans i18nKey="who_page.description">
                Looking for plants to create amazing and resilient urban green
                areas? Unsure about compliance and availability of these plants?
                SquareRoot is there to solve this for you!
                <br />
                <br />
                Here you can choose a project type, pick a look for your space,
                decide the functionality focus and customize the plant list we
                suggest for you. We make sure the plants fit your requirements
                and will be available.
                <br />
                <br />
                Together we will green our cities!
                <br />
              </Trans>
            </p>
          </div>

          {/* A WORD FROM FOUNDERS*/}
          <div className="c-section">
            <div className="c-container u-mrg--reset">
              <p className="c-txt--punchline">{t("who_page.team.title")}</p>
              <div className="c-grid--founders">
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/jo-profil.jpeg"
                    alt="Jo"
                  />
                  <p className="u-mrg-txt1">
                    <strong>Jo Deketelaere</strong>
                    <br />
                    {t("who_page.team.jo_img_d")}
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    <Trans i18nKey="who_page.team.jo_d1">
                      <em>Jo</em>
                      started his career in international business development
                      for large energy companies focusing on climate mitigation,
                      environmental policies and investment in low carbon
                      emitting technologies.
                    </Trans>
                  </p>
                  <p>{t("who_page.team.jo_d2")}</p>
                  <p>{t("who_page.team.jo_d3")}</p>
                </div>

                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/michel-profile.jpeg"
                    alt="Michel"
                  />
                  <p className="u-mrg-txt1">
                    <strong>Michel Wolfstirn</strong>
                    <br />
                    {t("who_page.team.michel_img_d")}
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    <Trans i18nKey="who_page.team.michel_d1">
                      A lover of nature and the outdoors,
                      <em>Michel</em>
                      is passionate about the environment and contributing to
                      solving climate change.
                    </Trans>
                  </p>
                  <p>{t("who_page.team.michel_d2")}</p>
                  <p>{t("who_page.team.michel_d3")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-section">
            <div className="c-grid--2x2">
              <div className="grid-item1">
                <img
                  className="c-img--portrait"
                  src="../images/missing-img.jpg"
                  alt="Karolina"
                />
                <p className="u-mrg-txt1">
                  <strong>Karolina Maciejewska</strong>
                  <br />
                  {t("who_page.team.karolina_img_d")}
                </p>

                <p>
                  <Trans i18nKey="who_page.team.karolina_d">
                    Motivated to contribute and solve problems of value to
                    people and the earth we live on, <em>Karolina</em> joined
                    SquareRoot with a motivation to make the implementations of
                    green spaces in urban locations more available to all
                    stakeholders.
                    <br />
                    <br />
                    She has previously studied Psychology and Applied Computer
                    Science, and is currently a Computer Engineering student at
                    OsloMet.
                    <br /> She enjoys being active in nature, as well as with
                    yoga and martial arts.
                  </Trans>
                </p>
              </div>

              <div className="grid-item3">
                <img
                  className="c-img--portrait"
                  src="../images/profile-gro.jpeg"
                  alt="Gro"
                />
                <p className="u-mrg-txt1">
                  <strong>Gro Elisabeth Oleivsgard</strong>
                  <br />
                  {t("who_page.team.gro_img_d")}
                </p>

                <p>
                  <Trans i18nKey="who_page.team.gro_d">
                    Motivated to contribute and solve problems of value to
                    people and the earth we live on, <em>Gro</em> joined
                    SquareRoot with a motivation to make the implementations of
                    green spaces in urban locations more available to all
                    stakeholders.
                    <br />
                    <br />
                    She has previously studied Psychology and Applied Computer
                    Science, and is currently a Computer Engineering student at
                    OsloMet.
                    <br /> She enjoys being active in nature, as well as with
                    yoga and martial arts.
                  </Trans>
                </p>
              </div>

              <div className="grid-item2">
                <img
                  className="u-mrg-img1"
                  src="../images/profile-kristian.jpg"
                  alt="Kristian"
                />
                <p className="u-mrg-txt1">
                  <strong>Kristian Sørum</strong>
                  <br />
                  {t("who_page.team.kristian_img_d")}
                </p>
                <p>
                  <Trans i18nKey="who_page.team.kristian_d">
                    With us as an intern, <em>Kristian</em> is motivated to make
                    our platform as user-friendly and self-driven as possible,
                    which in turn will hopefully make the process of including
                    green spaces in our cities a simple task.
                    <br />
                    <br />
                    He is an aspiring Software Developer, currently a Computer
                    Engineering student at OsloMet. <br />
                    Apart from his studies, he enjoys being in the outdoors year
                    around, where you can find him far up in the steep
                    mountains.
                  </Trans>
                </p>
              </div>

              <div className="grid-item4">
                <img
                  className="u-mrg-img1"
                  src="../images/profile-sanne.png"
                  alt="Sanne"
                />
                <p className="u-mrg-txt1">
                  <strong>Sanne Edland</strong>
                  <br />
                  {t("who_page.team.sanne_img_d")}
                </p>

                <p>
                  <Trans i18nKey="who_page.team.sanne_d">
                    Motivated to contribute and solve problems of value to
                    people and the earth we live on, <em>Sanne</em> joined
                    SquareRoot with a motivation to make the implementations of
                    green spaces in urban locations more available to all
                    stakeholders.
                    <br />
                    <br />
                    She has previously studied Psychology and Applied Computer
                    Science, and is currently a Computer Engineering student at
                    OsloMet.
                    <br /> She enjoys being active in nature, as well as with
                    yoga and martial arts.
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHY US 
      <div className="c-section background-grey">
        <div className="o-container ">
          <p className="c-txt-punchline--sm">
            <strong>Hvorfor oss? </strong>
            Vi har knyttet alle aktører til samme plattform slik at vi sammen
            kan gjøre det enklere å velge grønt.
            <br />
            <br />
            Vi baserer databasen vår på forskningsbaserte resultater for å finne
            de beste plantene for riktig sted. Dette knyttes til lovgivninger,
            miljøsertifiseringer og økonomiske insentiver, og sørger dermed for
            at du velger et motstandsyktig, bærekraftig og økonomisk
            grøntområde. Vi samarbeider med planteskoler slik at forsyningen av
            planter holder tritt med etterspørselen, slik at din bedrift mottar
            bestillingen i tide med de rette plantene.
            <br />
            <br />
            Vi forstår at slike prosesser kan innebære endringer grunnet ulike
            faktorer. For at denne prosessen skal forbli sømløs er det enkelt å
            kontinuerlige endre og oppdatere prosjektet ditt.
          </p>
        </div>
      </div>
      */}
      {/* 'ROOT PROJECTS 
      <div className="c-section">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle">'Root-prosjekter</h2>
          <p className="c-txt--punchline">Sammen utvikler vi grønne byrom.</p>
          <FeaturedConcepts />
        </div>
      </div>
      */}
      {/* CONTACT FOR PROJECT
      <div className="c-section c-section--cta background-grey">
        <div className="o-container">
          <h2 className="c-txt-sectiontitle--sm u-txt--center">
            Vi vil gjerne være en del av landskapsplanleggingen din!
          </h2>
          <h3 className="c-txt-punchline--sm u-txt--center">
            Ta kontakt og fortell oss hva du ønsker.
          </h3>
          <Link
            to={{ pathname: "/projects", state: { modalOpen: true } }}
            className="o-btn c-mrg--top/3"
          >
            Start prosjekt
          </Link>
        </div>
      </div>
      {/*

      <div class="float-container">
        <div class="float-child">
          <div className="why">
            <h1 className="why-h1">HVORFOR SquareRoot?</h1>
            <p className="why-desc">
              Well designed urban green spaces are a powerful climate
              adaptation. They improve life quality, minimise risk of floods,
              improve water and air quality, regulate temperature, support
              biodiversity and increase the valuation of nearby property.
            </p>
          </div>
        </div>
        <div class="float-child">
          <img src="../images/flowers-unsplash.jpeg" className="why-image" alt="?"></img>
        </div>
      </div>


            <div className="why-reasons">
                <h2 className="five-reasons">5 good reasons to choose green spaces</h2>
                <h3 className="reasons">1. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
                <h3 className="reasons">3. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
                <h3 className="reasons">4. Address</h3>
                <p>
                    By simply entering their address on our platform, we make tailored
                              offers for the right plant for the right spot and concepts such as
                              roof gardens, rain beds to manage heavy rainfall and plants to
                              increase biodiversity.
                </p>
                <h3 className="reasons">5. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
            </div>
            <h2 className="why-inspo">Inspirational projects</h2>
            <p className="why-inspo-desc">
                We are doing this by making the implementation of urban green spaces
                        outside, inside and on top of buildings easy, cheaper, and available
                        everywhere.
            </p>
            <div className="inspo-images">
                <div className="inspo-image1">
                    <img src="../images/plantbed.png" alt="Project 1"></img>
                    <h className="inspo-h">Project 1</h>
                </div>
                <div className="inspo-image1">
                    <img src="../images/plantbed.png" alt="Project 2"></img>
                    <h className="inspo-h">Project 2</h>
                </div>
            </div>
             */}{" "}
    </>
  );
}
