import React, { Component } from "react";
import { ConceptContext } from "../context/concepts";
import Concept from "./Concept"
import Loading from "./Loading"

export default class FeaturedConcepts extends Component {
  static contextType = ConceptContext;

  render() {
    let {loading, featuredConcepts : concepts} = this.context;
    concepts = concepts.map((concept) => {
      return <Concept key={concept.id} concept={concept} />
    })

    return <section className="featured-greenspaces">
      <div className="featured-rooms-center">
        {loading ? <Loading/> : concepts}
      </div>
    </section>;
  }
}

/*

function HeroSection() {
  return (
    <>
      <div className="imagebox">
        <img src="../images/rooftop.png" className="image"></img>
        <span className="span-imagebox">
          <h1 className="h1">ROOFTOP</h1>
          <p>
            Text explaining why rooftops are good and why the customers should
            have rooftop gardens.
          </p>
          <div className="hero-btns">
            <button class="button is-light">LEARN MORE</button>
            <button class="button is-dark">
              ADD TO PROJECT
              <i class="fas fa-chevron-right" />
            </button>
          </div>
        </span>
      </div>

      <div className="imagebox">
        <img src="../images/rainbeds.png" className="image"></img>
        <span className="span-imagebox">
          <h1 className="h1">RAINBEDS</h1>
          <p>
            Text explaining why rainbeds are good and why the customers should
            have rainbeds and more.
          </p>
          <div className="hero-btns">
            <div className="hero-btns">
              <button class="button is-light">LEARN MORE</button>
              <button class="button is-dark">
                ADD TO PROJECT
                <i class="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </span>
      </div>
      <div className="imagebox">
        <img src="../images/biodiversity.png" className="image"></img>
        <span className="span-imagebox">
          <h1 className="h1">BIODIVERSITY</h1>
          <p>
            Text explaining why biodiversity are good and why the customers
            should have it.
          </p>
          <div className="hero-btns">
            <div className="hero-btns">
              <button class="button is-light">LEARN MORE</button>
              <button class="button is-dark">
                ADD TO PROJECT
                <i class="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default HeroSection;*/
