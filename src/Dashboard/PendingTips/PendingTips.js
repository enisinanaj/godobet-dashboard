import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import TipCard from '../../App/components/TipCard';

const tempData = [
  { id: 1, text: ['aaaa', 'bbbb', 'ccccc'] },
  { id: 2, text: ['ccccc'] },
  { id: 3, text: ['ccccc'] },
  { id: 4, text: ['aaaa'] },
  { id: 5, text: ['axxxa'] },
];

const getTipCards = (list) => {
  return list.map((item, i) => {
    return (
      <Col md={6}>
        <TipCard key={`tip-card-${i}`} {...item} />
      </Col>
    );
  });
};

class SamplePage extends Component {
  render() {
    return (
      <Aux>
        <Card>
          <Card.Body>
            <div>
              <h1>Tip in corso</h1>
              <Row>{getTipCards(tempData)}</Row>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div>
              <h1>Tip consclusi</h1>
              <Row>{getTipCards(tempData)}</Row>
            </div>
          </Card.Body>
        </Card>
      </Aux>
    );
  }
}

export default SamplePage;
