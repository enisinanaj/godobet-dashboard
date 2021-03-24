import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import ServiceCard from '../Service/service';

class MyServices extends Component {
  state = {
    services: [1, 2, 3, 4, 5]
  }

  getServicesDom() {
    return this.state.services.map((service, key) => <Col md={4}><ServiceCard data={service} key={key}></ServiceCard></Col>);
  }

  render() {
    return (
      <Aux>
        <Row md={12}>
          {this.getServicesDom()}
        </Row>
      </Aux>
    );
  }
}

export default MyServices;
