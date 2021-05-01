import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import PriceLabel from "../../App/components/PriceLabel";
import LocaleNumber from "../../App/components/LocaleNumber";
import '../Marketplace/Marketplace.css'

const ServiceCard = (props) => {
  const getLatestImage = (media) => {
    if (!media || media.length === 0 || (media.length === 1 && !media[0].url)) {
      return CoverImage;
    }
    return media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url;
  };

  return props.services.map((item, index) => {

    return (
      <Col md={4} key={index}>
        <Card>
          <div className={"service-header-bar"}>
            <Card.Img
              variant="top"
              src={getLatestImage(item.media)}
              alt="CardImageCap"
              className={"service-image"}
            />

            <Card.Title as="h4" className={"p-2 mb-0 mt-3 service-title"}>
              <Link to={`/dashboard/service/${item.id}`}>{item.serviceName}</Link>
              <br />
              {!item.free && <PriceLabel amount={(item.price/100)}></PriceLabel>}
              {item.free && <h5 className={"text-success"}>Gratis</h5>}
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

          <Card.Body className={"service-card-body"} style={{minHeight: 160}} >
            <Card.Text className={"item-excerpt"}>
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
