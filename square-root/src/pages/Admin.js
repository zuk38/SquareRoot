import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPlant } from "../api/mutations";
import config from "../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [plantDetails, setPlantDetails] = useState({
    name: "",
    price_per_meter: "",
    images: "",
    pollinator_friendly: "",
    light_requirement: "",
    watering_needs: "",
    soil_type: "",
    soil_depth: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!plantDetails.name || !plantDetails.price_per_meter) return;
      await API.graphql(graphqlOperation(createPlant, { input: plantDetails }));
      setPlantDetails({
        name: "",
        price_per_meter: "",
        images: "",
        pollinator_friendly: "",
        light_requirement: "",
        watering_needs: "",
        soil_type: "",
        soil_depth: 140,
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
    const key = `images/${uuidv4()}${name}.${extension}`;
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
      setPlantDetails({ ...plantDetails, images: url });
    } catch (err) {
      console.log(err);
    }
  };

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
                <label htmlFor="name">Name</label>
              </p>
              <p>
                <input
                  name="name"
                  type="title"
                  placeholder="Type the name"
                  onChange={(e) =>
                    setPlantDetails({ ...plantDetails, name: e.target.value })
                  }
                  required
                />
              </p>
            </div>
            <div className="pollinator-form">
              <p>
                <label htmlFor="pollinator">pollinator friendly</label>
              </p>
              <p>
                <select
                  name="pollinators"
                  id="pollinators"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      pollinator_friendly: e.target.value,
                    })
                  }
                  required
                >
                  <option value="volvo">no</option>
                  <option value="saab">bees</option>
                  <option value="mercedes">butterflies</option>
                </select>
              </p>
            </div>
            <div className="light-form">
              <p>
                <label htmlFor="light">light requirements</label>
              </p>
              <p>
                <select
                  name="light"
                  id="light"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      light_requirement: e.target.value,
                    })
                  }
                  required
                >
                  <option value="volvo">low</option>
                  <option value="saab">medium</option>
                  <option value="mercedes">high</option>
                </select>
              </p>
            </div>
            <div className="water-form">
              <p>
                <label htmlFor="water">watering needs</label>
              </p>
              <p>
                <select
                  name="water"
                  id="water"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      watering_needs: e.target.value,
                    })
                  }
                  required
                >
                  <option value="volvo">low</option>
                  <option value="saab">medium</option>
                  <option value="mercedes">high</option>
                </select>
              </p>
            </div>
            <div className="soil-form">
              <p>
                <label htmlFor="soil">soil type</label>
              </p>
              <p>
                <select
                  name="soil"
                  id="soil"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      soil_type: e.target.value,
                    })
                  }
                  required
                >
                  <option value="volvo">low</option>
                  <option value="saab">medium</option>
                  <option value="mercedes">high</option>
                </select>
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
            <div className="price-form">
              <p>
                <label htmlFor="price">Price per square meter (NOK)</label>
                <input
                  name="price"
                  type="text"
                  placeholder="What is the Price of the plant (NOK)"
                  onChange={(e) =>
                    setPlantDetails({
                      ...plantDetails,
                      price_per_meter: e.target.value,
                    })
                  }
                  required
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

export default Admin;
