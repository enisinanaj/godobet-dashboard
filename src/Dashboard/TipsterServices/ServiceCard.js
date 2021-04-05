import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Esaurito from '../../App/components/Esaurito'
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import PriceLabel from "../../App/components/PriceLabel";
import LocaleNumber from "../../App/components/LocaleNumber";

const ServiceCard = (props) => {
  const getLatestImage = (media) => {
    if (!media || media.length === 0 || (media.length == 1 && !media[0].url)) {
      return CoverImage;
    }
    return media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url;
  };

  return props.services.map((item, index) => {

    return (
      <Col md={4} key={index}>
        <Card>
          <div className="">
            <Card.Img
              variant="top"
              src={getLatestImage(item.media)}
              alt="CardImageCap"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                margin: '20px',
                display: 'inline',
              }}
            />

            <Card.Title
              as="h4"
              className={'mb-1 mt-4 mr-3 ml-3'}
              style={{ display: 'inline-block', fontSize: '1.2em' }}
            >
              <Link to={`/dashboard/service/${item.id}`}>{item.serviceName}</Link>
            </Card.Title>

            <Card.ImgOverlay
              style={{
                height: '20px',
                padding: 0,
                marginRight: '20px',
                marginTop: '20px',
              }}
            >
              {!props.disableEdit && (
                <Card.Title className="text-right">
                  <Link to={`edit-card/${item.id}`}>
                    <i
                      title="Modifica"
                      className="feather icon-edit-2"
                      style={{
                        cursor: 'pointer',
                        background: 'white',
                        color: 'gray',
                        borderRadius: '50%',
                        padding: '5px',
                      }}
                    />
                  </Link>
                </Card.Title>
              )}
            </Card.ImgOverlay>
          </div>

          <Card.Body>
            <Link to={`/dashboard/service/${item.id}`}>
              <Card.Title as="h5"> <PriceLabel amount={item.price/100}></PriceLabel> </Card.Title>
            </Link>
            <Card.Text>
              {item.maxSubscribers - item.subscribersCount === 0 ? (
                <Esaurito />
              ) : null}
            </Card.Text>
            <Card.Text style={{ overflowY: 'auto', maxHeight: '160px' }}>
              {item.excerpt}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Row className="text-center">
              <Col>
                <h6 className="mb-1">
                  <i
                    className="feather icon-users"
                    style={{ paddingRight: '5px' }}
                  />{' '}
                  {item.subscribersCount} su {item.maxSubscribers}
                </h6>
                <p className="mb-0">Iscritti</p>
              </Col>
              {props.showRemainingDays && <Col>
                <h6 className="mb-1">
                  <i
                    className="feather icon-calendar"
                    style={{ paddingRight: '5px' }}
                  />{' '}
                  {item.remainingDays}
                </h6>
                <p className="mb-0">Giorni rimanenti</p>
              </Col>}
              {!props.showRemainingDays && <Col>
                <h6 className="mb-1">
                  <i
                    className="feather icon-calendar"
                    style={{ paddingRight: '5px' }}
                  />{' '}
                  {item.duration} giorni
                </h6>
                <p className="mb-0">Durata</p>
              </Col>}
              <Col>
                <h6 className={'mb-1' + (item.totalProfit >= 0 ? ' text-success' : ' text-danger')} >
                  <LocaleNumber amount={item.totalProfit} symbol={"%"}></LocaleNumber>
                </h6>
                <p className="mb-0">Profitto</p>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
