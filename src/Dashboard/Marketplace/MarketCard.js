import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Esaurito from '../../App/components/Esaurito'

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
          <div className="">
            <Card.Img
              variant="top"
              src={getLatestImage(item.media)}
              alt="CardImageCap"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                margin: "20px",
                display: "inline",
              }}
            />
            
            <Card.Title as="h4" className={"mb-1 mt-4 mr-3 ml-3"} style={{display: "inline"}}>
              <Link to={`details/${item.id}`}>{item.serviceName}</Link>
            </Card.Title>
          </div>

          <Card.Body>
            <Card.Text>
              <span>
                {" "}<i className="feather icon-users" style={{ paddingRight: "5px" }} />{" "}
                Numero massimo iscrizioni: {item.maxSubscribers}
              </span>
              <br />
              <span>
                {" "}<i className="feather icon-users" style={{ paddingRight: "5px" }}/>{" "}
                Posizioni aperte: {item.maxSubscribers - item.subscribersCount === 0 ? <Esaurito /> : item.maxSubscribers - item.subscribersCount}
              </span>
              <br />
            </Card.Text>

            <Card.Text style={{ overflowY: "auto", maxHeight: "160px" }}>
              {item.excerpt}
            </Card.Text>

            <div>
            <Button className="pull-right" onClick={() => handlePurchase(item)}>
              Attiva subito a soli {item.price.toFixed(2)} &euro;
            </Button>
            </div>
          </Card.Body>
          <Card.Footer>
              <Row className="text-center">
                  <Col>
                      <h6 className="mb-1"><i className="feather icon-users" style={{ paddingRight: "5px" }} /> {item.subscribersCount}</h6>
                      <p className="mb-0">Iscrizioni</p>
                  </Col>
                  <Col>
                      <h6 className="mb-1"><i className="feather icon-calendar" style={{ paddingRight: "5px" }} /> {item.duration} giorni</h6>
                      <p className="mb-0">Durata</p>
                  </Col>
                  <Col>
                      <h6 className={"mb-1" + ((item.totalProfit >= 0) ? " text-success" : " text-danger")}>{item.totalProfit.toFixed(2)}%</h6>
                      <p className="mb-0">Profitto</p>
                  </Col>
              </Row>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
};

export default MarketCard;
