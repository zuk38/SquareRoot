import React from "react";
import { Container, Button, Form } from 'react-bootstrap';
import { API } from 'aws-amplify';

async function addContact() {
  //create request body
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message
    }
  }
  console.log(data);
  //call the API gateway
  const apiData = await API.post('contactFormApi', '/contact', data);
  console.log({ apiData });
  alert('Mail sent!');  //not true yet but whatever
};

//form management - respond to changes in input fields
const formState = { name: '', email: '', message: '' };
function updateFormState(key, value) {
  formState[key] = value;
}

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1>Welcome!</h1>
        <p>Beatiful plants should be here</p>
        <p>But Karolina ain't a frontend designer</p>
      </div>
      <br />
      <br />
      <Container>
        <div>
          <h3>Get in touch</h3>
          <br />
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={(e) => updateFormState("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                onChange={(e) => updateFormState("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                placeholder="Message"
                onChange={(e) => updateFormState("message", e.target.value)}
              />
            </Form.Group>
            <Button onClick={addContact}>Send a message</Button>
          </Form>
        </div>
      </Container>
    </section>
  );
}
