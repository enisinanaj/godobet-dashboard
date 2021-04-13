import React from 'react';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import PriceLabel from "../../App/components/PriceLabel";
import Aux from "../../hoc/_Aux";
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import moment from "moment";


const SubscriptionItem = ({service}) => {

    const [loading, setLoading] = useState(true)
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        callUrl(service._links.subscriptions.href.replace("{?projection}", "") + "?page=0&size=1000")
        .then(r => r.json())
        .then(subscriptions => {
            setSubscriptions(subscriptions._embedded.subscriptions)
        })
        .then(_ => setLoading(false))
    }, [])

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

    return (
        <Row className={"mb-3 pt-2"} style={{borderTop: "1px solid #f5f5f5"}}>
            {loading && <div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>}
            { !loading &&
            <Aux>
                <Col md={3} sm={3} xs={3} lg={3}>
                    {service.media && service.media.length > 0 && <img src={service.media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url} style={{width: "80px", height: "80px"}} />}
                    {!service.media || service.media.length <= 0 && <img src={CoverImage} style={{width: "80px", height: "80px"}} />}
                </Col>
                <Col md={9} sm={9} xs={9} lg={8}>
                    { subscriptions
                        .filter(sub => sub.paymentSystemToken !== "self" && sub.valid && new Date() - new Date(sub.subscribedOn) <= 30 * 24 * 60 * 60 * 1000)
                        .sort((a,b) => new Date(b.subscribedOn) - new Date(a.subscribedOn))
                        .map(sub => {
                            return (<Row className={"mb-3 pb-2"}>
                                <Col md={8} sm={8} xs={8} lg={8}>
                                    <h5 style={{margin: 0}}>{service.serviceName}</h5>
                                    <small className={"text-muted"}>{sub.subscriber.email}</small>
                                </Col>
                                <Col md={4} sm={4} lg={4} xs={4}>
                                    <h5 style={{margin: 0}}><PriceLabel amount={service.price/100} /></h5>
                                    <small className={"text-muted"}>{moment(sub.subscribedOn).format("DD MMM YYYY")}</small>
                                </Col>
                            </Row>)
                        })
                    }
                </Col>
            </Aux>
            }
        </Row>
    )
};

export default SubscriptionItem;