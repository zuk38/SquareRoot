import React from "react";
import "../../styles/frontpages.css";
import ScrollGrid from "../../components/ScrollGrid";
import { withConceptConsumer } from "../../context/concepts";
import Loading from "../../components/Loading"

function Categories({ context }) {
  let { loadCat, categories } = context;

  if (loadCat) return <Loading />;

  return (
    <div>
      <ScrollGrid title="Grøntområder" categories={categories} />
    </div>
  );
}

export default withConceptConsumer(Categories);
