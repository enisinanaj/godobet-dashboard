import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Table } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";

const CardDetails = () => {
  const [currentObject, setCurrentObject] = useState();

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const getLatestImage = (media) => {
    if (
      !media._embedded ||
      media.length === 0 ||
      !media._embedded.serviceMedia
    ) {
      return "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    }

    return media._embedded.serviceMedia.sort((a, b) => b.id - a.id)[0].url;
  };

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services/" + id, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((object) => {
            setCurrentObject(object);
            console.log(object);
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Aux>
      {currentObject ? (
        <div>
          <Row>
            <Col></Col>
            <Col sm={12}>
              <Card
                className="user-card user-card-1"
                style={{ minHeight: "700px" }}
              >
                {/* <Card.Header className="border-0 p-2 pb-0">
                  <div className="cover-img-block">
                    <img
                      style={{
                        maxHeight: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      src={getLatestImage(currentObject)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Card.Header> */}
                <div className="profile-card" style={{ maxHeight: "250px" }}>
                  <Card.Img
                    variant="top"
                    src={getLatestImage(currentObject)}
                    alt="CardImage"
                  />
                  <Card.Body className="text-left">
                    <Card.Title as="h2" style={{ color: "white" }}>
                      {(currentObject.price/100).toLocaleString("it-IT", {
                        maximumFractionDigits: 2,
                      })}
                      {""} €
                    </Card.Title>
                  </Card.Body>
                </div>
                <Card.Body className="pt-0">
                  <Row>
                    <Col md={12}>
                      <div className="">
                        <h6 className="mb-1 mt-3">
                          {currentObject.serviceName}
                        </h6>
                        <br />
                        <p className="mb-3 text-muted">
                          <span>
                            {" "}
                            <i
                              className="feather icon-users"
                              style={{ paddingRight: "5px" }}
                            />{" "}
                            Numero massimo iscrizioni:{" "}
                            {currentObject.maxSubscribers}
                          </span>
                          <br />
                          <span>
                            {" "}
                            <i
                              className="feather icon-calendar"
                              style={{ paddingRight: "5px" }}
                            />{" "}
                            Durata iscrizione: {currentObject.duration} giorni
                          </span>
                        </p>
                        <p className="mb-1">{currentObject.description}</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Button className="pull-right">Iscriviti</Button>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col sm={8}>
              <Table striped hover responsive id="data-table-zero">
                <thead className="thead-light">
                  <tr>
                    <th>Titolo</th>
                    <th>Descrizione</th>
                    <th>Bookmaker</th>
                    <th>Quota</th>
                    <th>Stake</th>
                    <th>Profitto</th>
                    <th>Eventi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentObject._embedded &&
                    currentObject._embedded.pools &&
                    currentObject._embedded.pools.map((item) => (
                      <tr>
                        <td className="align-middle">
                          <img
                            alt="contact-img"
                            title="contact-img"
                            className="rounded mr-3"
                            height="48"
                          />
                          <p className="m-0 d-inline-block align-middle font-16">
                            <a href="/" className="text-body">
                              title
                            </a>
                          </p>
                        </td>
                        <td className="align-middle">{item.description}</td>
                        <td className="align-middle">{item.bookmaker}</td>
                        <td className="align-middle">
                          {item.quote.toFixed(2)}
                        </td>
                        <td className="align-middle">{item.stake / 100} %</td>
                        <td className="align-middle">
                          {item.profit.toFixed(2)} %
                        </td>

                        <td className="table-action">{item.events.length}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
            <Col></Col>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </Aux>
  );
};

export default CardDetails;
