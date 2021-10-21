import React from 'react';
import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import PriceLabel from "../../App/components/PriceLabel";
import Aux from "../../hoc/_Aux";
import moment from "moment";
import InvoiceBasic from "./InvoiceBasic";

const SubscriptionItem = ({service}) => {
    const [loading, setLoading] = useState(true)
    const [subscriptions, setSubscriptions] = useState([])
    const [selectedSub, setSelectedSub] = useState();
    const [showInvoice, setShowInvoice] = useState(false);

    useEffect(() => {
        callUrl(service._links.subscriptions.href.replace("{?projection}", "") + "?page=0&size=1000")
        .then(r => r.json())
        .then(subscriptions => {
            setSubscriptions(subscriptions._embedded.subscriptions)
        })
        .then(_ => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (selectedSub) {
            setShowInvoice(true);
        }
    }, [selectedSub]);

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
            {loading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>}
            { !loading &&
            <Aux>
                <Col md={12} sm={12} xs={12} lg={12}>
                    { subscriptions
                        .filter(sub => sub.paymentSystemToken !== "self" && sub.valid && new Date() - new Date(sub.subscribedOn) <= 30 * 24 * 60 * 60 * 1000)
                        .sort((a,b) => new Date(b.subscribedOn) - new Date(a.subscribedOn))
                        .map(sub => {
                            return (<Row className={"mb-3 pb-2"} key={sub.id}>
                                <Col md={6} sm={6} xs={6} lg={6}>
                                    <span style={{margin: 0, textTransform: 'uppercase', fontSize: 12}} className={"text-success"} >QUOTA RICEVUTA </span>
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
                                <Col md={2} sm={2} lg={2} xs={2} className={"text-center"} style={{flex: 1, justifyContent: "center", flexDirection: "column", display: "flex"}} >
                                    <span onClick={() => setSelectedSub(sub)} style={{textAlign: "center", fontSize: "16px", cursor: "pointer"}}>
                                        <i className={"feather icon-download"} />
                                    </span>
                                </Col>
                            </Row>)
                        })
                    }
                </Col>
                <Modal show={showInvoice} onHide={() => setShowInvoice(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title as="h4">Scontrino</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InvoiceBasic subscription={selectedSub} close={() => setShowInvoice(false)}></InvoiceBasic>
                    </Modal.Body>
                </Modal>
            </Aux>
            }
        </Row>
    )
};

export default SubscriptionItem;