import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

async function addContact() {
  //create request body
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    },
  };
  console.log(data);
  //call the API gateway
  const apiData = await API.post("contactFormApi", "/contact", data);
  console.log({ apiData });
  alert("Mail sent!");
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

//zipcode
const zipState = { zipCode: "", city: "", hZone: "" };
const findCityFromZip = async () => {
  console.log(zipState.zipCode);

  const response = await fetch(
    new URL(
      "https://api.bring.com/pickuppoint/api/postalCode/NO/getCityAndType/1337.json"
    ),
    {
      method: "get",
      headers: {
        "X-MyBring-API-Uid": "kmaciejewska14@gmail.com",
        "X-MyBring-API-Key": "d61c0e32-3f40-4b0c-addf-84929228aed0",
        "X-Bring-Client-URL": "https://localhost:3000/",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
      },
    }
  )
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    })
    .catch((error) => console.log(error));

  console.log(response);
};

//contact form
const formState = { name: "", email: "", message: "" };

//forms management - respond to changes in input fields
function updateFormState(key, value, form) {
  form[key] = value;
}

export default function Home(props) {
  return (
    <div>
      <Hero>
        <Banner
          title="Plants of your dreams"
          subtitle="Design your greens inside, outside and on top of buildings."
        >
          <Link to="/plants" className="btn-primary">
            Our Plants
          </Link>
        </Banner>
        <br></br>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your Zip Code"
              onChange={(e) =>
                updateFormState("zipCode", e.target.value, zipState)
              }
            />
          </div>
          <div class="control">
            <a class="button is-info" onClick={findCityFromZip}>
              <span class="icon is-small">
                <i class="fas fa-arrow-circle-right fa-lg"></i>
              </span>
            </a>
          </div>
        </div>
      </Hero>
      <section className="section">
        <Container>
          <div>
            <h3>Get in touch</h3>
            <br />
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  onChange={(e) =>
                    updateFormState("name", e.target.value, formState)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Email"
                  onChange={(e) =>
                    updateFormState("email", e.target.value, formState)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  placeholder="Message"
                  onChange={(e) =>
                    updateFormState("message", e.target.value, formState)
                  }
                />
              </Form.Group>
              <Button onClick={addContact}>Send a message</Button>
            </Form>
          </div>
        </Container>
      </section>
    </div>
  );
}
