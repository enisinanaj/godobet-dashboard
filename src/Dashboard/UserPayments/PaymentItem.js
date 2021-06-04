import React from 'react';
import { Col, Row } from "react-bootstrap";
import PriceLabel from "../../App/components/PriceLabel";
import Aux from "../../hoc/_Aux";
import moment from "moment";

const PaymentItem = ({subscription}) => {
    return (
        <Row className={"mb-4 pt-2"} style={{borderTop: "1px solid #f5f5f5"}}>
            <Aux>
                <Col md={8} sm={8} xs={8} lg={8}>
                    <span style={{margin: 0, textTransform: 'uppercase', fontSize: 12}} className={"text-success"} >QUOTA INVIATA</span>
                    <div style={{margin: 0, textDecoration: 'underline', fontSize: 14}}>
                        <a href={"/dashboard/service/" + subscription.serviceId} target="_blank" rel="noopener noreferrer">
                            {subscription.service.serviceName}{" "}
                            <em className={"feather icon-external-link"}></em>
                        </a>
                    </div>
                    {/* <small className={"text-muted"}>Servizio: <strong>{subscription.service.serviceName}</strong></small> */}
                </Col>
                <Col md={4} sm={4} lg={4} xs={4} className={"text-right"} >
                    <h4 style={{margin: 0}} className={"p-1"} ><PriceLabel amount={subscription.service.price/100} /></h4>
                    <small className={"text-muted"}>{moment(subscription.subscribedOn).format("DD MMM YYYY")}</small>
                </Col>
            </Aux>
        </Row>
    )
};

export default PaymentItem;