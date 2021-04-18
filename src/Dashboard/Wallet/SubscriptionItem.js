import React from 'react';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import PriceLabel from "../../App/components/PriceLabel";
import Aux from "../../hoc/_Aux";
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Row className={"mb-4 pt-2"} style={{borderTop: "1px solid #f5f5f5"}}>
            {loading && <div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>}
            { !loading &&
            <Aux>
                <Col md={12} sm={12} xs={12} lg={12}>
                    { subscriptions
                        .filter(sub => sub.paymentSystemToken !== "self" && sub.valid && new Date() - new Date(sub.subscribedOn) <= 30 * 24 * 60 * 60 * 1000)
                        .sort((a,b) => new Date(b.subscribedOn) - new Date(a.subscribedOn))
                        .map(sub => {
                            return (<Row className={"mb-3 pb-2"}>
                                <Col md={8} sm={8} xs={8} lg={8}>
                                    <span style={{margin: 0, textTransform: 'uppercase', fontSize: 12}} className={"text-success"} >QUOTA RICEVUTA</span>
                                    <div style={{margin: 0, textDecoration: 'underline', fontSize: 14}}>
                                        <a href={"/dashboard/service/" + sub.serviceId} target="_blank" rel="noopener noreferrer">
                                            {service.serviceName}{" "}
                                            <em className={"feather icon-external-link"}></em>
                                        </a>
                                    </div>
                                    <small className={"text-muted"}>Ricevuto da: <strong>{sub.subscriber.name} {sub.subscriber.lastName}</strong></small>
                                </Col>
                                <Col md={4} sm={4} lg={4} xs={4} className={"text-right"} >
                                    <h4 style={{margin: 0}} className={"p-1"} ><PriceLabel amount={service.price/100} /></h4>
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