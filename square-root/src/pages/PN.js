import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPlant, createPlantMetadata } from "../api/mutations";
import config from "../aws-exports";
import Error from "./Error";
import Amplify, { Auth } from "aws-amplify";

Amplify.configure(config);
Auth.configure(config);

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const PN = () => {
  //check if it is pn
  const [isPN, updatePNInfo] = useState(false);
  useEffect(() => {
    // Get the AWS credentials for the current user from Identity Pools.
    Auth.currentSession()
      .then((cognitoUser) => {
        const {
          idToken: { payload },
        } = cognitoUser;
        // Loop through the groups that the user is a member of PNs group
        payload["cognito:groups"] &&
          payload["cognito:groups"].forEach((group) => {
            if (group === "PNs") updatePNInfo(true);
          });
      })
      .catch((err) => console.log(err));
  }, []);
  //

  const [image, setImage] = useState(null);
  const [plantDetails, setPlantDetails] = useState({
    id: "",
    latin_name: "",
    norwegian_name: "",
    type: "",
    image: "",
    native: false,
    norwegian_nursery: false,
    size_in_cm: 0,
    climate_zone: "",
    pollinator_friendly: false,
    edible: false,
    rain_garden: false,
    pet_kids_friendly: false,
    air_puryfying: false,
    sun_seeker: false,
  });

  let metadata_id = uuidv4();
  useEffect(() => {
    setPlantDetails({ id: metadata_id });
  }, []);

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      if (!plantDetails.latin_name || !plantDetails.norwegian_name) return;
      console.log(plantDetails);
      await API.graphql(
        graphqlOperation(createPlantMetadata, { input: plantDetails })
      );
      let plant = {
        metadataID: plantDetails.id,
      };
      await API.graphql(graphqlOperation(createPlant, { input: plant }));
      setPlantDetails({
        latin_name: "",
        norwegian_name: "",
        type: "",
        image: "",
        native: false,
        norwegian_nursery: false,
        size_in_cm: 0,
        climate_zone: "",
        pollinator_friendly: false,
        edible: false,
        rain_garden: false,
        pet_kids_friendly: false,
        air_puryfying: false,
        sun_seeker: false,
      });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/plants/${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setPlantDetails({ ...plantDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };

  if (!isPN) {
    return <Error />;
  }

  return (
    <section className="admin-wrapper">
      <section>
        <header className="form-header">
          <h3>Add New Plant</h3>
        </header>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-image">
            {image ? (
              <img className="image-preview" src={image} alt="" />
            ) : (
              <input type="file" onChange={(e) => handleImageUpload(e)} />
            )}
          </div>
          <div className="form-fields">
            <div className="name-form">
              <p>
                <label htmlFor="name">Norwegian Name</label>
              </p>
              <p>
                <input
                  name="name"
                  type="title"
                  placeholder="Type the norwegian name"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      norwegian_name: e.target.value,
                    })
                  }
                  required
                />
              </p>
            </div>
            <div className="name-form">
              <p>
                <label htmlFor="name">Latin Name</label>
              </p>
              <p>
                <input
                  name="name"
                  type="title"
                  placeholder="Type the latin name"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      latin_name: e.target.value,
                    })
                  }
                  required
                />
              </p>
            </div>
            <div className="pollinator-form">
              <p>
                <label htmlFor="pollinator">Type</label>
              </p>
              <p>
                <select
                  name="pollinators"
                  id="pollinators"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      type: e.target.value,
                    })
                  }
                  required
                >
                  <option value="potted" selected>potted</option>
                  <option value="grass">grass</option>
                  <option value="berry">berry</option>
                  <option value="bush">bush</option>
                  <option value="perennial">perennial</option>
                  <option value="fern">fern</option>
                  <option value="herb">herb</option>
                </select>
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Norwegian Nursery?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.norwegian_nursery}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      norwegian_nursery: !plantDetails.norwegian_nursery,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Native?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.native}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      native: !plantDetails.native,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Pollinator Friendly?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.pollinator_friendly}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      pollinator_friendly: !plantDetails.pollinator_friendly,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Edible?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.edible}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      edible: !plantDetails.edible,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Rain Garden?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.rain_garden}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      rain_garden: !plantDetails.rain_garden,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Pets and kids friendly?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.pet_kids_friendly}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      pet_kids_friendly: !plantDetails.pet_kids_friendly,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Sun seeker?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.sun_seeker}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      sun_seeker: !plantDetails.sun_seeker,
                    })
                  }
                />
              </p>
            </div>
            <div className="featured-form">
              <p>
                <label>Air puryfying?</label>
                <input
                  type="checkbox"
                  className="featured-checkbox"
                  checked={plantDetails.air_puryfying}
                  onChange={() =>
                    setPlantDetails({
                      ...plantDetails,
                      air_puryfying: !plantDetails.air_puryfying,
                    })
                  }
                />
              </p>
            </div>
            <div className="size-form">
              <p>
                <label htmlFor="price">Height (cm)</label>
                <input
                  name="height"
                  type="text"
                  placeholder="What is the size of the plant (cm)"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      size_in_cm: e.target.value,
                    })
                  }
                />
              </p>
            </div>
            <div className="size-form">
              <p>
                <label htmlFor="climate">climate zone</label>
                <input
                  name="climate"
                  type="text"
                  placeholder="What is the climate zone of the plant"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      climate_zone: e.target.value,
                    })
                  }
                />
              </p>
            </div>
            <div className="submit-form">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default PN;