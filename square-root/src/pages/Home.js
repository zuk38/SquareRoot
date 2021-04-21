import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
//import HeroSection from '../components/HeroSection.js';

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


//contact form
const formState = { name: "", email: "", message: "" };

//forms management - respond to changes in input fields
function updateFormState(key, value, form) {
  form[key] = value;
}

export default function Home(props) {
  return (
    <div>
      {/* <HeroSection/> */}
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
