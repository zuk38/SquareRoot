import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPlants } from "./api/queries";

const PlantContext = React.createContext();

const PlantProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlants,
        authMode: "API_KEY"
      });
      const plants = data.listPlants.items;
      const featured = plants.filter((plant) => {
        return !!plant.featured;
      });
      setPlants(plants);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlantContext.Provider value={{ plants, featured, loading }}>
      {children}
    </PlantContext.Provider>
  );
};

export { PlantContext, PlantProvider };