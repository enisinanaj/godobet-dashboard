import moment from 'moment';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Dropdown, Card, Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TokenManager from '../../App/auth/TokenManager';
import * as actions from '../../store/actions';
import config from '../../store/config';

const getDropdown = (clickHandler) => {
  return (
    <Dropdown className="drp-tipster-pool">
        <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
        <Dropdown.Menu alignRight className="profile-notification">
            <Dropdown.Item onClick={clickHandler}>Tip seguita</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
};

const getTipText = (pool) => {
  return (
    <Carousel
      interval={null}
      controls={false}
      indicators={true}
    >
      {pool.events.map(event => (
          <Carousel.Item key={event.eventCode}>
              <div style={{height: 170, marginBottom: 15, padding: "20px 20px", flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                  <Row className={"hei-110"}>
                      <Col lg={12} sm={12} xs={12} xl={12}>
                          <em className={"feather icon-aperture"}></em> {event.competition} / {event.event}
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
  );
};

const TipCard = ({ pool, user, dropdownHidden, actions }) => {
  const [DropdownHiddenState, setDropdownHiddenState] = useState(dropdownHidden);

  const followTip = () => {
    const followLink = config.API_URL + `/played-pools/${user.userCode}/${pool.id}`;
    postFollow(followLink)
    .then(_ => setDropdownHiddenState(true))
    .then(reloadUser)
  }

  const postFollow = (url) => {
    return TokenManager
      .getInstance()
      .getToken()
      .then(jwt => {
          return fetch(url, {
            headers: {
              "Content-Type": "application/json",
              "X-Auth": jwt,
            },
            method: 'POST'
          })
        }
      );
  }

  const reloadUser = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((localUser) => {
            actions.userLogin({
              ...user,
              ...localUser,
            });
          });
      });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title
          as={'h3'}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0',
          }}
        >
          {pool.description}
          {DropdownHiddenState || getDropdown(followTip)}
        </Card.Title>
        {getTipText(pool)}
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => ({
  applicationState: state,
  user: state.user,
  loggedIn: state.loggedIn
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TipCard);
