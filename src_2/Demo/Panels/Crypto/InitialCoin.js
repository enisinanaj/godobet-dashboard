import React from 'react';
import Timer from 'react-compound-timer';

import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

class InitialCoin extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <Card className="bg-pattern">
                            <Card.Header className="py-5 text-center">
                                <h2 className="text-center mb-4"><span className="text-primary">Crypto</span> The <span className="text-primary">Revolution</span> In Crypto Market</h2>
                                <h4 className="text-center mb-4">Buy now and get +30% extra bonus</h4>
                                <h5>Distribution Ends In</h5>
                                <div className="clock m-5">
                                    <Timer
                                        initialTime={60000 * 60 * 24*10 - 1000}
                                        direction="backward"
                                    >
                                        {() => (
                                            <React.Fragment>
                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white"><Timer.Days /></span>
                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white">D</span>
                                                <span style={{lineHeight: 2}} className="text-dark m-2 display-4">:</span>

                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white"><Timer.Hours /></span>
                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white">H</span>
                                                <span style={{lineHeight: 2}} className="text-dark m-2 display-4">:</span>

                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white"><Timer.Minutes /></span>
                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white">M</span>
                                                <span style={{lineHeight: 2}} className="text-dark m-2 display-4">:</span>

                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white"><Timer.Seconds /></span>
                                                <span style={{lineHeight: 2}} className="m-2 px-2 bg-dark rounded display-4 text-white">S</span>
                                            </React.Fragment>
                                        )}
                                    </Timer>
                                </div>
                                <Row className="justify-content-center">
                                    <Col sm={9}>
                                        <button className="btn btn-success mb-2">Buy Token</button>
                                        <div className="row justify-content-between">
                                            <div className="col-auto">
                                                <p>Midcap in <b>267 days</b></p>
                                            </div>
                                            <div className="col-auto">
                                                <p>Midcap in <b>267 days</b></p>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                        <div className="row justify-content-between text-center mt-3">
                                            <div className="col-auto">
                                                <h5>Total Tokens: 123.0122</h5>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Tokens In Circulation: 5603.3011</h5>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Token Price: $1.0023</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Header>
                        </Card>
                        <Card className="bg-pattern">
                            <Card.Body className="py-5 text-center">
                                <h2 className="text-center mb-4"><span className="text-primary">Crypto</span> The <span className="text-primary">Revolution</span> In Crypto Market</h2>
                                <div className="row align-items-end">
                                    <div className="col-sm-2"><p>1300 ETH raised</p></div>
                                    <div className="col-sm-2"><div className="badge badge-pill badge-success m-b-5">bonus</div><p>23%</p></div>
                                    <div className="col-sm-2"><div className="badge badge-pill badge-success m-b-5">bonus</div><p>14%</p></div>
                                    <div className="col-sm-2"><div className="badge badge-pill badge-success m-b-5">bonus</div><p>15%</p></div>
                                    <div className="col-sm-2"><div className="badge badge-pill badge-success m-b-5">bonus</div><p>7%</p></div>
                                    <div className="col-sm-2"><p>Last-chance!</p></div>
                                    <div className="col-sm-2"/>
                                </div>
                                <div className="progress mb-4 hei-40">
                                    <div className="progress-bar" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                    <div className="progress-bar bg-danger active-progress" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                    <div className="progress-bar bg-transparent" role="progressbar" style={{width: '16.66%'}} aria-valuenow="16.66" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                                <div className="row align-items-top text-left">
                                    <div className="col-sm-2"><p>Round First</p></div>
                                    <div className="col-sm-2"><p>Round Second</p></div>
                                    <div className="col-sm-2"><p>2600 ETH</p></div>
                                    <div className="col-sm-2"><p>3900 ETH</p></div>
                                    <div className="col-sm-2"><p>7900 ETH</p></div>
                                    <div className="col-sm-2 text-right"><p>19000 ETH</p></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default InitialCoin;