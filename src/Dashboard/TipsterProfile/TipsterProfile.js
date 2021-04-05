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
import monthlyProfilt1 from './monthlyProfit'
import averageStake from './averageStake'
import averageOdds from './averageOdds'
import Loader from "../../App/layout/Loader";

function TipsterProfile(props) {
    const [favoriteBook, setFavoriteBook] = useState(null)
    const [currentUser, setCurrentUser] = useState({})
    const [userServices, setUserServices] = useState([])
    const [winRatio, setWinRatio] = useState(0)
    const [avgStake, setAvgStake] = useState(0)

    let userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    useEffect(() => {
        TokenManager.getInstance().getToken().then(jwt => {
            fetch(BASE_CONFIG.API_URL + '/users/' + userId, {
                headers: {
                    'Content-Type': "application/json",
                    "X-Auth": jwt,
                },
            }).then((e) => e.json()).then(user => {
                setCurrentUser(user)
                const winRatioVar = user._embedded.playedPools.filter(res => {
                    return res.outcome === 'win'
                } )
                let percentage = ((winRatioVar.length / user._embedded.playedPools.length) * 100)
                setWinRatio(percentage)

                const stakesArray = user._embedded.playedPools.map(pool => {
                    return pool.stake
                })

                let averageStake = (stakesArray.reduce((a,b) => a+b) / stakesArray.length) / 100;
                setAvgStake(averageStake)
            })
        })
        getServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        findBookmaker()
    }, [currentUser])


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
            fetch(BASE_CONFIG.API_URL + '/users/' + userId + '/services', {
                headers: {
                    "Content-Type": 'application/json',
                    "X-Auth": jwt,
                },
            }).then(e => e.json()).then(res => setUserServices(res._embedded.services))
        })
    }

    const getLatestImage = (media) => {
        if (
          !media._embedded ||
          media.length === 0 ||
          !media._embedded.media
        ) {
          return CoverImage;
        }
    
        return media._embedded.media.sort((a, b) => b.id - a.id)[0].url;
    };

    const findBookmaker = () => {
          if(!currentUser._embedded) {
              return
          }
          let bookmakers = currentUser._embedded.playedPools.map(pool => pool.bookmaker)
          const mostUsed = bookmakers.sort((a,b) => bookmakers.filter(v => v===a).length - bookmakers.filter(v => v===b).length).pop()
          setFavoriteBook(mostUsed)
    }

    return (
        <Aux>
            {currentUser.name ? (<Row md={12}>
            <Col md={4}>
            <Card style={{minHeight: '800px'}}>
                <Row className='pt-5'>
                    <Col style={{textAlign: 'center'}}>
                    <img src={getLatestImage(currentUser)} height='200px' alt='' width='200px' style={{objectFit: 'cover', borderRadius: '50%'}} />
                    <div className='p-4'>
                    <h3>{currentUser.name} {currentUser.lastName}</h3>
                    </div>
                    </Col>
                </Row>
                <hr />
                <Row style={{textAlign: 'center'}}>
                    <Col>
                    <h4>{currentUser.totalSubscribers} Iscritti</h4>
                    </Col>
                </Row>
                <hr />
                <Row style={{textAlign: 'center'}}>
                <Col>
                    <h5 className={"mb-1" + ((currentUser.totalProfit >= 0) ? " text-success" : " text-danger")}>{currentUser.totalProfit} % Profit </h5>
                    </Col>
                <Col>
                    <h5>{winRatio} % Win Ratio </h5>
                    </Col>
                </Row>
                <hr />
                <Row style={{textAlign: 'center'}}>
                <Col>
                    <h5>{currentUser._embedded.services ? currentUser._embedded.services.length : 0} Servizi</h5>
                    </Col>
                <Col>
                    <h5>{currentUser._embedded.pools ? currentUser._embedded.pools.length : 0} pools</h5>
                    </Col>
                </Row>
                <hr />
                <Row style={{textAlign: 'center'}}>
                <Col>
                    <h5>1.8 Avarage Odds</h5>
                    </Col>
                <Col>
                    <h5>{avgStake} Average Stake</h5>
                    </Col>
                </Row>
                <hr />
                <Row style={{textAlign: 'center'}}>
                    <Col>
                    <h5>Bookmaker più utilizzato:</h5>
                    </Col>
                </Row>
                <Row style={{textAlign: 'center'}}>
                    <Col>
                    <h5>{favoriteBook}</h5>
                    </Col>
                </Row>
            </Card>
            </Col>
            <Col md={8} className='tab-user-card' style={{ maxHeight: '800px', overflowY: 'auto'}}>
                <Tabs variant='pills' defaultActiveKey='services' id='tipster-profile-tabs'>
                    <Tab eventKey='services' title='Servizi'>
                        <Row>
                            {userServices.length > 0 ? (
                                <MarketCard marketData={userServices} inPurchasing={false} handlePurchase={() => {}} user={props.applicationState.user} />
                            ) : <Col> <h4>This user has no services</h4></Col>}
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
                                    <Card.Body>
                                        <h2 className="text-center f-w-400 ">$45,567</h2>
                                        <p className="text-center text-muted ">Monthly Profit</p>
                                        <Chart {...monthlyProfilt1} />
                                        <div className="m-t-20">
                                            <Row>
                                                <Col className="text-center ">
                                                    <h6 className="f-20 f-w-400">$6,234</h6>
                                                    <p className="text-muted f-14 m-b-0">Today</p>
                                                </Col>
                                                <Col className="text-center ">
                                                    <h6 className="f-20 f-w-400">$4,387</h6>
                                                    <p className="text-muted f-14 m-b-0">Yesterday</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="overflow-hidden">
                                    <Card.Body>
                                        <Row className="mt-2">
                                            <Col sm={6}>
                                            <p className="text-muted f-w-600 f-16">Average odds</p>
                                            <Chart {...averageOdds} />
                                            </Col>
                                            <Col sm={6}>
                                            <p className="text-muted f-w-600 f-16">Average stake</p>
                                            <Chart {...averageStake} />
                                            </Col>
                                        </Row>
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

export default 
    connect(mapStateToProps, mapDispatchToProps)(TipsterProfile)
  ;