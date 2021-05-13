import React, { useEffect, useState } from "react";
import { Col, Card, Carousel, Dropdown, Row, Modal, Button } from "react-bootstrap";
import moment from 'moment'
import TokenManager from "../../App/auth/TokenManager";
import 'moment/locale/it';
import config from "../../store/config";
import Sports from '../../App/components/Sports'
import { getClassNameForOutcome } from '../PendingTips/TipCard'
import LocaleNumber from "../../App/components/LocaleNumber";
import './tipsterCard.css'
import Swal from "sweetalert2";

moment.locale("it")

const Tip = props => {
    let {pool} = props;

    const [showMotivation, setShowMotivation] = useState(false);
    const [user, setUser] = useState(props.user);

    useEffect(() => {
        //loadUser(pool.author.userCode)
    }, [])

    const avatar = () => {
        if (
          user && user._embedded &&
          user._embedded.media &&
          user._embedded.media.filter((m) => m.mediaType === "avatar")
            .length > 0
        ) {
          return user._embedded.media
            .filter((m) => m.mediaType === "avatar")
            .sort((a, b) => b.id - a.id)[0].url;
        }
        return null;
    };

    const loadUser = (userCode) => {
        load(`${config.API_URL}/users/${userCode}`).then(setUser)
    }

    const followTip = (direction) => {
        let followLink;
        if (direction === 1) {
          followLink = config.API_URL + `/played-pools/${user.userCode}/${pool.id}`;
        } else if (direction === -1) {
          followLink =
            config.API_URL + `/unplayed-pools/${user.userCode}/${pool.id}`;
        }
    
        postFollow(followLink);
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

    const askForUpdate = (outcome) => {
        Swal.fire({
            title: "Sei sicuro di voler refertare questa tip? Azione irreversibile!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#56BE7F",
            cancelButtonColor: "#000",
            confirmButtonText: "si",
        }).then((result) => {
            if (result.value) {
              updateTip(outcome);
            }
        });
    }

    const updateTip = async (outcome) => {
        var token = await TokenManager.getInstance().getToken();
        await fetch(config.API_URL + "/ops/pools/status/" + pool.id + "/" + outcome, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Auth": token },
            body: JSON.stringify({outcome}),
        })
        .then(() => props.callback());
    };

    return (
    <Col key={pool.id} md={4} lg={4} xl={4} xs={12} sm={6}>
        {/* style={{background: "#e83e8c"}} */}
        <Card className={"light"} text={''}>
            <Card.Body>
                {/* className={'text-white'} */}
                <Card.Title as="h5">
                    {pool.description}
                    {!pool.outcome && props.author && <Dropdown className="drp-tipster-pool">
                        <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <Dropdown.Item onClick={() => {askForUpdate("win")}}>Win</Dropdown.Item>
                            <Dropdown.Item onClick={() => {askForUpdate("12win")}}>1/2 Win</Dropdown.Item>
                            <Dropdown.Item onClick={() => {askForUpdate("lose")}}>Lose</Dropdown.Item>
                            <Dropdown.Item onClick={() => {askForUpdate("12lose")}}>1/2 Lose</Dropdown.Item>
                            <Dropdown.Item onClick={() => {askForUpdate("void")}}>Void</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {!props.author && !props.played && <Dropdown className="drp-tipster-pool">
                        <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
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
                                        followTip(1);
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
                                                followTip(-1);
                                            }
                                        });
                                    }}
                                >
                                    Ignora
                                </Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>}
                    <span onClick={() => setShowMotivation(true)} className={"badge badge-light-info float-right mr-2"} style={{ cursor: 'pointer' }} >
                        DETTAGLI    
                    </span>
                </Card.Title>
                <Carousel controls={false} interval={null}>
                {pool.events.map(event => (
                    <Carousel.Item key={event.eventCode}>
                        <div style={{minHeight: "90px", flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Row>
                                <Col lg={12} sm={12} xs={12} xl={12} style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} className={"mb-1"}>
                                    {Sports.find(s => s.value === event.sport) ? Sports.find(s => s.value === event.sport).icon : <em className={"feather icon-aperture"}></em>}{" "}
                                    <span>
                                        {event.competition} / {event.event}
                                    </span>
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6} className={"mb-1"}>
                                    <i className="feather icon-play" /> {event.proposal}
                                </Col>
                                <Col lg={6} sm={5} xs={5} xl={6} className={"mb-1"}>
                                    <i className="feather icon-at-sign" /> <LocaleNumber amount={(event.quote / 100)} symbol={""} />
                                </Col>
                                <Col  lg={6} sm={7} xs={7} xl={6} style={{display: 'inline'}}>
                                    <em className="feather icon-clock"></em> {" "}
                                    {!event.live && moment(event.eventDate).format("DD MMM yyyy HH:mm")}
                                    {event.live && <span className={"badge badge-light-info pulse pulsate"}>LIVE</span>}
                                </Col>
                            </Row>
                            <Row style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
                            </Row>
                        </div>
                    </Carousel.Item>
                ))}
                </Carousel>
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
                        <LocaleNumber amount={pool.totalQuote} symbol={""} />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: "15px", flexDirection: "row", justifyContent: "space-between"}}>
                    {pool.outcome && <span className={getClassNameForOutcome(pool.outcome)} >{pool.outcome} <LocaleNumber amount={pool.profit} symbol={"%"} /></span>}
                    <a href={"/dashboard/service/" + pool.serviceId} target="_blank" style={{textDecoration: 'underline'}} rel="noopener noreferrer">
                        {pool.service.serviceName} <em className={"feather icon-external-link"}></em>
                    </a>
                </div>
            </Card.Footer>
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
                                { !avatar() && <img
                                    src={require('../../assets/images/godobet-placeholder.jpg')}
                                    style={{ objectFit: "cover", height: 40, width: 40, borderRadius: 20 }}
                                    className="img-radius"
                                    alt="User Profile"
                                /> }
                                <span className={"ml-2"}>{ user && user.name }</span>
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
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowMotivation(false)}>Chiudi</Button>
                    </Modal.Footer>
                </Modal>
        </Card>
    </Col>);
}

export default Tip;