import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TokenManager from '../../App/auth/TokenManager';
import LocaleNumber from '../../App/components/LocaleNumber';
import Sports from '../../App/components/Sports';
import Aux from '../../hoc/_Aux';
import BASE_CONFIG from "../../store/config";
import { getClassNameForOutcome } from './TipCard';
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const TipDetail = (props) => {
    const [pool, setPool] = useState({service: {}, events: [], author: {}});
    const [tipAuthor, setTipAuthor] = useState();
    const [subscriptions, setSubscriptions] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noAccess, setNoAccess] = useState();
    const [amAuthor, setAmAuthor] = useState(false);
    const [motivation, setMotivation] = useState();
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        callUrl(BASE_CONFIG.API_URL + "/users/" + props.applicationState.user.userCode + "/subscriptions")
        .then(r => r.json())
        .then(subscriptions => {
            let servicesArray = [];
            
            subscriptions._embedded && subscriptions._embedded.subscriptions.filter(s => s.valid).forEach(s => 
                callUrl(s._links.services.href.replace("{?projection}", ""))
                .then(response => response.json())
                .then(result => servicesArray.push(result.id))
                .then(() => setServices(servicesArray))
            )

            setSubscriptions(subscriptions._embedded ? subscriptions._embedded.subscriptions : [])
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const poolId = urlParams.get('p');

        if (poolId) {
            callUrl(BASE_CONFIG.API_URL + "/pools/" + poolId)
            .then(r => r.json())
            .then(pool => {
                if(services.indexOf(pool._embedded.service.id) >= 0) {
                    if(pool._embedded.service.author.userCode === props.applicationState.user.userCode) {
                        setAmAuthor(true);
                        setMotivation(pool.motivation);
                    }

                    loadUser(pool._links.author.href)
                    setPool({...pool, service: pool._embedded.service, events: pool._embedded.events, author: {}, id: poolId})
                    setNoAccess(false)
                } else {
                    setNoAccess(true)
                }
            })
            .then(() => setLoading(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subscriptions, services]);

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

    const loadUser = (href) => {
        callUrl(`${href}`)
            .then(setTipAuthor)
    }

    const followTip = (direction) => {
        let {user} = props.applicationState;

        let followLink;
        if (direction === 1) {
          followLink = BASE_CONFIG.API_URL + `/played-pools/${user.userCode}/${pool.id}`;
        } else if (direction === -1) {
          followLink =
            BASE_CONFIG.API_URL + `/unplayed-pools/${user.userCode}/${pool.id}`;
        }
    
        postFollow(followLink)
        //.then(() => window.location = '/dashboard/pending-tips')
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

    const updateTip = () => {
        setSaving(true);
        return TokenManager.getInstance()
          .getToken()
          .then((jwt) => {
            return fetch(BASE_CONFIG.API_URL + "/pools/" + pool.id, {
              headers: {
                "Content-Type": "application/json",
                "X-Auth": jwt,
              },
              method: "PATCH",
              body: JSON.stringify({
                  motivation
              })
            });
        }).then(() => {
            setSaving(false)
        });
    }
    
    return (
        <Aux>
            <div>
                <Row className="">
                    <Col md={12} lg={12} sm={12} xs={12} xl={12}>
                        {loading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>}
                        {!loading && noAccess && <Card className="user-card">
                            <Card.Body className="">
                                <Card.Title>
                                    <h4>
                                       Stai tentando di accedere ad una tip che a cui non hai accesso! 
                                    </h4>
                                </Card.Title>
                            </Card.Body>
                        </Card> }
                        {!loading && !noAccess && 
                        <Card className="user-card">
                            <Card.Body className="">
                                <Card.Title>
                                    <h4 as="h4">
                                        <strong>{pool.description}</strong> 
                                        {pool.outcome && <span className={getClassNameForOutcome(pool.outcome) + " pull-right"} style={{fontSize: '13px', position: "relative"}} >
                                            {pool.outcome}{' '}
                                            <LocaleNumber amount={pool.profit} symbol={"%"} />
                                        </span>}
                                    </h4>
                                </Card.Title>
                                <Row className={"mb-4 pt-2"} style={{borderTop: "1px solid #f5f5f5"}}>
                                    <Col md={12} sm={12} xs={12} lg={12}>
                                        <Row style={{marginTop: 0, borderBottom: '1px solid #e8e8e8'}}>
                                            {/* <span className={"sectionTitle"}>Tipster</span> */}
                                            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, padding: "20px"}}>
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
                                                    <span className={"ml-2"}>{ tipAuthor && tipAuthor.name }</span>
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
                                        </Row>
                                        <Row>
                                            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, flexDirection: 'row', padding: '20px'}}>
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
                                        </Row>
                                        <Row style={{wordBreak: 'break-word', borderBottom: '1px solid #e8e8e8', padding: '20px'}}>
                                            <span className={"sectionTitle"} style={{marginTop: "-15px", marginBottom: "20px"}}>Eventi</span>
                                            {/* <Carousel controls={false} interval={null}> */}
                                                {pool.events.map(event => (
                                                    <Col key={event.id} md={12} >
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
                                                    </Col>
                                                ))}
                                            {/* </Carousel> */}
                                        </Row>
                                        { pool.motivation && !amAuthor && <Row style={{wordBreak: 'break-word', borderBottom: '1px solid #e8e8e8', padding: '20px', marginTop: "10px", flexDirection: 'column'}}>
                                            <span className={"sectionTitle"} style={{marginTop: "-15px"}}>Motivazione</span>
                                            <div style={{display: "block", marginTop: "10px"}}>
                                                {pool.motivation}
                                            </div>
                                        </Row>}

                                        {amAuthor && <Row style={{wordBreak: 'break-word', borderBottom: '1px solid #e8e8e8', padding: '20px', marginTop: '10px'}}>
                                            <span className={"sectionTitle"} style={{marginTop: "-15px", marginBottom: "20px"}}>Motivazione</span>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                name="motivation"
                                                disabled={saving}
                                                placeholder="Motivazione"
                                                value={motivation}
                                                onChange={({ target }) => {
                                                    setMotivation(target.value);
                                                }}
                                            />
                                            <div style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', display: 'flex'}}>
                                                <Button variant="primary" className={'btn-sm'} style={{borderRadius: "60px", marginTop: "-32px"}} disabled={saving} onClick={() => {
                                                    updateTip()
                                                }}><em className={saving ? "fa fa-check" : "fa fa-check"} /></Button>
                                            </div>
                                        </Row>}

                                        <Row style={{wordBreak: 'break-word', borderBottom: '1px solid #e8e8e8', padding: '20px', flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                                            <Button variant="primary" style={{flex: 1, margin: '0 5px'}} onClick={() => {
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
                                                }}><em className={"fa fa-check"} />   Segui</Button>

                                            <Button variant="primary" style={{flex: 1, margin: '0 5px'}} onClick={() => {
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
                                            }}><em className={"fa fa-times"} />   Ignora</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>}
                    </Col>
                </Row>
            </div>
        </Aux>)
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipDetail);