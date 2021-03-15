import React, { useState, useEffect } from "react";
import { Card, Col, Row, Dropdown, Button, Table } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import cover from "../../assets/images/user/cover.jpg";
import Loader from "../../App/layout/Loader";

const CardDetails = () => {
  const [currentObject, setCurrentObject] = useState();

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

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
  }, []);

  return (
    <Aux>
      {currentObject ? (
        <div>
          <Row>
            <Col></Col>
            <Col sm={8}>
              <Card
                className="user-card user-card-2 shape-right"
                style={{ minHeight: "700px" }}
              >
                <Card.Header className="border-0 p-2 pb-0">
                  <div className="cover-img-block">
                    <img src={cover} alt="" className="img-fluid" />
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <div className="user-about-block">
                    <Row className="align-items-center">
                      <Col>
                        <h2 className="text-center mb-3">
                          {currentObject.serviceName}
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="text-center mb-3">
                          <span>
                            {" "}
                            <i
                              className="feather icon-dollar-sign"
                              style={{ paddingRight: "5px" }}
                            />{" "}
                            {currentObject.price} €
                          </span>
                        </h3>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col md={6}>
                      <h6 className="text-center text-muted mb-3">
                        <span>
                          {" "}
                          <i
                            className="feather icon-calendar"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Durata iscrizione: {currentObject.duration} giorni
                        </span>
                      </h6>
                    </Col>
                    <Col md={6}>
                      <h6 className="text-center text-muted mb-3">
                        <span>
                          {" "}
                          <i
                            className="feather icon-users"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Massimo iscrizioni: {currentObject.maxSubscribers}
                        </span>
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4 className="mb-3 text-muted text-center">
                        {currentObject.description}
                      </h4>
                    </Col>
                  </Row>
                </Card.Body>
                <Button className="pull-right">Abbonati</Button>
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
                  {currentObject._embedded.pools.map((item) => (
                    <tr>
                      <td className="align-middle">
                        <img
                          alt="contact-img"
                          title="contact-img"
                          className="rounded mr-3"
                          height="48"
                        />
                        <p className="m-0 d-inline-block align-middle font-16">
                          <a className="text-body">title</a>
                        </p>
                      </td>
                      <td className="align-middle">{item.description}</td>
                      <td className="align-middle">{item.bookmaker}</td>
                      <td className="align-middle">{item.quote.toFixed(2)}</td>
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
