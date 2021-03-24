import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Table } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";
import { withRouter } from "react-router-dom";
import Chart from "react-apexcharts";

import secEcommerceChartBar from "../../Demo/Widget/chart/sec-ecommerce-chart-bar";
import secEcommerceChartLine from "../../Demo/Widget/chart/sec-ecommerce-chart-line";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import cover from "../../assets/images/user/cover.jpg";
import avatar1 from "../../assets/images/user/avatar-1.jpg";

const CardDetails = (props) => {
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

  console.log(props.applicationState.user.name);

  return (
    <Aux>
      {currentObject ? (
        <div>
          <Row className="mb-n4">
            <Col sm={12}>
              <Card className="user-card">
                <Card.Header className="border-0 p-2 pb-0">
                  <div className="cover-img-block">
                    <img src={cover} alt="" className="img-fluid" />
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <div className="user-about-block">
                    <Row className="align-items-center">
                      <Col md={2}>
                        <div className="change-profile">
                          <img
                            width="200px"
                            className=" img-fluid"
                            src={getLatestImage(currentObject)}
                            alt="User"
                          />
                        </div>
                      </Col>
                      <Col>
                        <h4 className="mb-1">{currentObject.serviceName}</h4>
                      </Col>
                      <Col md={2}>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button>Abbonati</Button>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}></Col>
                      <Col>
                        <span>
                          {" "}
                          <i
                            className="feather icon-dollar-sign"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Prezzo: {currentObject.price} €
                        </span>
                      </Col>
                      <Col>
                        <span>
                          {" "}
                          <i
                            className="feather icon-calendar"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Durata iscrizione: {currentObject.duration} giorni
                        </span>
                      </Col>
                      <Col>
                        <span>
                          {" "}
                          <i
                            className="feather icon-users"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Numero massimo iscrizioni:{" "}
                          {currentObject.maxSubscribers}
                        </span>
                      </Col>
                      <Col>
                        <span>
                          {" "}
                          <i
                            className="feather icon-chevrons-up"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Profit: {currentObject.totalProfit.toFixed(2)} %
                        </span>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img height="200px" src={avatar1} />
                    </Col>
                    <Col md={3}>
                      <h4>Name Surname</h4>
                    </Col>
                    <Col md={3}>
                      <h4>Number of services</h4>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="overflow-hidden">
                <Card.Body className="bg-c-green pb-0">
                  <Row className="text-white">
                    <Col sm="auto">
                      <h4 className="m-b-5 text-white">$654</h4>
                      <h6 className="text-white">+1.65(2.56%)</h6>
                    </Col>
                    <Col className="text-right">
                      <h6 className="text-white">Friday</h6>
                    </Col>
                  </Row>
                  <Chart {...secEcommerceChartLine} />
                  <Row className="justify-content-center">
                    <Col sm={8}>
                      <Chart {...secEcommerceChartBar} />
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <h4>$2654.00</h4>
                  <p className="text-muted">Sales in Nov.</p>
                  <Row>
                    <Col>
                      <p className="text-muted m-b-5">From Market</p>
                      <h6>$1860.00</h6>
                    </Col>
                    <Col>
                      <p className="text-muted m-b-5">Referral</p>
                      <h6>$500.00</h6>
                    </Col>
                    <Col>
                      <p className="text-muted m-b-5">Affiliate</p>
                      <h6>$294.00</h6>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardDetails)
);

{
  /* <div>
          <Row>
            <Col></Col>
            <Col sm={12}>
              <Card
                className="user-card user-card-1"
                style={{ minHeight: "700px" }}
              >
                <div className="profile-card" style={{ maxHeight: "250px" }}>
                  <Card.Img
                    variant="top"
                    src={getLatestImage(currentObject)}
                    alt="CardImage"
                  />
                  <Card.Body className="text-left">
                    <Card.Title as="h2" style={{ color: "white" }}>
                      {currentObject.price.toLocaleString("it-IT", {
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
        </div> */
}
