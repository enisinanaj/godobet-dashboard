import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PaymentItem from "./PaymentItem";
import Swal from "sweetalert2";

const UserPayments = (props) => {

  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callUrl(BASE_CONFIG.API_URL + "/users/" + props.applicationState.user.userCode + "/subscriptions?page=0&size=1000")
      .then((e) => e.json())
      .then((subscriptions) => {
        setSubscriptions(subscriptions._embedded ? subscriptions._embedded.subscriptions : []);
        setLoading(false);
      })
      .catch(e => Swal.fire({
        type: 'error',
        text: "C'è stato un errore di sistema. Se l'error persiste, ti preghiamo di contattare il supporto via telegram o email."
      }));
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
          {!loading && subscriptions && <Col xl={12} md={12} lg={12} sm={12} xs={12} >
            <Card className="user-card">
              <Card.Body className="">
                <Card.Title><h4>Storico pagamenti</h4></Card.Title>
                  {subscriptions
                  .filter(subscription => {
                    return subscription.paymentSystemToken !== "self" && subscription.paymentSystemToken !== "free-service"
                  })
                  .sort((a, b) => new Date(b.subscribedOn) - new Date(a.subscribedOn))
                  .map(sub => {
                    return (
                      <PaymentItem subscription={sub} key={sub.id} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPayments));