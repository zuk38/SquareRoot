import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error(props) {
  return (
    <Hero>
      <Banner title="Oops... We didn't find what you were looking for">
        <button
          class="button is-light front-btn-2"
          onClick={() => props.history.push("/")}
        >
          Return home
        </button>
      </Banner>
    </Hero>
  );
}
