import React, {useEffect} from "react";
import "../../styles/frontpages.css";
import { Trans, useTranslation } from "react-i18next";
import {
  Wrapper,
  Column,
  Row,
  IamgeContainer,
  Image,
  Name,
  Position,
  Description,
  RowStretch, ColumnFlex,
} from "../../styles/Who";
import {FooterContainer} from "../../components/footer/FooterContainer";

export default function Who() {
  const { t } = useTranslation();

  return (
      <div className="front-container">
        <div className="c-section background-grey">
          <div className="o-container">
            <div className="c-hero">
              <h1 className="c-txt--hero">{t("who_page.title")}</h1>
              <div className="short-border u-mrg--txt1"></div>
              <p className="main-punchline--p">
                <Trans i18nKey="who_page.description">
                  Looking for plants to create amazing and resilient urban green areas? Unsure about compliance and
                  availability of these plants? SquareRoot is there to solve this for you!
                  <br />
                  <br />
                  Here you can find and choose plants adapted to your project and requirements either by using filters on
                  our database or choosing from our plant packages that are specially suited for certain functionalities
                  and green space types. In collaboration with local plant nurseries we make sure the plants you select
                  will be available .
                  <br />
                  <br />
                  Our goal is to make it easier to integrate locally produced plants and plants of local origin into urban
                  green spaces. Our starting point is the assortment of plants available at local plant nurseries,
                  and we are also helping the producers adapt to the demand that is constantly evolving.
                  <br />
                  <br />
                  Together we will green our cities!
                  <br />
                </Trans>
              </p>
            </div>

            <Wrapper>
              <h3 >
                <Trans i18nKey="who_page.team.title">
                 The Roots
                </Trans>
              </h3>
              <RowStretch>
                <ColumnFlex>
                  <IamgeContainer>
                    <Image src="../images/michel-profile.jpeg" alt="Michel" />
                  </IamgeContainer>
                  <Name>Michel Wolfstirn</Name>
                  <Position>{t("who_page.team.michel_img_d")}</Position>
                  <Description>
                    <Trans i18nKey="who_page.team.michel_d">
                      A lover of nature and the outdoors,
                      <em>Michel</em>
                      is passionate about the environment and contributing to
                      solving climate change.
                      <br />
                      <br />
                      Priori to SquareRoot he co-founded BiomimicryNorway, an NGO
                      dedicated to educating people and companies about sustainable
                      innovation inspired by nature. He has spent a great deal of energy
                      helping various startups and initiatives in the past years using
                      his many skills ranging from design to business modelling for Circular Economy.
                    </Trans>
                  </Description>
                </ColumnFlex>
                <ColumnFlex>
                  <IamgeContainer>
                    <Image src="../images/marie.jpg" alt="Marie" />
                  </IamgeContainer>
                  <Name>Marie Patenère</Name>
                  <Position>{t("who_page.team.marie_img_d")}</Position>
                  <Description>
                    <Trans i18nKey="who_page.team.marie_d">
                      A citizen of the world and animal enthusiast who loves an indoor and outdoor jungle. Marie is committed to people and the environment and has extensive experience in project management.
                      <br />
                      <br />
                      Contributing to a low-carbon economy is dear to Marie. She has several areas of interest and expertise going from nature preservation, circular economy,
                      social entrepreneurship and animal welfare.
                      <br />
                      <br />
                      These led her to create Lille Åsen Skogshage where she is
                      currently testing out her passion for nature by creating a big edible forest adapted to the norwegian climate.
                    </Trans>
                  </Description>
                </ColumnFlex>
                <ColumnFlex>
                  <IamgeContainer>
                    <Image src="../images/greg.jpg" alt="Greg" />
                  </IamgeContainer>
                  <Name>Gégoire Jan </Name>
                  <Position>{t("who_page.team.greg_img_d")}</Position>
                  <Description>
                    <Trans i18nKey="who_page.team.greg_d">
                      Greg is a technology enthusiast who wants to keep focus on sustainability.
                      <br/>
                      <br/>
                      SquareRoot gives him the chance to combine those two to have a positive impact on our society. His core competencies revolve around data analysis, machine learning and cloud technologies. He puts emphasis on automated processes, reliable delivery and extracting insights that give value.
                    </Trans>
                  </Description>
                </ColumnFlex>
              </RowStretch>
              <h3>
                <Trans i18nKey="who_page.team.support">
                  We are so grateful they helped us build SquareRoot:
                </Trans>
              </h3>
              <Row>
                <Column>
                  <IamgeContainer square>
                    <Image src="../images/karolina.jpg" alt="Karolina" />
                  </IamgeContainer>
                  <Name>Karolina Maciejewska</Name>
                  <Position>{t("who_page.team.karolina_img_d")}</Position>
                  <Description>
                    <Trans i18nKey="who_page.team.karolina_d">
                      The undefeated champion of shilly-shally, eating veggie
                      burgers and having too many ideas at once, <em>Karolina</em>
                      , always aims at perfection. SquareRoot gave her a chance
                      for following her passion and working towards a meaningful
                      purpose that starts a positive change in the world we live
                      in.
                      <br />
                      <br />
                      Apart from pursuing an engineering degree in IT and loving
                      to look through everyone's data she enjoys a good workout -
                      or a good book - out in the nature.
                    </Trans>
                  </Description>
                </Column>
                <Column>
                  <IamgeContainer square>
                    <Image src="../images/profile-gro.jpeg" alt="Gro" />
                  </IamgeContainer>
                  <Name>Gro Elisabeth Oleivsgard</Name>
                  <Position>{t("who_page.team.gro_img_d")}</Position>
                  <Description>
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
                  </Description>
                </Column>
              </Row>
              <Row>
                <Column>
                  <IamgeContainer square>
                    <Image src="../images/profile-kristian.jpg" alt="Kristian" />
                  </IamgeContainer>
                  <Name>Kristian Sørum</Name>
                  <Position>{t("who_page.team.kristian_img_d")}</Position>
                  <Description>
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
                  </Description>
                </Column>
                <Column>
                  <IamgeContainer square>
                    <Image src="../images/profile-sanne.png" alt="Sanne" />
                  </IamgeContainer>
                  <Name>Sanne Edland</Name>
                  <Position>{t("who_page.team.sanne_img_d")}</Position>
                  <Description>
                    <Trans i18nKey="who_page.team.sanne_d">
                      <em>Sanne</em> is passionate about the environment and
                      animals and wants to create a more sustainable way of
                      living. She joined Squareroot to contribute to a greener
                      future with our ecological solution.
                      <br />
                      <br />
                      She enjoys being near the ocean with good company and
                      delicious food. She is finishing her last year of her
                      bachelor degree in Applied Computer Science at Oslo
                      Metropolitan University.
                    </Trans>
                  </Description>
                </Column>
              </Row>
            </Wrapper>

            {/*
            <div className="c-grid--2x3">
              <div className="grid-item1">
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

                <p className="c-txt-punchline--sm">
                  <Trans i18nKey="who_page.team.jo_d1">
                    <em>Jo</em>
                    started his career in international business development for
                    large energy companies focusing on climate mitigation,
                    environmental policies and investment in low carbon emitting
                    technologies.
                  </Trans>
                </p>
                <p>{t("who_page.team.jo_d2")}</p>
                <p>{t("who_page.team.jo_d3")}</p>
              </div>

              <div className="grid-item3">
                <img
                  className="u-mrg-img3"
                  src="../images/michel-profile.jpeg"
                  alt="Michel"
                />
                <p className="u-mrg-txt1">
                  <strong>Michel Wolfstirn</strong>
                  <br />
                  {t("who_page.team.michel_img_d")}
                </p>

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


              <div className="grid-item2 karolina-is-3">
                <img
                  className="u-mrg-img1"
                  src="../images/karolina.jpg"
                  alt="Karolina"
                />
                <p className="u-mrg-txt1">
                  <strong>Karolina Maciejewska</strong>
                  <br />
                  {t("who_page.team.karolina_img_d")}
                </p>
                <p>
                  <Trans i18nKey="who_page.team.karolina_d">
                    The undefeated champion of shilly-shally, eating veggie
                    burgers and having too many ideas at once, <em>Karolina</em>
                    , always aims at perfection. SquareRoot gave her a chance for
                    following her passion and working towards a meaningful purpose
                    that starts a positive change in the world we live in.
                    <br />
                    <br />
                    Apart from pursuing an engineering degree in IT and loving to
                    look through everyone's data she enjoys a good workout - or a
                    good book - out in the nature.
                  </Trans>
                </p>
              </div>

              <div className="grid-item4 gro-is-4">
                <img
                  className="u-mrg-img1"
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
                    Motivated to contribute and solve problems of value to people
                    and the earth we live on, <em>Gro</em> joined SquareRoot with
                    a motivation to make the implementations of green spaces in
                    urban locations more available to all stakeholders.
                    <br />
                    <br />
                    She has previously studied Psychology and Applied Computer
                    Science, and is currently a Computer Engineering student at
                    OsloMet.
                    <br /> She enjoys being active in nature, as well as with yoga
                    and martial arts.
                  </Trans>
                </p>
              </div>


              <div className="grid-item5 kristian-is-5">
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
                    around, where you can find him far up in the steep mountains.
                  </Trans>
                </p>
              </div>


              <div className="grid-item6 sanne-is-6">
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
                    <em>Sanne</em> is passionate about the environment and animals
                    and wants to create a more sustainable way of living. She
                    joined Squareroot to contribute to a greener future with our
                    ecological solution.
                    <br />
                    <br />
                    She enjoys being near the ocean with good company and
                    delicious food. She is finishing her last year of her bachelor
                    degree in Applied Computer Science at Oslo Metropolitan
                    University.
                  </Trans>
                </p>
            </div>
            </div>*/}
          </div>
        </div>
        <section id="footer">
          <div className="c-section--pad-vh background-grey">
            <FooterContainer />
          </div>
        </section>
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
     </div>
  );
}
