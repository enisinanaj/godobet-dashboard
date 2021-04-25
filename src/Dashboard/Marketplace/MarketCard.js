import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TokenManager from "../../App/auth/TokenManager";
import Esaurito from '../../App/components/Esaurito';
import LocaleNumber from '../../App/components/LocaleNumber';
import PriceLabel from "../../App/components/PriceLabel";
import CoverImage from '../../assets/images/godobet-placeholder.jpg'
import '../../assets/scss/tip.css';
import BASE_CONFIG from "../../store/config";

const MarketCard = ({ marketData, handlePurchase, handleFreeSubscription, inPurchasing, user }) => {
  const getLatestImage = (media) => {
    if (!media || media.length === 0) {
      return CoverImage;
    }
    return media.sort((a, b) => b.mediaIteration - a.mediaIteration)[0].url;
  };
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    callUrl(BASE_CONFIG.API_URL + '/users/' + user.userCode + '/subscriptions?page=0&size=1000')
      .then(e => e.json())
      .then(subscriptions => {
        setSubscriptions(subscriptions?._embedded?.subscriptions)
      });
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

  const canPurchase = (item) => {
    const subscription = subscriptions.find(sub => sub.serviceId === Number(item.id) && sub.valid);
    return !subscription && item.author.userCode !== user.userCode && (item.maxSubscribers - item.subscribersCount) > 0
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
                marginBottom: 0,
                display: "inline",
              }}
            />
            
            <Card.Title as="h4" className={"mb-1 mt-4 mr-3 ml-3"} style={{display: "inline-block", fontSize: "1.2em"}}>
              <Link to={`/dashboard/service/${item.id}`}>{item.serviceName}</Link>
              <br />
              {!item.free && <PriceLabel amount={(item.price/100)}></PriceLabel>}
              {item.free && <h5 className={"text-success"}>Gratis</h5>}
            </Card.Title>
          </div>

          <Card.Body style={{minHeight: "210px", justifyContent: "space-between", display: "flex", flexDirection: "column"}}>
            <Card.Text style={{ overflowY: "auto", maxHeight: "160px" }}>
              {item.excerpt}
            </Card.Text>
            <Row style={{ justifyContent: "space-around" }}>
              <Button className="pull-right" variant="success" onClick={() => {window.location = `/dashboard/service/${item.id}`}}>
                <em class="feather icon-arrow-right mr-2"></em> Vai al dettaglio
              </Button>
              {!item.free && canPurchase(item) && <Button className="pull-right" onClick={() => handlePurchase(item)} disabled={inPurchasing} style={{minWidth: "161px"}} >
                {inPurchasing === item.id ? (
                  <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                ) : null }
                <em className={"feather icon-shopping-cart mr-2"}></em> Iscriviti
              </Button>}
              {item.free && canPurchase(item) && <Button className="pull-right" onClick={() => handleFreeSubscription(item)} disabled={inPurchasing} style={{minWidth: "161px"}} >
                {inPurchasing === item.id ? (
                  <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                ) : null }
                <em className={"feather icon-shopping-cart mr-2"}></em> Iscriviti
              </Button>}
              {(item.maxSubscribers - item.subscribersCount) <= 0 ? <Esaurito /> : null }
            </Row>
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
