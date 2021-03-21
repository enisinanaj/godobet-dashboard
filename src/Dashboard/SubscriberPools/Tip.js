import React from "react";
import { Col, Card, Carousel, Dropdown, Row } from "react-bootstrap";
import moment from 'moment'
import TokenManager from "../../App/auth/TokenManager";
import 'moment/locale/it';
import config from "../../store/config";
import Sports from '../../App/components/Sports'

moment.locale("it")

const Tip = props => {
    let {pool} = props;

    const updateEvent = async (event, outcome) => {
        var token = await TokenManager.getInstance().getToken();
        await fetch(config.API_URL + "/events/" + event.eventCode, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "X-Auth": token },
            body: JSON.stringify({outcome}),
        })
    };

    const updateTip = async (outcome) => {
        let counter = pool.events.length;

        pool.events.forEach(async (event) => {
            await updateEvent(event, outcome);
            counter--;
        });

        let i = setInterval(() => {
            if (counter === 0) {
                props.callback();
                clearInterval(i);
            }
        }, 250)
    };

    const playTip = (event) => {
        pool.events.forEach(async (event) => {
            await markAsPlayed(event);
        });

        props.callback()
    };

    const markAsPlayed = async (event) => {
        var token = await TokenManager.getInstance().getToken();
        await fetch(config.API_URL + "/played/" + props.user.userCode + "/" + event.eventCode, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Auth": token }
        });
    }    


    return (
    <Col key={pool.id} md={4} lg={4} xl={4} xs={12} sm={6}>
        {/* style={{background: "#e83e8c"}} */}
        <Card className={"light"} text={''}>
            <Card.Body>
                {/* className={'text-white'} */}
                <Card.Title as="h5">
                {pool.description}
                {!pool.outcome && <Dropdown className="drp-tipster-pool">
                    <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
                    {props.author && <Dropdown.Menu alignRight className="profile-notification">
                        <Dropdown.Item onClick={() => {updateTip("win")}}>Win</Dropdown.Item>
                        <Dropdown.Item onClick={() => {updateTip("1/2 win")}}>1/2 Win</Dropdown.Item>
                        <Dropdown.Item onClick={() => {updateTip("lose")}}>Lose</Dropdown.Item>
                        <Dropdown.Item onClick={() => {updateTip("1/2 lose")}}>1/2 Lose</Dropdown.Item>
                        <Dropdown.Item onClick={() => {updateTip("void")}}>Void</Dropdown.Item>
                    </Dropdown.Menu>}
                    {!props.author && <Dropdown.Menu alignRight className="profile-notification">
                        <Dropdown.Item onClick={() => {playTip(pool)}}>Tip seguita</Dropdown.Item>
                    </Dropdown.Menu>}
                </Dropdown>}
                </Card.Title>
                <Carousel controls={false} interval={null}>
                {pool.events.map(event => (
                    <Carousel.Item key={event.eventCode}>
                        <div style={{height: 170, marginBottom: 15, padding: "0 20px", flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Row className={"hei-110"}>
                                <Col lg={12} sm={12} xs={12} xl={12}>
                                    {Sports.find(s => s.value === event.sport) ? Sports.find(s => s.value === event.sport).icon : <em className={"feather icon-aperture"}></em>}{" "}
                                    {event.competition} / {event.event}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-play" /> {event.proposal}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-at-sign" /> {(event.quote / 100).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-book" /> {pool.bookmaker}
                                </Col>
                                <Col lg={6} sm={12} xs={12} xl={6}>
                                    <i className="feather icon-pie-chart" /> {(pool.stake/100).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%'}
                                </Col>
                            </Row>
                            <Row style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
                                <Col  lg={6} sm={12} xs={12} xl={6} style={{display: 'inline'}}>
                                    {pool.outcome && <div style={{display: 'inline'}}>
                                        Esito: {pool.outcome}
                                    </div>}
                                </Col>
                                <Col  lg={6} sm={12} xs={12} xl={6} style={{display: 'inline'}}>
                                    <em className="feather icon-clock"></em> {moment(event.eventDate).format("DD/MM/yyyy HH:mm")}
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                ))}
                </Carousel>
            </Card.Body>
        </Card>
    </Col>);
}

export default Tip;