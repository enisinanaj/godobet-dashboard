import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Esaurito from '../../App/components/Esaurito';
import LocaleNumber from '../../App/components/LocaleNumber';
import PriceLabel from "../../App/components/PriceLabel";
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import '../../assets/scss/tip.css';

const MarketCard = ({ marketData, handlePurchase, inPurchasing, user }) => {
  const getLatestImage = (media) => {
    if (!media || media.length === 0) {
      return CoverImage;
    }
    return media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url;
  };

  const canPurchase = (item) => {
    return item.author.userCode !== user.userCode && (item.maxSubscribers - item.subscribersCount) > 0
  }

  return marketData.map((item, index) => {
    return (
      <Col md={4} key={index}>
        <Card>
          <div className="">
            <Card.Img
              variant="top"
              src={getLatestImage(item.media)}
              alt="CardImageCap"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                margin: "20px",
                display: "inline",
              }}
            />
            
            <Card.Title as="h4" className={"mb-1 mt-4 mr-3 ml-3"} style={{display: "inline-block", fontSize: "1.2em"}}>
              <Link to={`/dashboard/service/${item.id}`}>{item.serviceName}</Link>
            </Card.Title>
          </div>

          <Card.Body style={{minHeight: "210px"}}>
            <Card.Text style={{ overflowY: "auto", maxHeight: "160px" }}>
              {item.excerpt}
            </Card.Text>
            <div>
              {canPurchase(item) && <Button className="pull-right" onClick={() => handlePurchase(item)} disabled={inPurchasing} >
                {inPurchasing === item.id ? (
                  <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                ) : null }
                Iscriviti subito a soli <PriceLabel amount={(item.price/100)}></PriceLabel>
              </Button>}
              {(item.maxSubscribers - item.subscribersCount) <= 0 ? <Esaurito /> : null}
            </div>
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
                  <Col>
                      <h6 className="mb-1"><i className="feather icon-calendar" style={{ paddingRight: "5px" }} /> {item.duration} giorni</h6>
                      <p className="mb-0">Durata</p>
                  </Col>
                  <Col>
                      <h6 className={"mb-1" + ((item.totalProfit >= 0) ? " text-success" : " text-danger")}><LocaleNumber amount={item.totalProfit} symbol={"%"}></LocaleNumber></h6>
                      <p className="mb-0">Profitto</p>
                  </Col>
              </Row>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
};

export default MarketCard;
