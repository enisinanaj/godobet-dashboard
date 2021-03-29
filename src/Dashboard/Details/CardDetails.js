import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Modal, Form} from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";
import { Link, withRouter } from "react-router-dom";
import Chart from "react-apexcharts";
import '../Marketplace/Marketplace.css'

import axios from "axios";
import Swal from "sweetalert2";

import secEcommerceChartBar from "../../Demo/Widget/chart/sec-ecommerce-chart-bar";
import secEcommerceChartLine from "../../Demo/Widget/chart/sec-ecommerce-chart-line";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import cover from "../../assets/images/user/cover.jpg";
import md5 from "md5";

const CardDetails = (props) => {
  const [purchasable, setPurchasable] = useState(true);
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
          });
      });

      TokenManager.getInstance().getToken().then(jwt => {
        fetch(BASE_CONFIG.API_URL + '/services/' + id + '/author', {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        }).then(e => e.json()).then(author => {
          console.warn(author);
          if (author.userCode === props.applicationState.user.userCode) {
            setPurchasable(false);
          }
          setAuthor(author)
        })
      })

      if (props.applicationState.user.userRole == 4) {
        TokenManager.getInstance().getToken().then(jwt => {
          fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/subscriptions', {
            headers: {
              "Content-Type": 'application/json',
              "X-Auth": jwt,
            },
          }).then(e => e.json()).then(subscriptions => {
            const subscription = subscriptions._embedded?.subscriptions.find(sub => sub._links.self.href === currentObject._links.self.href);
  
            if (!subscription || subscription.expired || subscription.captured !== 1) {
              console.warn("can't purchase")
              setPurchasable(true);
            }
          });
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authorAvatar = author._embedded && author._embedded.media ? author._embedded.media.sort((a,b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime()) : "http://www.gravatar.com/avatar/" + md5(author.email.toLowerCase().trim()) + "?s=32";
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

  return (
    <Aux>
      {currentObject ? (
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
                          <Button onClick={() => handlePurchase(currentObject._links.self.href)} disabled={isProcessing} >
                            {isProcessing ? (
                              <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                            ) : null }{" "}
                            Iscriviti
                          </Button>
                        </div>}
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
              <Card>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img height="150px" width='150px' src={authorAvatar[0].url} />
                    </Col>
                    <Col md={2}>
                      <h4 style={{fontSize: '20px'}}>{author.name + author.lastName}</h4>
                    </Col>
                    <Col md={2}>
                      <h4 style={{fontSize: '20px'}}>{author._embedded.services.length} services</h4>
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