import React from 'react';
import { Dropdown, Card, Carousel } from 'react-bootstrap';

const getDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant={'light'}></Dropdown.Toggle>
      <Dropdown.Menu menuAlign={'left'}>
        <Dropdown.Item eventKey="1">One One One One</Dropdown.Item>
        <Dropdown.Item eventKey="2">Two TwoTwo Two</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const getTipText = (list) => {
  const hideControllers = list.length === 1;

  return (
    <Carousel
      interval={null}
      controls={!hideControllers}
      indicators={!hideControllers}
    >
      {list.map((item, i) => (
        <Carousel.Item key={`carousel-${i}`}>
          <div
            className="d-block w-100"
            style={{ padding: '20px 50px 20px 50px' }}
          >
            <span>{item}</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const TipCard = ({ text }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title
          as={'h3'}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0',
          }}
        >
          hello
          {getDropdown()}
        </Card.Title>
        {getTipText(text)}
        <Card.Text style={{ textAlign: 'left', paddingTop: '20px' }}>
          Temporary footer
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TipCard;
