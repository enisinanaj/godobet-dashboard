import React, { useState, useEffect } from "react";
import { Modal, Row, Form, Col } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MarketCard from "./MarketCard";
import BASE_CONFIG from "../../store/config";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import TokenManager from "../../App/auth/TokenManager";
import "./Marketplace.css";
import { Button } from "bootstrap";

const Marketplace = (props) => {
  const [searching, setSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState()
  const [isProcessing, setIsProcessing] = useState(false);
  const [marketData, setMarketData] = useState([]);
  const [show, setShow] = useState(false);
  const [purchaseObject, setPurchaseObject] = useState({
    price: "",
    name: "",
    author: "",
  });

  useEffect(() => {
    getServices();
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const formattedAmount = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(purchaseObject.price);

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

  const handlePurchase = (item) => {
    setShow(true);
    setPurchaseObject({
      price: item.price,
      id: item.id,
      name: item.serviceName,
      duration: item.duration,
      author: {
        author_name: item.author.name,
        author_surname: item.author.lastName,
      },
    });
  };

  const spanStyle = {
    fontSize: "15px",
    fontWeight: "bold",
  };

  const checkoutDiv = {
    padding: "10px",
    textAlign: "center",
  };

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

  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    TokenManager.getInstance().getToken().then(jwt => {
      fetch(`${BASE_CONFIG.API_URL}/services/search/findByServiceName?name=${searchTerm}`, {
        headers: {
          "Content-Type": 'application/json',
          "X-Auth": jwt,
        }
      }).then(e => e.json().then(res => {
        setMarketData(res._embedded.services)
        setSearching(false)
      }))
    })
  }

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
      <Row className='pt-5 pb-5' style={{justifyContent: 'center'}}>
        <Col md={4} style={{textAlign: 'center'}}>
        <Form onSubmit={handleSearch}>
        <Form.Control type='text' style={{backgroundColor:"white"}} placeholder='Cerca..' onChange={(e) => setSearchTerm(e.target.value)}/>
        <button style ={{width: '80px'}}className='btn-primary m-3' type='submit'>{searching ? (<span className="spinner-border spinner-border-sm mr-1"></span>) : "Cerca"}</button>
        </Form>
        </Col>
      </Row>
      <Row md={12}>
        {marketData.length > 0 ? (
        <MarketCard marketData={marketData} handlePurchase={handlePurchase} /> ) : (
          <Col><h3>Nessun servizio trovato</h3></Col>
        ) }
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
