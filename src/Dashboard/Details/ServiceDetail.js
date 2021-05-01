import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import Aux from "../../hoc/_Aux";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";
import { withRouter } from "react-router-dom";
import Chart from "react-apexcharts";
import '../Marketplace/Marketplace.css'
import CoverImage from '../../assets/images/godobet-placeholder.jpg'

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PriceLabel from '../../App/components/PriceLabel';
import { useStripe } from "@stripe/react-stripe-js";
import md5 from "md5";
import Tip from "../TipsterPools/Tip";
import LocaleNumber from "../../App/components/LocaleNumber";
import moment from "moment";
import { isProfileComplete } from "../../App/components/UserUtil";
import Swal from "sweetalert2";

const ServiceDetail = (props) => {
  const [winRatio, setWinRatio] = useState(0)
  const [series, setSeries] = useState([
    {
      data: []
    }
  ])

  const options = {
    chart: {
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: true
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -99999,
                    to: 0,
                    color: '#b70505'
                }, {
                    from: 0,
                    to: 9999999,
                    color: '#37ad1d'
                }]
            },
            columnWidth: '50%',
        }
    },
    xaxis: {
        categories: [],
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (_) => 'Profit: '
            }
        },
        marker: {
            show: false
        }
    }
  }

  const [pools, setPools] = useState([])
  const [purchasable, setPurchasable] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentObject, setCurrentObject] = useState();
  const [author, setAuthor] = useState({
    name: '',
    lastName: '',
    _embedded: {
      media: [
        {
          url: '',
        },
      ],
      services: [],
    },
  });

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  ).replace('#', '');

  const getLatestImage = (media) => {
    if (!media._embedded || media.length === 0 || !media._embedded.serviceMedia) {
      return CoverImage;
    }

    return media._embedded.serviceMedia.sort((a, b) => b.id - a.id)[0].url;
  };

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(BASE_CONFIG.API_URL + "/services/" + id, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
      })
      .then((e) => e.json())
      .then((object) => {
        setCurrentObject(object);
      })
      .catch(() => window.location = "/maintenance/error");
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

  useEffect(() => {
    callUrl(BASE_CONFIG.API_URL + '/services/' + id + '/author')
      .then(e => e.json()).then(author => {
        setAuthor(author)
        if (author.userCode === props.applicationState.user.userCode) {
          setPurchasable(false);
        }

        const winRatioVar = author._embedded.playedPools?.filter(res => {
          return res.outcome === 'win'
        })
        let percentage = ((winRatioVar?.length / author._embedded.playedPools?.length) * 100)
        setWinRatio(percentage)
      })

    if (props.applicationState.user.roleValue >= 4) {
      callUrl(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/subscriptions')
        .then(e => e.json()).then(subscriptions => {
          if(currentObject && currentObject._links) {
            const subscription = subscriptions._embedded.subscriptions.find(sub => sub.serviceId === Number(id) && sub.valid);
            if (!subscription) {
              setPurchasable(true);
            } else {
             callUrl(BASE_CONFIG.API_URL + '/services/' + id + '/pools')
              .then(e => e.json().then(pools => {
                setPools(pools._embedded.pools);
                let last30dPools = pools._embedded.pools.filter(p => (new Date() - new Date(p.updatedOn)) <= (30 * 24 * 60 * 60 * 1000))
                const profit = last30dPools.map(pool => ({y: pool.profit.toFixed(2), x: moment(pool.updatedOn).format("DD MMM YYYY")}))
                setSeries([{data: profit}])
              }))
            }
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentObject])

  const getAvatar = () => {
    if (!author._embedded || !author._embedded.media || author._embedded.media.filter(m => m.mediaType === 'avatar').length < 1) {
      return "http://www.gravatar.com/avatar/" + md5(author.email.toLowerCase().trim()) + "?s=32"
    }

    return author._embedded.media.filter(m => m.mediaType === 'avatar').sort((a,b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime())[0].url;
  };
  
  const stripe = useStripe();

  const handlePurchase = (link) => {
    setIsProcessing(true);

    if (!isProfileComplete(props.applicationState.user)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "È necessario completare il profilo prima di acquistare! Vai sul menu Impostazioni > Account per completare i dati mancanti.",
      });

      setIsProcessing(false);
      return;
    }

    TokenManager.getInstance().getToken()
    .then(jwt => {
        fetch(`${BASE_CONFIG.API_URL}/pps/payments/${link.substring(link.lastIndexOf("/") + 1)}/${props.applicationState.user.userCode}`, {
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
          setIsProcessing(false);
        })
    })
  };

  const handleFreeServiceSubscription = () => {
    setIsProcessing(true);

    if (!isProfileComplete(props.applicationState.user)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "È necessario completare il profilo prima di acquistare!",
      });

      setIsProcessing(false);
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
            service: currentObject._links.self.href,
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
      {currentObject && author.name ? (
        <div>
          <Row className="mb-n4">
            <Col sm={12} className={"mt-4"}>
              <Card className="user-card">
                <Card.Body className="pt-0">
                  <div className="user-about-block">
                    <Row className="align-items-center mb-4">
                      <Col md={3}>
                        <div className="change-profile">
                          <img
                            width="150px"
                            height="150px"
                            style={{objectFit:'cover'}}
                            // className=" img-fluid"
                            src={getLatestImage(currentObject)}
                            alt="User"
                          />
                        </div>
                      </Col>
                      <Col md={7} className={"mb-2"}>
                        <h4 className="mb-2 mt-5 p-1">{currentObject.serviceName}</h4>
                        <Row>
                          <Col style={{textAlign: 'center'}}>
                            {!currentObject.free && <span>
                              <span style={{fontSize: '15px'}}> {" "}
                              <i
                                className="feather icon-dollar-sign"
                                style={{ paddingRight: "5px" }}
                              />{" "}Prezzo<br /><strong><PriceLabel amount={currentObject.price/100}></PriceLabel></strong></span>
                            </span>}
                            {currentObject.free && <span>
                              <span style={{fontSize: '15px'}} className={"text-success"}>Gratis</span>
                            </span>}
                          </Col>
                          <Col style={{textAlign: 'center'}}>
                            <span>
                              <span style={{fontSize: '15px'}}> {" "}
                              <i
                                className="feather icon-calendar"
                                style={{ paddingRight: "5px" }}
                              />{" "}Durata<br /><strong>{currentObject.duration} giorni</strong></span>
                            </span>
                          </Col>
                          <Col style={{textAlign: 'center'}}>
                            <span>
                              <span style={{fontSize: '15px'}}>{" "}
                              <i
                                className="feather icon-users"
                                style={{ paddingRight: "5px" }}
                              />{" "}Iscritti<br /><strong>{currentObject.subscribersCount} su {currentObject.maxSubscribers}</strong></span>
                            </span>
                          </Col>
                          <Col style={{textAlign: 'center'}}>
                              <span style={{fontSize: '15px'}} className={(currentObject.totalProfit >= 0) ? 'text-success' : 'text-danger'}>{" "}
                              <i
                                className={currentObject.totalProfit >= 0 ? "feather icon-chevrons-up" : "feather icon-chevrons-down"}
                                style={{ paddingRight: "5px" }}
                              />{" "}
                              Profitto<br /><strong><LocaleNumber amount={currentObject.totalProfit} symbol={"%"}></LocaleNumber></strong> </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2}>
                        {!currentObject.free && purchasable && <div style={{ display: "flex", justifyContent: "center" }} >
                          <Button onClick={() => handlePurchase(currentObject._links.self.href)} disabled={isProcessing} >
                            {isProcessing ? (
                              <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                            ) : null }{" "}
                            Iscriviti
                          </Button>
                        </div>}
                        {currentObject.free && purchasable && <div style={{ display: "flex", justifyContent: "center" }} >
                          <Button onClick={() => handleFreeServiceSubscription(currentObject._links.self.href)} disabled={isProcessing} >
                            {isProcessing ? (
                              <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                            ) : null }{" "}
                            Iscriviti
                          </Button>
                        </div>}
                      </Col>
                    </Row>
                    <Row style={{paddingLeft: "25px", paddingRight: "25px", textAlign: 'left'}} className={"pl-2"}>
                      <Col><p className='text-muted'>{currentObject.excerpt}</p></Col>
                    </Row>
                    <hr />
                    <Row style={{paddingLeft: "25px", paddingRight: "25px", textAlign: 'left'}} className={"pl-2"}>
                      <Col><p className='text-muted'>{currentObject.description}</p></Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Col md={12} lg={12} >
                <h4>Tipster</h4>
              </Col>
              <Card >
                <Card.Body>
                  <Row style={{textAlign: 'center'}}>
                    <Col>
                      <a href={`/tipsters/${author.userCode}`}>
                        <img style={{objectFit: "cover", borderRadius: "75px", border: "solid #e0e0e0AA 6px"}} height="150px" width='150px' src={getAvatar()} alt={"User avatar"} />
                        <h5 className='pt-4'>{author.name} {author.lastName}</h5>
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{padding: "20px 30px"}}>
                  <Row style={{justifyContent: "space-between"}}>
                    <p className="text-muted m-b-5">Iscritti</p> <strong style={{float: 'right'}}>{author.totalSubscribers}</strong>
                  </Row>
                  <Row style={{justifyContent: "space-between"}}>
                    <p className="text-muted m-b-5">Profitto</p> <strong style={{float: 'right'}} className={"mb-1" + ((author.totalProfit >= 0) ? " text-success" : " text-danger")}><LocaleNumber amount={author.totalProfit} symbol={"%"} /></strong>
                  </Row>
                  <Row style={{justifyContent: "space-between"}}>
                    <p className="text-muted m-b-5">ROI</p> <strong style={{float: 'right'}}><LocaleNumber amount={winRatio} symbol={"%"} /></strong>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={8}>
              <Col md={12} lg={12} >
                <h4>Statistiche</h4>
              </Col>
              <Card className="overflow-hidden">
                <Card.Body className="pb-0">
                  <Row>
                    <Col sm="auto">
                      <h5 className="m-b-5">Andamento negli ultimi 30 giorni</h5>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={8}>
                      <Chart series={series} options={options} type='bar' width="100%" height='296px' />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {pools && pools.length > 0 && <h4>Ultime Tips</h4>}
          <Row>
            {pools.map(pool => (
              <Tip key={pool.id} pool={pool} author={author.userCode === props.applicationState.user.userCode} user={author} />
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceDetail));