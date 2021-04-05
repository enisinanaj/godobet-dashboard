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

const ServiceDetail = (props) => {
  const [monthlyProfit, setMonthlyProfit] = useState(0)
  const [winRatio, setWinRatio] = useState(0)
  const [series, setSeries] = useState([
    {
      data: [1, 2, 3]
    }
  ])

  const [options, setOptions] = useState({
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
                formatter: (seriesName) => 'Profit: '
            }
        },
        marker: {
            show: false
        }
    }
  })

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

  // if (!id.match(/^\d$/g)) {
  //   window.location = "/maintenance/error";
  // }

  const getLatestImage = (media) => {
    if (
      !media._embedded ||
      media.length === 0 ||
      !media._embedded.serviceMedia
    ) {
      return CoverImage;
    }

    return media._embedded.serviceMedia.sort((a, b) => b.id - a.id)[0].url;
  };

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services/" + id, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((object) => {
            setCurrentObject(object);
          });
      });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    TokenManager.getInstance().getToken().then(jwt => {
      fetch(BASE_CONFIG.API_URL + '/services/' + id + '/author', {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
      }).then(e => e.json()).then(author => {
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
    })

    if (props.applicationState.user.roleValue >= 4) {
      TokenManager.getInstance().getToken().then(jwt => {
        fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/subscriptions', {
          headers: {
            "Content-Type": 'application/json',
            "X-Auth": jwt,
          },
        }).then(e => e.json()).then(subscriptions => {
          if(currentObject && currentObject._links) {
            const subscription = subscriptions._embedded.subscriptions.find(sub => sub.serviceId === id);

            if (!subscription) {
              setPurchasable(true);
            } else {
              TokenManager.getInstance().getToken().then(jwt => {
                fetch(BASE_CONFIG.API_URL + '/services/' + id + '/pools', {
                  headers: {
                    'Content-Type': "application/json",
                    "X-Auth": jwt,
                  },
                }).then(e => e.json().then(pools => {
                  setPools(pools._embedded.pools)
                  const profit = pools._embedded.pools.map(pool => pool.profit.toFixed(2))
                  setSeries([{
                    data: profit,
                  }])
                  setMonthlyProfit(pools._embedded.pools.map(pool => pool.profit).reduce((a,b) => a + b, 0).toFixed(2))
                  setOptions((prevState) => ({
                    ...prevState,
                    xaxis: {
                      categories: pools._embedded.pools.map(pool => new Date(pool.createdOn).toISOString().split('T')[0])
                    }
                  }))
                }))
              })
            }
          }
        });
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
          // TODO: show error to the user
        })
    })
  };

  return (
    <Aux>
      {currentObject && author.name ? (
        <div>
          <Row className="mb-n4">
            <Col sm={12}>
              <Card className="user-card">
               
                <Card.Body className="pt-0">
                  <div className="user-about-block">
                    <Row className="align-items-center">
                      <Col md={2}>
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
                      <Col>
                        <h4 className="mb-1 p-1">{currentObject.serviceName}</h4>
                      </Col>
                      <Col md={2}>
                        {purchasable && <div style={{ display: "flex", justifyContent: "center" }} >
                          <Button onClick={() => handlePurchase(currentObject._links.self.href)} disabled={isProcessing} >
                            {isProcessing ? (
                              <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                            ) : null }{" "}
                            Iscriviti
                          </Button>
                        </div>}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}></Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}> {" "}
                          <i
                            className="feather icon-dollar-sign"
                            style={{ paddingRight: "5px" }}
                          />{" "}Prezzo: <PriceLabel amount={currentObject.price/100}></PriceLabel></h4>
                        </span>
                      </Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}> {" "}
                          <i
                            className="feather icon-calendar"
                            style={{ paddingRight: "5px" }}
                          />{" "}Durata iscrizione: {currentObject.duration} giorni</h4>
                        </span>
                      </Col>
                      <Col>
                        <span>
                          <h4 style={{fontSize: '15px'}}>{" "}
                          <i
                            className="feather icon-users"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Numero massimo iscrizioni:{" "}
                          {currentObject.maxSubscribers}</h4>
                        </span>
                      </Col>
                      <Col>
                          <h4 style={{fontSize: '15px'}} className={(currentObject.totalProfit >= 0) ? 'text-success' : 'text-danger'}>{" "}
                          <i
                            className={currentObject.totalProfit >= 0 ? "feather icon-chevrons-up" : "feather icon-chevrons-down"}
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          Profit: <LocaleNumber amount={currentObject.totalProfit} symbol={"%"}></LocaleNumber> </h4>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{justifyContent: 'center', textAlign: 'center'}}>
                      <Col md={8}>
                      <p className='text-muted'>{currentObject.excerpt}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row style={{justifyContent: 'center', textAlign: 'center'}}>
                      <Col md={8} >
                      <p className='text-muted'>{currentObject.description}</p>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
                      <a href={`/tipsters/${author.userCode}`}>
              <Card >
                <Card.Body>
                  <Row style={{textAlign: 'center'}}>
                    <Col>
                      <img height="150px" width='150px' src={getAvatar()} alt={"User avatar"} />
                      <h4 className='pt-4'>{author.name} {author.lastName}</h4>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{textAlign: 'center'}}>
                  <Row>
                    <Col>
                      <p className="text-muted m-b-5">Followers</p>
                      <h5>{author.totalSubscribers}</h5>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                    <p className="text-muted m-b-5">Profit</p>
                      <h6 className={"mb-1" + ((author.totalProfit >= 0) ? " text-success" : " text-danger")}>{author.totalProfit} %</h6>
                    </Col>
                    <Col>
                    <p className="text-muted m-b-5">Win Ratio</p>
                      <h6>{winRatio} %</h6>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
                      </a>
            </Col>
            <Col md={8}>
              <Card className="overflow-hidden">
                <Card.Body className="bg-c-green pb-0">
                  <Row className="text-white">
                    <Col sm="auto">
                      <h4 className="m-b-5 text-white">30 days profit</h4>
                      <h6 className="text-white">{monthlyProfit} &euro;</h6>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={8}>
                      <Chart series={series} options={options} type='bar'
                       width="100%" height='380px' />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>          
          </Row>
          <Row>
            {pools.map(pool => (
              <Tip key={pool.id} pool={pool} author={true} />
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