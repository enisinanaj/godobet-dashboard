import React, { useState } from "react";
import { Card, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const SubscriberCard = (props) => {
  console.log(props.services);

  return props.services.map((item, index) => {
    return (
      <Col md={4} key={index}>
        <Card>
          <div className="profile-card" style={{ minHeight: 200 }}>
            <Card.Img
              variant="top"
              src={item._links.serviceMedia.href}
              alt="CardImageCap"
            />
            <Card.ImgOverlay>
              <Card.Title className="text-right">
                <Link to={`edit-card/${item.id}`}>
                  <a title="Modifica">
                    <i
                      className="feather icon-edit-2"
                      style={{
                        cursor: "pointer",
                        background: "white",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </a>
                </Link>
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="text-left">
              <Card.Title as="h2" style={{ color: "white" }}>
                {item.price} €
              </Card.Title>
            </Card.Body>
          </div>
          <Card.Body>
            <Link to={`details/${item.id}`}>
              <Card.Title as="h5">{item.serviceName}</Card.Title>
            </Link>
            <Card.Text>
              <span>
                {" "}
                <i
                  className="feather icon-users"
                  style={{ paddingRight: "5px" }}
                />{" "}
                Numero massimo iscrizioni: {item.maxSubscribers}
              </span>
              <br />
              <span>
                {" "}
                <i
                  className="feather icon-calendar"
                  style={{ paddingRight: "5px" }}
                />{" "}
                Durata iscrizione: {item.duration} giorni
              </span>
              <br />
            </Card.Text>

            <Card.Text style={{ overflowY: "scroll", maxHeight: "160px" }}>
              {item.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriberCard);
