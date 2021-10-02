import React, { Component } from "react";
import "../../styles/frontpages.css";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";
import { Trans, withTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      isClicked: false,
    };
  }

  static contextType = ConceptContext;

  render() {
    const { getCategory } = this.context;
    let name = this.state.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const category = getCategory(name);

    const { t } = this.props;

    if (!category) {
      return (
        <div className="error">
          <h3>no such category could be found...</h3>
          <Link to="/categories" className="btn-primary">
            back to categories
          </Link>
        </div>
      );
    }

    const { category_name, plants } = category;

    const Accordion = styled((props) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      border: `1px solid #f7f7f7`,
      backgroundColor: "#f7f7f7",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
    }));

    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{ fontSize: "0.9rem", color: "#f7f7f7", fontWeight: "bold" }}
          />
        }
        {...props}
      />
    ))(({ theme }) => ({
      color: "#f7f7f7",
      backgroundColor: "#3e3d3d",
      flexDirection: "row-reverse",
      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
      },
      "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
      },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: "1px solid rgba(0, 0, 0, .125)",
    }));

    return (
      <div className="o-container">
        <div className="c-hero">
          <div className="c-grid--2x1">
            <div className="grid-item4 margin-left">
              <img
                src={`../images/${category_name}.jpg`}
                className="c-img"
                alt={category_name}
              />
            </div>

            <div className="grid-item0">
              <h1 className="c-txt--hero">
                {t(`single_category.${category_name}.title`)}
              </h1>
            </div>
            <div className="grid-item2">
              <div className="c-txt-punchline--sm">
                <br />
                <Trans i18nKey={`single_category.${category_name}.description`}>
                  Optimize your roof surface with one our concepts. <br />
                  <br />
                  Roofs can be used for energy production, stormwater
                  management, increase biodiversity or to create a space for
                  people to meet, relax and enjoy. <br />
                  <br />
                  Our concepts maximize these benefits and consider weight
                  restrictions of your roof using light weight rooftop soils.
                  Our plants and hardware are chosen and designed to meet your
                  specific needs.
                </Trans>
                <br />
                <br />
              </div>
              <div className="c-txt-punchline--sm">
                <Trans i18nKey="single_category.general_info">
                  On our platform, you will be able to put together concepts in
                  a project and order it through our website. <br/> <br/>The plantlist is
                  countinously updated.
                </Trans>
              </div>
            </div>
          </div>
          <div className="u-mrg--txt1"/>

          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div className="c-txt-punchline--sm">
                <strong>Planteliste</strong>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="plantlist c-mrg--top">
                {plants.map((plant, index) => (
                  <div
                    key={index}
                    className={
                      index % 2 ? "plantlist" : "plantlist margin-left"
                    }
                  >
                    {plant.norwegian_name && (
                      <div className="grid-item1">{plant.norwegian_name}</div>
                    )}
                    {plant.latin_name && (
                      <div className="grid-item1">{plant.latin_name}</div>
                    )}
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* PLANT LIST CONTAINER */}

          {/*<div className="o-container background-grey padding-sm">
            <div className="c-txt-punchline--sm">
              <strong>Planteliste</strong>
            </div>

            

           <div className="c-grid--2x2 c-mrg--top">
              {plants.map((plant, index) => (
                <div
                  key={index}
                  className={
                    index % 2 ? "c-grid--2x2" : "c-grid--2x2 margin-left"
                  }
                >
                  {plant.norwegian_name && <div className="grid-item1">{plant.norwegian_name}</div>}
                  {plant.latin_name && <div className="grid-item1">{plant.latin_name}</div>}
                </div>
              ))}

              {/* BUTTON 
              <div className="grid-item4  c-section--padding-top-24">
                <button
                  className="btn-transp float-right zoom-on-hover"
                  onClick={() =>
                    this.setState(
                      (prevState) => ({ isClicked: !prevState.isClicked }),
                      () => console.log(this.state)
                    )
                  }
                >
                  {!this.state.isClicked ? (
                    <div className="float-left">
                      Vis mer{" "}
                      <i className="fas fa-angle-down btn-icon bounce" />
                    </div>
                  ) : (
                    <div className="float-left">
                      Vis mindre <i className="fas fa-angle-up" />
                    </div>
                  )}
                </button>
              </div>
                  </div>
                  </div>*/}

          {/* END PLANT LIST CONTAINER */}

          {/*CONNECT TO DATABASE 
        <div className="c-section c-grid--2x1-equal">
        <div className="img-wrap">
          <img src={`../images/${category_name}.jpg`}/>
          <div className="img-descr">
                  <div className="c-txt-punchline--sm"><strong>Prosjektnavn</strong></div>
                  <p>Kort tekst om prosjektet.</p>
                  <p>Kunde: Tekna</p>
                  <p>BREEAM poeng: 10</p>
          </div>
          </div>
          <div className="img-wrap">
          <img src={`../images/${category_name}.jpg`}/>
          <div className="img-descr">
                  <div className="c-txt-punchline--sm"><strong>Prosjektnavn</strong></div>
                  <p>Kort tekst om prosjektet.</p>
                  <p>Kunde: Tekna</p>
                  <p>BREEAM poeng: 10</p>
          </div>
          </div>
          <div className="img-wrap">
          <img src={`../images/${category_name}.jpg`}/>
          <div className="img-descr">
                  <div className="c-txt-punchline--sm"><strong>Prosjektnavn</strong></div>
                  <p>Kort tekst om prosjektet.</p>
                  <p>Kunde: Tekna</p>
                  <p>BREEAM poeng: 10</p>
          </div>
          </div>
          <div className="img-wrap">
          <img src={`../images/${category_name}.jpg`}/>
          <div className="img-descr">
                  <div className="c-txt-punchline--sm"><strong>Prosjektnavn</strong></div>
                  <p>Kort tekst om prosjektet.</p>
                  <p>Kunde: Tekna</p>
                  <p>BREEAM poeng: 10</p>
          </div>
          </div>
                           
        </div>
        */}

          {/* ---- REMOVE ???? ------

        <h2 className="c-txt-punchline--sm c-mrg--top">{description}</h2>
        <br />

        <div className="c-grid--span">
          <div className="c-grid--span-item-a">
            <div className="c-txt-punchline--sm">
              <strong>Fordeler</strong>
              <br></br>Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </div>
          </div>

          <div className="c-grid--span-item-b background-grey">
            <div className="c-txt-punchline--sm padding-sm">
              <strong>Vedlikehold</strong>
              <br></br>Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC.
            </div>
          </div>

          <div className="c-grid--span-item-c">
            <img
              className="zoom-on-hover"
              src={`../images/${category_name}.jpg`}
              alt={category_name}
            />
          </div>
        </div>
        <h2 className="c-txt-punchline--sm c-mrg--top">
          På plattformen vår kan disse konseptene bli lagt inn i prosjekter du
          selv oppretter og administrer. Herfra kan du velge å redigere hvilke
          planter som skal være med i et konsept, eller bestille det "as is". Du
          kan også velge ut planter enkeltvis og utvikle et eget konsept. Vi
          håndterer deretter bestillingen din og tar oss av kommunikasjonen med
          ulike planteskoler, og kommer tilbake til deg med et prisestimat og
          leveransetid, og legger til slutt din bestilling inn hos
          planteskolene.
        </h2>
         */}
        </div>
      </div>
    );
  }
}
export default withTranslation()(SingleCategory);
