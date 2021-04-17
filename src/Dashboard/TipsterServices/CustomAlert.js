import React from "react";
import { Alert, Col } from "react-bootstrap";

const CustomAlert = ({ message, component, link, variant }) => {
  return (
    <Col>
      <Alert variant={variant ? variant : "light"}>
        {message}
        <a href={link}>
          <b> {component}</b>
        </a>
      </Alert>
    </Col>
  );
};

export default CustomAlert;
