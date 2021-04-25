import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import MarketCard from "./MarketCard";
import BASE_CONFIG from "../../store/config";
import { useStripe } from "@stripe/react-stripe-js";
import TokenManager from "../../App/auth/TokenManager";
import "./Marketplace.css";
import { isProfileComplete } from "../../App/components/UserUtil";
import moment from "moment";

const Marketplace = (props) => {
  const [marketData, setMarketData] = useState([]);
  const [inPurchasing, setInPurchasing] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (search < 3) {
      getServices();
      return;
    }

    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(
          BASE_CONFIG.API_URL +
            "/services/search/findByServiceName?name=" +
            search,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Auth": jwt,
            },
          }
        )
          .then((e) => e.json())
          .then((res) => {
            if (!res._embedded.services) {
              return;
            }
            setMarketData(res._embedded.services.sort((a, b) => b.id - a.id));
          });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const stripe = useStripe();

  const getServices = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services?page=0&size=1000", {
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

            if (props.applicationState.user.roleValue >= 5) {
              setMarketData(res._embedded.services.filter(s => s.author.userCode !== props.applicationState.user.userCode).sort((a, b) => b.id - a.id));
            } else {
              setMarketData(res._embedded.services.sort((a, b) => b.id - a.id));
            }
          });
      });
  };

  const handlePurchase = (item) => {
    setInPurchasing(item.id);

    if (!isProfileComplete(props.applicationState.user)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "È necessario completare il profilo prima di acquistare!",
      });

      setInPurchasing(false);
      return;
    }

    TokenManager.getInstance().getToken()
    .then(jwt => {
        fetch(`${BASE_CONFIG.API_URL}/pps/payments/${item.id}/${props.applicationState.user.userCode}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          }
        })
          .then((response) => response.headers.get("X-Stripe-Session-Id"))
          .then((stripeSessionId) => {
            stripe.redirectToCheckout({ sessionId: stripeSessionId });
          });
      });
  };

  const handleFreeSubscription = (item) => {
    setInPurchasing(item.id);

    if (!isProfileComplete(props.applicationState.user)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "È necessario completare il profilo prima di acquistare!",
      });

      setInPurchasing(false);
      return;
    }

    TokenManager.getInstance().getToken()
    .then(jwt => {
        fetch(`${BASE_CONFIG.API_URL}/subscriptions`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            subscriber: props.applicationState.user._links.self.href,
            service: `${BASE_CONFIG.API_URL}/services/${item.id}`,
            captured: 1,
            paymentSystemToken: 'free-service',
            subscribedOn: moment(moment().toDate()).format("YYYY-MM-DDTHH:mm:ss.SSS")
          })
        })
        .then(e => {
          window.location = "/dashboard/my-services";
        })
      });
  };

  return (
    <Aux>
      <Row className="mb-5" style={{ marginTop: "-0.85rem" }}>
        <Col>
          <Form.Control
            type="text"
            onChange={({ target }) => setSearch(target.value)}
            style={{ backgroundColor: "white", borderRadius: 4 }}
            placeholder={"Ricerca veloce..."}
            className={"border-0"}
          />
        </Col>
      </Row>
      <Row md={12}>
        <MarketCard
          marketData={marketData}
          inPurchasing={inPurchasing}
          handlePurchase={handlePurchase}
          handleFreeSubscription={handleFreeSubscription}
          user={props.applicationState.user}
        />
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
