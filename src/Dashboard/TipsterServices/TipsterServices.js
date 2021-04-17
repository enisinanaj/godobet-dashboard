import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import ServiceCard from "./ServiceCard";
import TokenManager from "../../App/auth/TokenManager";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import BASE_CONFIG from "../../store/config";
import CustomAlert from "./CustomAlert";

const TipsterServices = (props) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getServices = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(
          BASE_CONFIG.API_URL +
            "/users/" +
            props.applicationState.user.userCode +
            "/services?page=0&size=1000",
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
          });
      });
  };

  return (
    <Aux>
      <Row md={12}>
        {(!services || services.length === 0) && <CustomAlert message={"Non hai nessun servizio in vendita!"} />}
        <ServiceCard services={services} setServices={setServices} />
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipsterServices);
