import React, { useState, useEffect } from "react";
import { Row, Col, Card, Tabs } from "react-bootstrap";
import { Alert, Tab } from "bootstrap";
import Chart from "react-apexcharts";
import Aux from "../../hoc/_Aux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import BASE_CONFIG from "../../store/config";
import TokenManager from "../../App/auth/TokenManager";
import MarketCard from "../Marketplace/MarketCard";
import satisfactionChart from "../Home/charts/pie";
import bookmakersChart from "../Home/charts/bookmakers";
import Loader from "../../App/layout/Loader";
import md5 from "md5";
import LocaleNumber from "../../App/components/LocaleNumber";
import CustomAlert from "../TipsterServices/CustomAlert";

function TipsterProfile(props) {
  const [favoriteBook, setFavoriteBook] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [userServices, setUserServices] = useState([]);
  const [winRatio, setWinRatio] = useState(0);
  const [avgStake, setAvgStake] = useState(0);

  let userId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/users/" + userId, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((user) => {
            setCurrentUser(user);
            if (user._embedded) {
              const winRatioVar = user._embedded.playedPools.filter((res) => {
                return res.outcome === "win";
              });
              let percentage = (winRatioVar.length / user._embedded.playedPools.length) * 100;
              setWinRatio(percentage);
  
              const stakesArray = user._embedded.playedPools.map((pool) => {
                return pool.stake;
              });
              let averageStake = stakesArray.reduce((a, b) => a + b) / stakesArray.length / 100;
              setAvgStake(averageStake);
            }
          });
      });
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    findBookmaker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const getAvatar = () => {
    if (!currentUser._embedded || !currentUser._embedded.media || currentUser._embedded.media.filter(m => m.mediaType === 'avatar').length < 1) {
      return "http://www.gravatar.com/avatar/" + md5(currentUser.email.toLowerCase().trim()) + "?s=32"
    }

    return currentUser._embedded.media.filter(m => m.mediaType === 'avatar').sort((a,b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime())[0].url;
  };

  const getCreampieData = () => {
    const data = satisfactionChart;
    if (!currentUser._embedded || !currentUser._embedded.playedPools) {
      return {
        options: {
          labels: [],
        },
        ...data,
        series: [0, 0, 100],
      };
    }

    const map = currentUser._embedded.playedPools.reduce((pie, pool) => {
      const h = { ...pie };

      if (!pool.outcome) {
        return h;
      }

      h[pool.outcome] =
        parseInt(pie[pool.outcome]) >= 0 ? 1 + parseInt(pie[pool.outcome]) : 1;
      return h;
    }, {});

    data.options.labels = Object.keys(map);
    data.series = Object.values(map);
    return data;
  };

  const bookmakersPie = () => {
    const data = bookmakersChart;
    if (!currentUser._embedded || !currentUser._embedded.playedPools) {
      return {
        options: {
          labels: [],
        },
        ...data,
        series: [0, 0, 100],
      };
    }

    const map = currentUser._embedded.playedPools.reduce((pie, pool) => {
      const h = { ...pie };

      if (!pool.bookmaker) {
        return h;
      }

      h[pool.bookmaker] =
        parseInt(pie[pool.bookmaker]) >= 0
          ? 1 + parseInt(pie[pool.bookmaker])
          : 1;
      return h;
    }, {});

    data.options.labels = Object.keys(map);
    data.series = Object.values(map);
    return data;
  };

  const getServices = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/users/" + userId + "/services", {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((res) => setUserServices(res._embedded ? res._embedded.services : []));
      });
  };

  const findBookmaker = () => {
    if (!currentUser._embedded) {
      return;
    }
    let bookmakers = currentUser._embedded.playedPools.map(
      (pool) => pool.bookmaker
    );
    const mostUsed = bookmakers
      .sort(
        (a, b) =>
          bookmakers.filter((v) => v === a).length -
          bookmakers.filter((v) => v === b).length
      )
      .pop();
    setFavoriteBook(mostUsed);
  };

  return (
    <Aux>
      {!currentUser.username && <CustomAlert message={"Questo tipster non ha impostato un nome utente."} /> }
      {currentUser.username ? (
        <Row md={12}>
          <Col md={4}>
            <Card className={"pb-5"}>
              <Row className="pt-5">
                <Col style={{ textAlign: "center" }}>
                  <img
                    src={getAvatar()}
                    height="200px"
                    alt=""
                    width="200px"
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                  <div className="p-4">
                    <h3>
                      {currentUser.username}
                    </h3>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <h4>{currentUser.totalSubscribers} Iscritti</h4>
                </Col>
              </Row>
              <hr />
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <span
                    className={
                      "mb-1" +
                      (currentUser.totalProfit >= 0
                        ? " text-success"
                        : " text-danger")
                    }
                  >
                    <LocaleNumber amount={currentUser.totalProfit} symbol={"%"} /> Profit
                  </span>
                </Col>
                <Col>
                  <span><LocaleNumber amount={winRatio} symbol={"%"} /> ROI </span>
                </Col>
              </Row>
              <hr />
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <span>
                    {currentUser._embedded.services
                      ? currentUser._embedded.services.length
                      : 0}{" "}
                    Servizi
                  </span>
                </Col>
                <Col>
                  <span>
                    {currentUser._embedded.pools
                      ? currentUser._embedded.pools.length
                      : 0}{" "}
                    Tips
                  </span>
                </Col>
              </Row>              
              <hr />
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <span>Bookmaker più utilizzato:</span>
                </Col>
              </Row>
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <strong>{favoriteBook}</strong>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            md={8}
            className="tab-user-card">
            <Tabs
              variant="pills"
              defaultActiveKey="services"
              id="tipster-profile-tabs"
            >
              <Tab eventKey="services" title="Servizi">
                <Row>
                  {userServices.length > 0 ? (
                    <MarketCard
                      col={6}
                      marketData={userServices}
                      inPurchasing={false}
                      handlePurchase={() => {}}
                      user={props.applicationState.user}
                    />
                  ) : (
                    <Col>
                      {" "}
                      <h4>Questo tipster non ha ancora pubblicato servizi</h4>
                    </Col>
                  )}
                </Row>
              </Tab>
              <Tab eventKey="stats" title="Stats">
                <Row>
                  <Col md={12} xl={6}>
                    <Card>
                      <Card.Header>
                        <Card.Title as="h5">Vincita/Perdita</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Chart {...getCreampieData()} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={12} xl={6}>
                    <Card>
                      <Card.Header>
                        <Card.Title as="h5">Top bookmakers</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Chart {...bookmakersPie()} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      ) : (
        <Loader />
      )}
    </Aux>
  );
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipsterProfile);
