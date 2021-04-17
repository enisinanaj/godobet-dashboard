import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Tabs} from 'react-bootstrap';
import { Tab } from 'bootstrap';
import Chart from "react-apexcharts";
import Aux from "../../hoc/_Aux";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import BASE_CONFIG from "../../store/config";
import TokenManager from '../../App/auth/TokenManager';
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import MarketCard from '../Marketplace/MarketCard';
import satisfactionChart from "../Home/charts/pie";
import bookmakersChart from "../Home/charts/bookmakers";
import Loader from "../../App/layout/Loader";
import LocaleNumber from '../../App/components/LocaleNumber';
import moment from 'moment';

function TipsterProfile(props) {
    const [currentUser, setCurrentUser] = useState({})
    const [userServices, setUserServices] = useState([])
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

    useEffect(() => {
        TokenManager.getInstance().getToken().then(jwt => {
            fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode, {
                headers: {
                    'Content-Type': "application/json",
                    "X-Auth": jwt,
                },
            }).then((e) => e.json()).then(user => {
                setCurrentUser(user)

                if (!user._embedded) {
                    return;
                }

                const winRatioVar = user._embedded.playedPools.filter(res => {
                    return res.outcome === 'win'
                });

                let percentage = ((winRatioVar.length / user._embedded.playedPools.length) * 100)
                setWinRatio(percentage)
            })
        })
        getServices()
        getPools()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.warn(currentUser)
    }, [currentUser]);

    const getCreampieData = () => {
        const data = satisfactionChart;
        if (!currentUser._embedded || !currentUser._embedded.playedPools) {
          return {
            options: {
              labels: [],
            },
            ...data,
            series: [0, 0, 100],
          };
        }
    
        const map = currentUser._embedded.playedPools.reduce((pie, pool) => {
          const h = { ...pie };
    
          if (!pool.outcome) {
            return h;
          }
    
          h[pool.outcome] =
            parseInt(pie[pool.outcome]) >= 0 ? 1 + parseInt(pie[pool.outcome]) : 1;
          return h;
        }, {});
    
        data.options.labels = Object.keys(map);
        data.series = Object.values(map);
        return data;
      };
    

    const bookmakersPie = () => {
        const data = bookmakersChart;
        if (!currentUser._embedded || !currentUser._embedded.playedPools) {
            return {
              options: {
                labels: [],
              },
              ...data,
              series: [0, 0, 100],
            };
          }

        const map = currentUser._embedded.playedPools.reduce((pie, pool) => {
            const h = {...pie};

            if(!pool.bookmaker) {
                return h;
            }
            
            h[pool.bookmaker] = parseInt(pie[pool.bookmaker]) >= 0 ? 1 + parseInt(pie[pool.bookmaker]) : 1;
            return h
        }, {});

        data.options.labels = Object.keys(map);
        data.series = Object.values(map);
        return data
    }

    const getServices = () => {
        TokenManager.getInstance().getToken().then(jwt => {
            fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/services?page=0&size=1000', {
                headers: {
                    "Content-Type": 'application/json',
                    "X-Auth": jwt,
                },
            }).then(e => e.json()).then(res => setUserServices(res._embedded.services))
        })
    };

    const getPools = () => {
        TokenManager.getInstance().getToken().then(jwt => {
            return fetch(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode + '/pools?page=0&size=1000', {
                headers: {
                    "Content-Type": 'application/json',
                    "X-Auth": jwt,
                },
            })
        })
        .then(e => e.json())
        .then(res => {
            let last30dTips = res._embedded.pools.filter(p => (new Date() - new Date(p.updatedOn)) <= (30 * 24 * 60 * 60 * 1000))
            const profit = last30dTips.map(pool => ({y: pool.profit.toFixed(2), x: moment(pool.updatedOn).format("DD MMM YYYY")}))
            setSeries([{data: profit}])
        })
    };

    const getLatestImage = (media) => {
        if (
          !media._embedded ||
          !media._embedded.media ||
          media._embedded.media.length === 0 ||
          media._embedded.media.filter((m) => m.mediaType === "avatar").length === 0
        ) {
          return CoverImage;
        }
    
        return media._embedded.media.filter((m) => m.mediaType === "avatar").sort((a, b) => b.id - a.id)[0].url;
    };

    return (
        <Aux>
        {currentUser.name ? (<Row md={12} className={"mb-n4"} style={{marginTop: "-6.25rem"}}>
            <Col md={12} className={"mt-4"}>
                <Card className={"user-card"}>
                    <Card.Body className='pt-0'>
                        <div className="user-about-block">
                            <Row className='pt-0 align-items-center mb-4'>
                                <Col style={{textAlign: 'center'}} md={4}>
                                    <img src={getLatestImage(currentUser)} height='150px' alt='' width='150px' style={{objectFit: 'cover', borderRadius: '50%', border: "solid #e5e5e5aa 6px"}} />
                                    <div className='p-4'>
                                        <h5>{currentUser.name} {currentUser.lastName}</h5>
                                    </div>
                                </Col>
                            
                                <Col md={8}>
                                    <Row>
                                        <Col md={3}><span><strong>{currentUser.totalSubscribers < 0 ? 0 : currentUser.totalSubscribers}</strong> Iscritti</span></Col>
                                        <Col md={4}>
                                            <span className={"mb-1" + ((currentUser.totalProfit >= 0) ? " text-success" : " text-danger")}>Profitto <strong><LocaleNumber amount={currentUser.totalProfit} symbol={"%"}/></strong></span>
                                        </Col>
                                        <Col md={5}>
                                            <span>Percentuale di vincita <strong><LocaleNumber amount={winRatio} symbol={"%"}/></strong></span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <span><strong>{currentUser._embedded && currentUser._embedded.services ? currentUser._embedded.services.length : 0}</strong> servizi creati</span>
                                        </Col>
                                        <Col md={4}>
                                            <span><strong>{currentUser._embedded && currentUser._embedded.pools ? currentUser._embedded.pools.length : 0}</strong> tip create</span>
                                        </Col>
                                        <Col md={5}></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={12} className='tab-user-card'>
                <Tabs variant='pills' defaultActiveKey='services' id='tipster-profile-tabs'>
                    <Tab eventKey='services' title='Servizi'>
                        <Row>
                            {userServices.length > 0 ? (
                                <MarketCard marketData={userServices} inPurchasing={false} handlePurchase={() => {}} user={props.applicationState.user}/>
                            ) : <Col className='pl-5'> <h4>You don't have any services yet.</h4></Col>}
                        </Row>
                    </Tab>
                    <Tab eventKey='stats' title='Stats'>
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <Card.Header>
                                    <Card.Title as="h5">Vincita/Perdita</Card.Title>
                                    </Card.Header>
                                    <Card.Body>

                                        <Chart {...getCreampieData()} />

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Top bookmakers</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Chart {...bookmakersPie()} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Andamento tip</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Chart series={series} options={options} type='area' width="100%" height='296px' />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Col>
        </Row>) : <Loader />}
    </Aux>
    )
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipsterProfile);