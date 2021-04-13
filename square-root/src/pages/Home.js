import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import HeroSection from '../HeroSection';

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
  console.log(process.env.REACT_APP_MYBRING_API);

  const response = await fetch(
    new URL(
      "https://api.bring.com/pickuppoint/api/postalCode/NO/getCityAndType/1337.json"
    ),
    {
      method: "get",
      headers: {
        "X-MyBring-API-Uid": process.env.REACT_APP_MYBRING_UID,
        "X-MyBring-API-Key": process.env.REACT_APP_MYBRING_API,
        "X-Bring-Client-URL": process.env.REACT_APP_MYBRING_CLIENT_URL,
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
      <HeroSection/>
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
