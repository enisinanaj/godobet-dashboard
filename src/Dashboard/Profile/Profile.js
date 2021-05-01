import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Tabs} from 'react-bootstrap';
import { Tab } from 'bootstrap';
import Aux from "../../hoc/_Aux";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import BASE_CONFIG from "../../store/config";
import TokenManager from '../../App/auth/TokenManager';
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import Loader from "../../App/layout/Loader";
import LocaleNumber from '../../App/components/LocaleNumber';
import MarketCard from '../Marketplace/MarketCard';
import ServiceCard from '../TipsterServices/ServiceCard';

const FOLLOWED = 1;

function TipsterProfile(props) {
    const [currentUser, setCurrentUser] = useState({})
    const [userServices, setUserServices] = useState([])
    const [winRatio, setWinRatio] = useState(0)
    const [subscriptionsCount, setSubscriptionsCount] = useState(0)

    useEffect(() => {
        load(BASE_CONFIG.API_URL + '/users/' + props.applicationState.user.userCode)
        .then(user => {
            setCurrentUser(user)
            if (!user._embedded) {
                return;
            }

            setSubscriptionsCount(user._embedded && user._embedded.subscriptions ? user._embedded.subscriptions.filter(sub => sub.valid).length : 0);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    useEffect(() => {
        if (currentUser._embedded && currentUser._embedded.subscriptions) {            
            load(`${BASE_CONFIG.API_URL}/users/${props.applicationState.user.userCode}/subscriptions?page=0&size=1000`
            ).then(r => {
                let services = r._embedded && r._embedded.subscriptions
                  ? r._embedded.subscriptions.filter((s) => s.valid)
                  : [];

                setUserServices(services.map((service) => ({
                    ...service.service,
                    remainingDays: service.remainingDays,
                    id: service.serviceId,
                    media: [{ ...service.media, mediaIteration: 1 }],
                })));
            })
        }
    },[currentUser]);

    useEffect(() => {
        console.warn(userServices)
    }, [userServices])

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
                    <Card.Body className='pt-0 pb-0'>
                        <div className="user-about-block">
                            <Row className='pt-0 pb-0 align-items-center'>
                                <Col style={{textAlign: 'center'}} md={4}>
                                    <img src={getLatestImage(currentUser)} height='150px' alt='' width='150px' style={{objectFit: 'cover', borderRadius: '50%', border: "solid #e5e5e5aa 6px"}} />
                                    <div className='p-4'>
                                        <h5>{currentUser.name} {currentUser.lastName}</h5>
                                    </div>
                                </Col>
                            
                                <Col md={8}>
                                    <Row>
                                        <Col md={3}><span><strong>{subscriptionsCount < 0 ? 0 : subscriptionsCount}</strong> Iscrizioni</span></Col>
                                        <Col md={4}>
                                            <span className={"mb-1" + ((currentUser.totalProfit >= 0) ? " text-success" : " text-danger")}>Profitto <strong><LocaleNumber amount={currentUser.totalProfit} symbol={"%"}/></strong></span>
                                        </Col>
                                        <Col md={5}>
                                            <span>ROI <strong><LocaleNumber amount={winRatio} symbol={"%"}/></strong></span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            {userServices.length > 0 ? (<Col md={12} lg={12}>
                <h4>
                  Iscrizioni{" "}
                  <small style={{ fontSize: "12px" }}>
                    I servizi a cui sei iscritto
                  </small>
                </h4>
              </Col>)
            : null}
            <Col md={12} className='tab-user-card'>
                <Row>
                    {userServices.length > 0 ? (
                        <ServiceCard
                            disableEdit={true}
                            services={userServices.sort((a, b) => b.id - a.id)}
                            showRemainingDays={true}
                        ></ServiceCard>
                    ) : <Col className='pl-5'>
                            <strong>Non ti sei iscritto ancora a nessun servizio.</strong> 
                            <a href="/dashboard/marketplace" className={"btn btn-light btn-sm ml-3"}>Vai al marketplace</a>
                    </Col>}
                </Row>
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