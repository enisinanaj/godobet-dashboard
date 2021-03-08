import React from "react";
import { Col, Card, Carousel, Dropdown } from "react-bootstrap";
import moment from 'moment'
import TokenManager from "../../App/auth/TokenManager";
import 'moment/locale/it';
import config from "../../store/config";
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
    <Col key={pool.id} md={4} lg={4} xl={3} xs={12} sm={6}>
        {/* style={{background: "#e83e8c"}} */}
        <Card className={"light"} text={''}>
        <Card.Body>
            {/* className={'text-white'} */}
            <Card.Title as="h5">
            {pool.description}
            <Dropdown className="drp-tipster-pool">
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
            </Dropdown>
            </Card.Title>
            <Carousel controls={false}>
            {pool.events.map(event => (
                <Carousel.Item key={event.eventCode}>
                    <div style={{height: 140, marginBottom: 15, padding: "0 20px", flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div className={"hei-80"}>
                        {event.event} <strong>{event.proposal}</strong> {(pool.stake/100).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%'} {pool.bookmaker} {event.quote.toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </div>
                        <div style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
                            <div style={{display: 'inline'}}>
                                {moment(event.eventDate).calendar()}
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
            </Carousel>
            {pool.outcome && <div style={{display: 'inline'}}>
            Esito: {pool.outcome}
            </div>}
        </Card.Body>
        </Card>
    </Col>);
}

export default Tip;