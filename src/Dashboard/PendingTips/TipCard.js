import moment from "moment";
import React, { useState } from "react";
import {
  Dropdown,
  Card,
  Carousel,
  Modal,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TokenManager from "../../App/auth/TokenManager";
import LocaleNumber from "../../App/components/LocaleNumber";
import Sports from "../../App/components/Sports";
import * as actions from "../../store/actions";
import config from "../../store/config";
import Swal from "sweetalert2";

const getDropdown = (clickHandler) => {
  return (
    <Dropdown className="drp-tipster-pool">
      <Dropdown.Toggle
        style={{ display: "inline", float: "right" }}
        variant={"light"}
      ></Dropdown.Toggle>
      <Dropdown.Menu alignRight className="profile-notification">
        <Dropdown.Item onClick={() => clickHandler(1)}>
          Segui
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            Swal.fire({
              title: "Sei sicuro di non volerla seguire? Azione irreversibile!",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#56BE7F",
              cancelButtonColor: "#000",
              confirmButtonText: "si",
            }).then((result) => {
              if (result.value) {
                clickHandler(-1);
              }
            });
          }}
        >
          Ignora
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const getClassNameForOutcome = (outcome) => {
  switch (outcome) {
    case "win":
      return "badge badge-light-success";
    case "loose":
    case "lose":
      return "badge badge-light-danger";
    case "void":
      return "badge badge-light-info";
    default:
      return "badge badge-light-warning";
  }
};

const getTipText = (pool) => {
  return (
    <Carousel controls={false} interval={null}>
      {pool.events.map((event) => (
        <Carousel.Item key={event.eventCode}>
          <div style={{ height: 90, flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <Row>
              <Col lg={12} sm={12} xs={12} xl={12}>
                {Sports.find((s) => s.value === event.sport) ? (
                  Sports.find((s) => s.value === event.sport).icon
                ) : (
                  <em className={"feather icon-aperture"}></em>
                )}{" "}
                {event.competition} / {event.event}
              </Col>
              <Col lg={6} sm={12} xs={12} xl={6}>
                <i className="feather icon-play" /> {event.proposal}
              </Col>
              <Col lg={6} sm={12} xs={12} xl={6} className={"text-right"}>
                <i className="feather icon-at-sign" />{" "}
                <LocaleNumber amount={event.quote / 100} symbol={""} />
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between", flex: 1, flexDirection: "row", }}>
              <Col lg={12} sm={12} xs={12} xl={12} style={{ display: "inline-block" }}>
                <em className="feather icon-clock"></em>{" "}
                {moment(event.eventDate).format("DD MMM yyyy HH:mm")}
              </Col>
            </Row>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const TipCard = ({ pool, user, dropdownHidden, actions, debug }) => {
  const [DropdownHiddenState, setDropdownHiddenState] = useState(
    dropdownHidden
  );
  const [showMotivation, setShowMotivation] = useState(false);

  const followTip = (direction) => {
    let followLink;
    if (direction === 1) {
      followLink = config.API_URL + `/played-pools/${user.userCode}/${pool.id}`;
    } else if (direction === -1) {
      followLink =
        config.API_URL + `/unplayed-pools/${user.userCode}/${pool.id}`;
    }

    postFollow(followLink)
      .then((_) => setDropdownHiddenState(true))
      .then(reloadUser);
  };

  const postFollow = (url) => {
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          method: "POST",
        });
      });
  };

  const reloadUser = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((localUser) => {
            actions.userLogin({
              ...user,
              ...localUser,
            });
          });
      });
  };

  return (
    <Card className={"light"} text={""}>
      <Card.Body>
        {/* className={'text-white'} */}
        <Card.Title as="h5">
          {pool.description}
          {debug ? (
            <span className={"badge badge-light-danger"}>{pool.id}</span>
          ) : null}
          {DropdownHiddenState || getDropdown(followTip)}
          {pool.motivation && (
            <span
              onClick={() => setShowMotivation(true)}
              className={"badge badge-light-info float-right mr-2"}
              style={{ cursor: "pointer" }}
            >
              MOTIVAZIONE
            </span>
          )}
        </Card.Title>
        {getTipText(pool)}
      </Card.Body>
      <Card.Footer>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: "inline"}}>
            <i className="feather icon-book" /> {pool.bookmaker}
          </div>
          <div style={{display: "inline"}}>
            <i className="feather icon-pie-chart" />{" "}
            <LocaleNumber amount={pool.stake / 100} symbol={"%"} />
          </div>
          <div style={{display: "inline"}}>
            <i className="feather icon-at-sign" />{" "}
            <LocaleNumber amount={pool.quote} symbol={""} />
          </div>
        </div>
        {pool.outcome && (
          <div style={{ display: "flex", marginTop: "15px", flexDirection: "row", justifyContent: "space-between"}}>
            <span className={getClassNameForOutcome(pool.outcome)}>
              {pool.outcome} <LocaleNumber amount={pool.profit} symbol={"%"} />
            </span>
            <a href={"/dashboard/service/" + pool.serviceId} target="_blank" style={{textDecoration: 'underline'}} rel="noopener noreferrer">
              {pool.service.serviceName} <em className={"feather icon-external-link"}></em>
            </a>
          </div>
        )}
      </Card.Footer>
      {pool.motivation && (
        <Modal show={showMotivation} onHide={() => setShowMotivation(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">
              Motivazione Tip - <strong>{pool.description}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ wordBreak: "break-word" }}>
            {pool.motivation}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowMotivation(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  applicationState: state,
  user: state.user,
  loggedIn: state.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipCard);
