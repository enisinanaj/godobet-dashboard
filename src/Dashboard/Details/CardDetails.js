import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Modal, Form} from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";
import { withRouter } from "react-router-dom";
import Chart from "react-apexcharts";
import '../Marketplace/Marketplace.css'
import CoverImage from '../../assets/images/godobet-placeholder.jpg'

import axios from "axios";
import Swal from "sweetalert2";

import secEcommerceChartBar from "../../Demo/Widget/chart/sec-ecommerce-chart-bar";
import secEcommerceChartLine from "../../Demo/Widget/chart/sec-ecommerce-chart-line";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
<<<<<<< HEAD
import cover from "../../assets/images/user/cover.jpg";
import md5 from "md5";

const CardDetails = (props) => {
  const [purchasable, setPurchasable] = useState(true);
=======

const CardDetails = (props) => {
  const [pools, setPools] = useState([])
  const [purchasable, setPurchasable] = useState(false);
>>>>>>> 10e9053 (length description form validation, searchbar prototype, tipsters profile prototype, card details updates)
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentObject, setCurrentObject] = useState();
  const [author, setAuthor] = useState({
    name: '',
    lastName: '',
    _embedded: {
      media: [
        {
          url: '',
        },
      ],
      services: [],
    },
  });

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const getLatestImage = (media) => {
    if (
      !media._embedded ||
      media.length === 0 ||
      !media._embedded.serviceMedia
    ) {
      return CoverImage;
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
          });
      });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    TokenManager.getInstance().getToken().then(jwt => {
      fetch(BASE_CONFIG.API_URL + '/services/' + id + '/author', {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
      }).then(e => e.json()).then(author => {
        setAuthor(author)
      })
    })

    if (props.applicationState.user.roleValue >= 4) {
      TokenManager.getInstance().getToken().then(jwt => {
        fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/subscriptions', {
          headers: {
            "Content-Type": 'application/json',
            "X-Auth": jwt,
          },
        }).then(e => e.json()).then(subscriptions => {
          if(currentObject && currentObject._links) {
            console.log(subscriptions)
            console.log(currentObject._links.self.href)
            const subscription = subscriptions._embedded.subscriptions.find(sub => sub._links.self.href === currentObject._links.self.href);

          if (!subscription) {
            setPurchasable(true);
          } else {
            TokenManager.getInstance().getToken().then(jwt => {
              fetch(BASE_CONFIG.API_URL + '/services/' + id + '/pools', {
                headers: {
                  'Content-Type': "application/json",
                "X-Auth": jwt,
                },
              }).then(e => e.json().then(pools => {
                setPools(pools._embedded.pools)
              }))
            })
          }
          
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentObject])


  const authorAvatar = author._embedded.media.sort((a,b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime());

  const handlePurchase = (item) => {
    setShow(true);
    setPurchaseObject({
      price: item.price,
      id: item.id,
      name: item.serviceName,
      duration: item.duration,
    });
  }

  const spanStyle = {
    fontSize: "15px",
    fontWeight: "bold",
  };

  const checkoutDiv = {
    padding: "10px",
    textAlign: "center",
  };

  const handleClose = () => setShow(false);

  const cardElementOptions = {
    style: {
      base: {
        background: "red",
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };

  const stripe = useStripe();

  const handlePurchase = (selfLink) => {
    setIsProcessing(true);

    TokenManager.getInstance().getToken()
    .then(jwt => {
        fetch(`${BASE_CONFIG.API_URL}/pps/payments/${selfLink.substring(selfLink.lastIndexOf('/') + 1)}/${props.applicationState.user.userCode}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          }
        }).then(response => response.headers.get('X-Stripe-Session-Id'))
        .then(stripeSessionId => {
          stripe.redirectToCheckout({ sessionId: stripeSessionId })
        })
        .catch(_ => setIsProcessing(false))
    })
  };
<<<<<<< HEAD
=======

  console.log(author)

>>>>>>> 10e9053 (length description form validation, searchbar prototype, tipsters profile prototype, card details updates)

  return (
    <Aux>
<<<<<<< HEAD
      {currentObject ? (
=======
      <Modal show={show} onHide={handleClose}>
        <Form id="purchaseForm" onSubmit={handlePayment}>
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                <Row>
                  <h1>{purchaseObject.serviceName}</h1>
                  <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" required />
                  </Col>
                  <Col>
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control type="text" placeholder="Cognome" required />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" required />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Dati della carta di credito </Form.Label>
                    <CardElement options={cardElementOptions} required />
                  </Col>
                </Row>
              </li>
            </ul>
            <div
              style={{
                height: "300px",
                margin: "40px",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ margin: "30px" }}>
                <div style={checkoutDiv}>
                  <span>Service:</span>{" "}
                  <span style={spanStyle}>{purchaseObject.name}</span>
                </div>
                <div style={checkoutDiv}>
                  <span>Author:</span>{" "}
                  <span style={spanStyle}>
                    {author.name + author.lastName}
                  </span>
                </div>
                <div style={checkoutDiv}>
                  <span>Durata iscrizione:</span>{" "}
                  <span style={spanStyle}>
                    {purchaseObject.duration} giorni
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn btn-primary shadow-2 mb-4"
                >
                  {isProcessing ? "Processing..." : `Pagar ${formattedAmount}`}
                </button>
              </div>
              <div className="d-inline-block">
                <label className="check-task custom-control custom-checkbox d-flex justify-content-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    required
                  />
                  <span className="custom-control-label">
                    Ho letto e accetto i <a href="/">Termini di servizio</a>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
      {currentObject && author.name ? (
>>>>>>> f839299 (tipster profile)
        <div>
          <Row className="mb-n4">
            <Col sm={12}>
              <Card className="user-card">
               
                <Card.Body className="pt-0">
                  <div className="user-about-block">
                    <Row className="align-items-center">
                      <Col md={2}>
                        <div className="change-profile">
                          <img
                            width="150px"
                            height="150px"
                            style={{objectFit:'cover'}}
                            // className=" img-fluid"
                            src={getLatestImage(currentObject)}
                            alt="User"
                          />
                        </div>
                      </Col>
                      <Col>
                        <h4 className="mb-1 p-1">{currentObject.serviceName}</h4>
                      </Col>
                      <Col md={2}>
                        {purchasable && <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
<<<<<<< HEAD
                          <Button onClick={() => handlePurchase(currentObject._links.self.href)} disabled={isProcessing} >
                            {isProcessing ? (
                              <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                            ) : null }{" "}
                            Iscriviti
                          </Button>
                        </div>}
=======
                          {purchasable ? <Button onClick={() => handlePurchase(currentObject)}>Abbonati</Button> : null}
                        </div>
>>>>>>> 10e9053 (length description form validation, searchbar prototype, tipsters profile prototype, card details updates)
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}></Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}> {" "}
                          <i
                            className="feather icon-dollar-sign"
                            style={{ paddingRight: "5px" }}
                          />{" "}Prezzo: {(currentObject.price/100).toLocaleString("it-IT", {maximumFractionDigits: 2})} €</h4>
                        </span>
                      </Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}> {" "}
                          <i
                            className="feather icon-calendar"
                            style={{ paddingRight: "5px" }}
                          />{" "}Durata iscrizione: {currentObject.duration} giorni</h4>
                        </span>
                      </Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}>{" "}
                          <i
                            className="feather icon-users"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Numero massimo iscrizioni:{" "}
                          {currentObject.maxSubscribers}</h4>
                        </span>
                      </Col>
                      <Col>
                          <h4 style={{fontSize: '15px'}} className={(currentObject.totalProfit >= 0) ? 'text-success' : 'text-danger'}>{" "}
                          <i
                            className={currentObject.totalProfit >= 0 ? "feather icon-chevrons-up" : "feather icon-chevrons-down"}
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Profit: {currentObject.totalProfit.toFixed(2)} %</h4>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{justifyContent: 'center', textAlign: 'center'}}>
                      <Col md={8}>
                      <p className='text-muted'>{currentObject.excerpt}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{justifyContent: 'center', textAlign: 'center'}}>
                      <Col md={8} >
                      <p className='text-muted'>{currentObject.description}</p>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
                      <a href={`/tipsters/${author.userCode}`}>
              <Card>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img height="150px" width='150px' src={authorAvatar[0].url} alt='' style={{objectFit: 'cover', borderRadius: '50%'}} />
                    </Col>
                    <Col md={2}>
                      <h4 style={{fontSize: '20px'}}>{author.name + author.lastName}</h4>
                    </Col>
                    <Col md={2}>
                      <h4 style={{fontSize: '20px'}}>{author._embedded.services.length} services</h4>
                    </Col>
                    <Col md={2}>
                      <h3 style={{fontSize: '20px'}}>{author.totalSubscribers} followers</h3>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
                      </a>
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
<<<<<<< HEAD
);
=======
);


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

>>>>>>> f839299 (tipster profile)
