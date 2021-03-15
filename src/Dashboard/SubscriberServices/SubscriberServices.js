import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Aux from "../../hoc/_Aux";
import SubscriberCard from "./SubscriberCard";

import Swal from "sweetalert2";
import TokenManager from "../../App/auth/TokenManager";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import BASE_CONFIG from "../../store/config";

const SubscriberServices = (props) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(
          BASE_CONFIG.API_URL +
            "/users/" +
            props.applicationState.user.userCode +
            "/services",
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
            let sortedServices = res._embedded.services.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
            setServices(sortedServices);
            console.log(sortedServices);
          });
      });
  };

  return (
    <Aux>
      <h1>I miei servizi</h1>
      <div style={{ textAlign: "center" }}>
        <Link to="create-new">
          <button className="btn btn-primary shadow-2 mb-4">
            Nuovo servizio
          </button>
        </Link>
      </div>
      <Row md={12}>
        <SubscriberCard services={services} setServices={setServices} />
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriberServices);
