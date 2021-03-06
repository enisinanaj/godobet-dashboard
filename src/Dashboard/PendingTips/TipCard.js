import moment from "moment";
import React, { useEffect, useState } from "react";
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
import '../TipsterPools/tipsterCard.css'
import Aux from "../../hoc/_Aux";

const getDropdown = (clickHandler) => {
  return (
    <Dropdown className="drp-tipster-pool">
      <Dropdown.Toggle
        style={{ display: "inline", float: "right" }}
        variant={"light"}
      ></Dropdown.Toggle>
      <Dropdown.Menu alignRight className="profile-notification">
        <Dropdown.Item onClick={() => {
          Swal.fire({
            title: "Sei sicuro di voler seguire questa tip? Azione irreversibile!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#56BE7F",
            cancelButtonColor: "#000",
            confirmButtonText: "si",
          }).then((result) => {
            if (result.value) {
              clickHandler(1);
            }
          });
        }}>
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

const getTipText = (pool, setShowMotivation) => {
  return (
    <Carousel controls={false} interval={null} onClick={() => setShowMotivation(true)}>
      {pool.events.map((event) => (
        <Carousel.Item key={event.eventCode}>
          <div style={{ height: 120, flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <Row>
              <Col lg={12} sm={12} xs={12} xl={12} className={"mb-1"} style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                {Sports.find((s) => s.value === event.sport) ? (
                  Sports.find((s) => s.value === event.sport).icon
                ) : (
                  <em className={"feather icon-aperture"}></em>
                )}{" "}
                <span>
                  {event.competition}
                </span>
              </Col>
              <Col lg={12} sm={12} xs={12} xl={12} className={"mb-1"}>
                {event.event}
              </Col>
              <Col lg={12} sm={12} xs={12} xl={12} className={"mb-1"}>
                <i className="feather icon-play" /> {event.proposal}
              </Col>
              <Col lg={6} sm={5} xs={5} xl={6} className={"mb-1"}>
                <i className="feather icon-at-sign" />{" "}
                <LocaleNumber amount={event.quote / 100} symbol={""} />
              </Col>
              <Col lg={6} sm={7} xs={7} xl={6} style={{ display: "inline-block" }} className={"text-right"}>
                <em className="feather icon-clock"></em>{" "}
                {!event.live && moment(event.eventDate).format("DD/MM/YY HH:mm")}
                {event.live && <span className={"badge badge-light-info pulse pulsate"}>LIVE</span>}
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between", flex: 1, flexDirection: "row", }}>
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
  const [tipAuthor, setTipAuthor] = useState({});

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

  useEffect(() => {
    loadUser(pool.author.userCode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const avatar = () => {
    if (
      tipAuthor && tipAuthor._embedded &&
      tipAuthor._embedded.media &&
      tipAuthor._embedded.media.filter((m) => m.mediaType === "avatar")
        .length > 0
    ) {
      return tipAuthor._embedded.media
        .filter((m) => m.mediaType === "avatar")
        .sort((a, b) => b.id - a.id)[0].url;
    }
    return null;
  };

  const load = (url, args = {}) => {
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          ...args,
        })
      )
      .then((e) => e.json());
  }

  const loadUser = (userCode) => {
    load(`${config.API_URL}/users/${userCode}`)
        .then(setTipAuthor)
  }

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
    <Aux>
      <Card className={"light"} text={""} style={{cursor: 'pointer'}}>
        <Card.Body>
          {/* className={'text-white'} */}
          <Card.Title as="h5">
            <span onClick={() => setShowMotivation(true)}>
              {pool.description}
            </span>
            {debug ? (
              <span className={"badge badge-light-danger"}>{pool.id}</span>
            ) : null}
            {DropdownHiddenState || getDropdown(followTip)}
            {pool.outcome && (
              <span className={getClassNameForOutcome(pool.outcome) + " pull-right"}>
                {pool.outcome} <LocaleNumber amount={pool.profit} symbol={"%"} />
              </span>
            )}
          </Card.Title>
          {getTipText(pool, setShowMotivation)}
        </Card.Body>
        <Card.Footer onClick={() => setShowMotivation(true)}>
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
              <LocaleNumber amount={pool.totalQuote} symbol={""} />
            </div>
          </div>
          {false && <div style={{ display: "flex", marginTop: "15px", flexDirection: "row", justifyContent: "space-between"}}>
            <span
              onClick={() => setShowMotivation(true)}
              className={"badge badge-light-default float-right mr-2"}
              style={{ cursor: "pointer" }}
            >
              DETTAGLI
            </span>
            <a href={"/dashboard/service/" + pool.serviceId} target="_blank" style={{textDecoration: 'underline'}} rel="noopener noreferrer">
              {pool.service.serviceName} <em className={"feather icon-external-link"}></em>
            </a>
          </div>}
        </Card.Footer>
      </Card>
      <Modal show={showMotivation} onHide={() => setShowMotivation(false)}>
        <Modal.Header closeButton>
            <Modal.Title as="h4">
                <strong>{pool.description}</strong> {pool.outcome && <span className={getClassNameForOutcome(pool.outcome)} style={{fontSize: '13px', top: "-5px", position: "relative"}} >
                    {pool.outcome}{' '}
                    <LocaleNumber amount={pool.profit} symbol={"%"} />
                </span>}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginTop: 0, borderBottom: '1px solid #e8e8e8'}}>
            {/* <span className={"sectionTitle"}>Tipster</span> */}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: "inline"}}>
                    {avatar() && <img
                        src={avatar()}
                        style={{ objectFit: "cover", height: 40, width: 40, borderRadius: 20 }}
                        className="img-radius"
                        alt="User Profile"
                    /> }
                    { !avatar() 
                      && <img
                      src={require('../../assets/images/godobet-placeholder.jpg')}
                      style={{ objectFit: "cover", height: 40, width: 40, borderRadius: 20 }}
                      className="img-radius"
                      alt="User Profile"
                    />}
                    { tipAuthor && <span className={"ml-2"}> { tipAuthor.username || tipAuthor.name }</span> }
                </div>
                <div style={{display: "inline"}}>
                    <span className={"sectionTitle"}>Pubblicata il</span>
                    {moment(pool.createdOn).format("DD MMM YYYY HH:mm")}
                </div>
                <div style={{display: "inline"}}>
                    <span className={"sectionTitle"}>Servizio</span>
                    <a href={"/dashboard/service/" + pool.serviceId} target="_blank" style={{textDecoration: 'underline'}} rel="noopener noreferrer">
                        {pool.service.serviceName} <em className={"feather icon-external-link"}></em>
                    </a>
                </div>
            </div>
        </Modal.Body>
        <Modal.Body>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: "inline"}}>
                    <span className={"sectionTitle"}>Bookmaker</span>
                    <i className="feather icon-book" /> {pool.bookmaker}
                </div>
                <div style={{display: "inline"}}>
                    <span className={"sectionTitle"}>Stake</span>
                    <i className="feather icon-pie-chart" />{" "}
                    <LocaleNumber amount={pool.stake / 100} symbol={"%"} />
                </div>
                <div style={{display: "inline"}}>
                    <span className={"sectionTitle"}>Quota</span>
                    <i className="feather icon-at-sign" />{" "}
                    <LocaleNumber amount={pool.totalQuote} symbol={""} />
                </div>
            </div>
        </Modal.Body>
        <Modal.Body style={{wordBreak: 'break-word', borderBottom: '1px solid #e8e8e8'}}>
            <span className={"sectionTitle"} style={{marginTop: "-15px", marginBottom: "20px"}}>Eventi</span>
            {/* <Carousel controls={false} interval={null}> */}
                {pool.events.map(event => (
                    <div key={event.eventCode}>
                        <div style={{minHeight: "90px", flex: 1, flexDirection: 'column', justifyContent: 'space-between', border: "1px solid #e8e8e8"}} className={"p-2 mt-1"}>
                            <Row>
                                <Col lg={12} sm={12} xs={12} xl={12}>
                                    {Sports.find(s => s.value === event.sport) ? Sports.find(s => s.value === event.sport).icon : <em className={"feather icon-aperture"}></em>}{" "}
                                    {event.competition} / {event.event}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-play" /> {event.proposal}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-at-sign" /> <LocaleNumber amount={(event.quote / 100)} symbol={""} />
                                </Col>
                            </Row>
                            <Row style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
                                <Col  lg={12} sm={12} xs={12} xl={12} style={{display: 'inline'}}>
                                    <em className="feather icon-clock"></em> {" "}
                                    {!event.live && moment(event.eventDate).format("DD MMM yyyy HH:mm")}
                                    {event.live && <span className={"badge badge-light-info pulse pulsate"}>LIVE</span>}
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))}
            {/* </Carousel> */}
        </Modal.Body>
        {pool.motivation && <Modal.Body style={{borderBottom: '1px solid #e8e8e8'}}>
            <span className={"sectionTitle"}>Motivazione</span>
            {pool.motivation}
        </Modal.Body>}
        <Modal.Footer className={"pt-2"}>
            {DropdownHiddenState || <Button variant="primary" onClick={() => {
              setShowMotivation(false);
              Swal.fire({
                title: "Sei sicuro di voler seguire questa tip? Azione irreversibile!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#56BE7F",
                cancelButtonColor: "#000",
                confirmButtonText: "si",
              }).then((result) => {
                if (result.value) {
                  followTip(1);
                }
              })
            }}>Segui</Button>}
            {DropdownHiddenState || <Button variant="primary" onClick={() => {
              setShowMotivation(false);
              Swal.fire({
                title: "Sei sicuro di non volerla seguire? Azione irreversibile!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#56BE7F",
                cancelButtonColor: "#000",
                confirmButtonText: "si",
              }).then((result) => {
                if (result.value) {
                  followTip(-1);
                }
              });
            }}>Ignora</Button>}
        </Modal.Footer>
      </Modal>
    </Aux>
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
