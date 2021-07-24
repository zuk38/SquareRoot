import React, { Component } from "react";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";

export default class SingleConcept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
    };
  }

  static contextType = ConceptContext;

  render() {
    const { getConcept } = this.context;
    const concept = getConcept(this.state.name);
    console.log(concept)

    if (!concept) {
      return (
        <div className="error">
          <h3> no such concept could be found...</h3>
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </div>
      );
    }

    const { name, image, description } = concept;

    return <div></div>;
  }
}
