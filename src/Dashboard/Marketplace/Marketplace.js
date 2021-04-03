import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    if (search < 3) {
      getServices()
      return;
    }

    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services/search/findByServiceName?name=" + search, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          }
        })
        .then((e) => e.json())
        .then((res) => {
          if (!res._embedded.services) {
            return;
          }
          setMarketData(res._embedded.services);
        });
      });
  }, [search]);

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
        .catch(e => {
          // TODO: show error to the user
        })
    })
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
      <Row className='p-5'>
        <Col>
          <h4>Cerca</h4>
          <Form.Control type='text' onChange={({target}) => setSearch(target.value)} style={{backgroundColor:"white"}}/>
        </Col>
      </Row>
      <Row md={12}>
        {marketData.length > 0 ? (
          <MarketCard marketData={marketData} handlePurchase={handlePurchase} /> ) : (
            <Col><h3>Nessun servizio trovato</h3></Col>
        )}
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