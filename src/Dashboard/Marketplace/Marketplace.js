import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MarketCard from "./MarketCard";
import BASE_CONFIG from "../../store/config";
import { useStripe } from "@stripe/react-stripe-js";
import TokenManager from "../../App/auth/TokenManager";
import "./Marketplace.css";

const Marketplace = (props) => {
  const [marketData, setMarketData] = useState([]);
  const [inPurchasing, setInPurchasing] = useState(false);

  useEffect(() => {
    getServices();
  }, []);

  const stripe = useStripe();

  const getServices = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services", {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((res) => {
            if (!res._embedded.services) {
              return;
            }
            setMarketData(res._embedded.services);
          });
      });
  };

  const handlePurchase = (item) => {
    setInPurchasing(item.id);

    TokenManager.getInstance().getToken()
    .then(jwt => {
        fetch(`${BASE_CONFIG.API_URL}/pps/payments/${item.id}/${props.applicationState.user.userCode}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          }
        }).then(response => response.headers.get('X-Stripe-Session-Id'))
        .then(stripeSessionId => {
          stripe.redirectToCheckout({ sessionId: stripeSessionId })
        })
    })
  };

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
                    {purchaseObject.author.author_name +
                      purchaseObject.author.author_surname}
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
      <Row className='p-5'>
        <Col>
        <h4>Search</h4>
        <Form.Control type='text' style={{backgroundColor:"white"}}/>
        </Col>
      </Row>
      <Row md={12}>
        <MarketCard marketData={marketData} inPurchasing={inPurchasing} handlePurchase={handlePurchase} user={props.applicationState.user} />
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Marketplace)
);
