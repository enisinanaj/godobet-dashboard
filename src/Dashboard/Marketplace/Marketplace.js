import React, { useState, useEffect } from "react";
import { Modal, Row, Form, Col } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MarketCard from "./MarketCard";
import BASE_CONFIG from "../../store/config";
import { CardElement } from "@stripe/react-stripe-js";
import TokenManager from "../../App/auth/TokenManager";

const Marketplace = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [show, setShow] = useState(false);
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

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
            console.log(res);
          });
      });
  };

  const handleClose = () => setShow(false);

  const cardElementOptions = {
    hidePostalCode: true,
  };

  return (
    <Aux>
      <h1 style={{ paddingBottom: "40px", paddingTop: "20px" }}>Marketplace</h1>
      <Modal show={show} onHide={handleClose}>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Nome" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Cognome" />
                </Col>
              </Row>
            </li>
            <div style={{ width: "300px", margin: "auto" }}>
              <CardElement options={cardElementOptions} />
            </div>
          </ul>
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <button
              onClick={() => setIsProcessing(true)}
              disabled={isProcessing}
              className="btn btn-primary shadow-2 mb-4"
            >
              {isProcessing ? "Processing..." : "Pagar"}
            </button>
          </div>
        </div>
      </Modal>
      <Row md={12}>
        <MarketCard marketData={marketData} setShow={setShow} />
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
  registered: state.registered,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Marketplace)
);
