import React from "react";
import { Alert, Col } from "react-bootstrap";

const NoServicesAlert = () => {
  return (
    <Col>
      <Alert variant="light">
        Non hai alcun servizio. Vai al{" "}
        <a href="/dashboard/marketplace">
          <b>Marketplace</b>
        </a>
      </Alert>
    </Col>
  );
};

export default NoServicesAlert;
