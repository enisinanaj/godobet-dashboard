import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MarketCard = ({ marketData, setShow }) => {
  const subscribe = () => {
    Swal.fire({
      title: "Sei sicuro?",
      text:
        "Stai per abbonarti al servizio. Conferma l'iscrizione con cliccando sul pulsante sottostante.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1e983b",
      cancelButtonColor: "#e8e8e8",
      confirmButtonText: "Confermo",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Confermato!",
          "Ti sei abbonato al servizio con successo!",
          "success"
        );
      }
    });
  };

  return marketData.map((item, index) => {
    return (
      <Col md={4} key={index}>
        <Card>
          <div className="profile-card" style={{ minHeight: 200 }}>
            <Card.Img variant="top" src={item.img} alt="CardImageCap" />
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

            <Card.Text style={{ overflowY: "scroll", maxHeight: "160px" }}>
              {item.description}
            </Card.Text>
            <Button className="pull-right" onClick={subscribe}>
              Abbonati
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default MarketCard;
