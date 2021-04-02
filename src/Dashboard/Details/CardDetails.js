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
import Tip from "../SubscriberPools/Tip";
import poolChart from "./poolChart";

const CardDetails = (props) => {
  const [monthlyProfit, setMonthlyProfit] = useState(0)
  const [winRatio, setWinRatio] = useState(0)
  const [series, setSeries] = useState([
    {
      data: [1, 2, 3]
    }
  ])
  const [options, setOptions] = useState({
    chart: {
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: true
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -99999,
                    to: 0,
                    color: '#b70505'
                }, {
                    from: 0,
                    to: 9999999,
                    color: '#37ad1d'
                }]
            },
            columnWidth: '50%',
        }
    },
    xaxis: {
        categories: [],
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Profit: '
            }
        },
        marker: {
            show: false
        }
    }
})
  const [pools, setPools] = useState([])
  const [purchasable, setPurchasable] = useState(false);
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
  })
  const [show, setShow] = useState(false);
  const [purchaseObject, setPurchaseObject] = useState({
    price: "",
    name: "",
    author: "",
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


  let now = Date.now()
  
  console.log(now)


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
        const winRatioVar = author._embedded.playedPools.filter(res => {
          return res.outcome === 'win'
      } )
      let percentage = ((winRatioVar.length / author._embedded.playedPools.length) * 100)
      setWinRatio(percentage)
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
            const subscription = subscriptions._embedded.subscriptions.find(sub => sub._links.self.href === currentObject._links.self.href);

          if (subscription) {
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
                const profit = pools._embedded.pools.map(pool => pool.profit.toFixed(2))
                setSeries([{
                  data: profit,
                }])
                setMonthlyProfit(pools._embedded.pools.map(pool => pool.profit).reduce((a,b) => a + b, 0).toFixed(2))
                setOptions((prevState) => ({
                  ...prevState,
                  xaxis: {
                    categories: pools._embedded.pools.map(pool => new Date(pool.createdOn).toISOString().split('T')[0])
                  }
                }) )
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
  const elements = useElements();

  const formattedAmount = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(purchaseObject.price);


  const handlePayment = async (e) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardElement);

    if (!cardElement._complete) {
      alert("Please check your card details.");
      return;
    }
    setIsProcessing(true);

    const response = await axios.post("http://localhost:9000/payment", {
      amount: purchaseObject.price,
      metadata: {
        customer: props.applicationState.user.userCode,
        service: purchaseObject.id,
      },
      description: purchaseObject.name,
    });

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    const confirmedCardPayment = await stripe.confirmCardPayment(
      response.data.client_secret,
      {
        payment_method: paymentMethodReq.paymentMethod.id,
      }
    );

    if (
      confirmedCardPayment.paymentIntent &&
      confirmedCardPayment.paymentIntent.status === "succeeded"
    ) {
      setIsProcessing(false);
      setShow(false);
      Swal.fire(
        "Confermato!",
        "Ti sei abbonato al servizio con successo!",
        "success"
      );
    } else {
      setShow(false);
      setIsProcessing(false);
      Swal.fire(
        "Errore!",
        "Si è verificato un errore durante l'elaborazione. Per favore riprova.",
        "error"
      );
    }
  };

console.log(monthlyProfit)




  return (
    <Aux>
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
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {purchasable ? <Button onClick={() => handlePurchase(currentObject)}>Abbonati</Button> : null}
                        </div>
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
                          />{" "}Prezzo: {currentObject.price} €</h4>
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
            <Col md={4}>
                      <a href={`/tipsters/${author.userCode}`}>
              <Card >
                <Card.Body>
                  <Row style={{textAlign: 'center'}}>
                    <Col>
                      <img height="200px" width='200px' src={authorAvatar[0].url} alt='' style={{objectFit: 'cover', borderRadius: '50%'}} />
                      <h4 className='pt-4'>{author.name} {author.lastName}</h4>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{textAlign: 'center'}}>
                  <Row>
                    <Col>
                      <p className="text-muted m-b-5">Followers</p>
                      <h5>{author.totalSubscribers}</h5>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                    <p className="text-muted m-b-5">Services</p>
                      <h6>{author._embedded.services.length}</h6>
                    </Col>
                    <Col>
                    <p className="text-muted m-b-5">Pools</p>
                      <h6>{author._embedded.pools ? author._embedded.pools.length : 0}</h6>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                    <p className="text-muted m-b-5">Profit</p>
                      <h6 className={"mb-1" + ((author.totalProfit >= 0) ? " text-success" : " text-danger")}>{author.totalProfit} %</h6>
                    </Col>
                    <Col>
                    <p className="text-muted m-b-5">Win Ratio</p>
                      <h6>{winRatio} %</h6>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
                      </a>
            </Col>
            <Col md={8}>
              <Card className="overflow-hidden">
                <Card.Body className="bg-c-green pb-0">
                  <Row className="text-white">
                    <Col sm="auto">
                      <h4 className="m-b-5 text-white">30 days profit</h4>
                      <h6 className="text-white">{monthlyProfit} &euro;</h6>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={8}>
                      <Chart series={series} options={options} type='bar'
                       width="100%" height='380px' />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>          
          </Row>
          <Row>
            {pools.map(pool => (
              <Tip key={pool.id} pool={pool} author={true} />
            ))}
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

