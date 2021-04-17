import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PriceLabel from '../../App/components/PriceLabel';
import SubscriptionItem from "./SubscriptionItem";

const Wallet = (props) => {

  const [services, setServices] = useState([]);
  const [userSetUp, setUserSetUp] = useState(false);
  const [balance, setBalance] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (props.applicationState.user.stripeAccountId && props.applicationState.user.stripeAccountStatus === 'verified') {
      setUserSetUp(true)
    }

    callUrl(BASE_CONFIG.API_URL + "/users/" + props.applicationState.user.userCode + "/services?page=0&size=1000")
      .then((e) => e.json())
      .then((services) => {
        setServices(services._embedded.services);
      })
      .catch(e => window.location = "/maintenance/error");
    
    callUrl(BASE_CONFIG.API_URL + "/pps/accounts/" + props.applicationState.user.userCode + "/balance")
      .then((e) => e.json())
      .then((balance) => {
        setBalance(balance);
        setLoading(false);
      })
      .catch(e => window.location = "/maintenance/error");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callUrl = (url) => {
    return TokenManager.getInstance().getToken().then(jwt => {
      return fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
      })
    });
  };

  return (
    <Aux>
      <div>
        <Row className="">
          {/* mb-n4 */}
          <Col md={4} lg={4} sm={12} xs={12} xl={4}>
            <Card className="user-card">
              <Card.Body className="">
                <Card.Title><h4>Bilancio</h4></Card.Title>
                {/* pt-0 */}
                {loading && <div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>}
                { !loading && userSetUp &&
                  <Row>
                    <Col>
                      <h5>Saldo contabile</h5>
                      <PriceLabel amount={balance.pending[0].amount/100} />
                    </Col>
                    <Col>
                      <h5>Saldo disponibile</h5>
                      <PriceLabel amount={balance.available[0].amount/100} />
                    </Col>
                  </Row>
                }
              </Card.Body>
            </Card>
          </Col>
          {!loading && services && <Col xl={8} md={8} lg={8} sm={12} xs={12} >
            <Card className="user-card">
              <Card.Body className="">
                <Card.Title><h4>Iscritti negli ultimi 30 giorni</h4></Card.Title>
                  {services.filter(service => service.subscriptions.filter(sub => sub.paymentSystemToken !== "self" && sub.valid).length > 0).map(service => {
                  return (
                    <SubscriptionItem service={service} />
                  )}
                )}
              </Card.Body>
            </Card>
          </Col>}
        </Row>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wallet));