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
    let translationName = name;
    if (name === "rooftop") name = "roof gardens";

    name = name.charAt(0).toUpperCase() + name.slice(1);
    translationName =
      translationName.charAt(0).toUpperCase() + translationName.slice(1);
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
    ))(() => ({
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
      "font-size": "18px",
      "font-weight": "bold",
      "line-height": "1.8",
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
      <>
        <div className="o-container">
          <div className="c-hero">
            <div className="c-grid--2x1">
              <div className="grid-item4 margin-left">
                <img
                  src={`../images/${translationName.toLowerCase()}.jpg`}
                  className="c-img"
                  alt={category_name}
                />
              </div>

              <div className="grid-item0">
                <h1 className="c-txt--hero">
                  {t(`single_category.${translationName}.title`)}
                </h1>
              </div>
              <div className="grid-item2">
                <div className="c-txt-punchline--sm">
                  <br />
                  <Trans
                    i18nKey={`single_category.${category_name}.description`}
                  >
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
                    On our platform, you will be able to put together concepts
                    in a project and order it through our website. <br /> <br />
                    The plantlist is countinously updated.
                  </Trans>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="plantlist-container">
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              {t("single_category.plant_list")}
            </AccordionSummary>
            <AccordionDetails>
              <div className="plantlist">
                {plants.map((plant) => (
                  <div key={plant.norwegian_name} className="names-row">
                    {plant.norwegian_name && (
                      <div className="norwegian-name">
                        {plant.norwegian_name}
                      </div>
                    )}
                    {plant.latin_name && (
                      <div className="latin-name">{plant.latin_name}</div>
                    )}
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </>
    );
  }
}
export default withTranslation()(SingleCategory);
