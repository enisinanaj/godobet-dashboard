import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MarketCard = ({ marketData, handlePurchase }) => {
  const getLatestImage = (media) => {
    if (!media || media.length === 0) {
      return "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    }
    return media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url;
  };

  return marketData.map((item, index) => {
    return (
      <Col md={4} key={index}>
        <Card>
          <div className="profile-card" style={{ minHeight: 200 }}>
            <Card.Img
              variant="top"
              src={getLatestImage(item.media)}
              alt="CardImageCap"
            />
            <Card.Body className="text-left">
              <Card.Title as="h2" style={{ color: "white" }}>
                {item.price} €
              </Card.Title>
            </Card.Body>
          </div>
          <Card.Body>
            <Link to={`details/${item.id}`}>
              <Card.Title as="h5">{item.serviceName}</Card.Title>
            </Link>
            <Card.Text>
              <span>
                {" "}
                <i
                  className="feather icon-users"
                  style={{ paddingRight: "5px" }}
                />{" "}
                Numero massimo iscrizioni: {item.maxSubscribers}
              </span>
              <br />
              <span>
                {" "}
                <i
                  className="feather icon-calendar"
                  style={{ paddingRight: "5px" }}
                />{" "}
                Durata iscrizione: {item.duration} giorni
              </span>
              <br />
            </Card.Text>

            <Card.Text style={{ overflowY: "auto", maxHeight: "160px" }}>
              {item.description}
            </Card.Text>
            <Button className="pull-right" onClick={() => handlePurchase(item)}>
              Abbonati
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default MarketCard;
