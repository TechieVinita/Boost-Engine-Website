import React from "react";
import { Accordion } from "react-bootstrap";

const FAQAccordion = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the mission of Boost Engine?</Accordion.Header>
        <Accordion.Body>
          Boost Engine is a digital solutions provider for businesses.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>What services do we offer?</Accordion.Header>
        <Accordion.Body>...</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How can you collaborate with us?</Accordion.Header>
        <Accordion.Body>Email us at support@boostengine.com</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>How do we ensure quality in our services?</Accordion.Header>
        <Accordion.Body>...</Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
};

export default FAQAccordion;
