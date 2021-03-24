import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import DEMO from "../../../store/constant";

import coinChart1 from './chart/coin-chart-1';
import coinChart2 from './chart/coin-chart-2';
import coinChart3 from './chart/coin-chart-3';
import coinChart4 from './chart/coin-chart-4';
import candlestickChart from './chart/candlestick-chart';

class Dashboard extends React.Component {

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12} className='stastic-slider-full-card'>
                        <Row className='no-gutters'>
                            <Col xl={3} md={6}>
                                <Card className="rounded-0">
                                    <Card.Body>
                                        <Row className="justify-content-between align-items-center mb-3">
                                            <Col>
                                                <span className="d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                            </Col>
                                            <Col>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">-0.997896</h6>
                                            </Col>
                                        </Row>
                                        <Chart {...coinChart1}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="rounded-0">
                                    <Card.Body>
                                        <Row className="justify-content-between align-items-center mb-3">
                                            <Col>
                                                <span className="d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                            </Col>
                                            <Col>
                                                <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.1456</h6>
                                            </Col>
                                        </Row>
                                        <Chart {...coinChart2}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="rounded-0">
                                    <Card.Body>
                                        <Row className="justify-content-between align-items-center mb-3">
                                            <Col>
                                                <span className="d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-blue f-22 m-r-5"/>Neo(NEO)</span>
                                            </Col>
                                            <Col>
                                                <h6 className="badge badge-light-primary float-right d-inline-block m-0">+5.78787</h6>
                                            </Col>
                                        </Row>
                                        <Chart {...coinChart3}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className="rounded-0">
                                    <Card.Body>
                                        <Row className="justify-content-between align-items-center mb-3">
                                            <Col>
                                                <span className="d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-green f-22 m-r-5"/>Ripple(RPL)</span>
                                            </Col>
                                            <Col>
                                                <h6 className="badge badge-light-success float-right d-inline-block m-0">-7.99999</h6>
                                            </Col>
                                        </Row>
                                        <Chart {...coinChart4}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card>
                                    <Card.Header>
                                        <h5>Bitcoin (USD) Price</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <Chart {...candlestickChart} />
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5>Transfer Coins</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-primary">Payment* <small className="text-muted ml-5">0.00001BTC</small></h5>
                                        <div className="input-group mb-5">
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Enter your payment"/>
                                            <div className="input-group-append">
                                                <select className="form-control">
                                                    <option value="">BTC</option>
                                                    <option value="">ETH</option>
                                                    <option value="">BTC</option>
                                                    <option value="">BTC</option>
                                                </select>
                                            </div>
                                        </div>
                                        <h5 className="text-primary">Wallet Address</h5>
                                        <div className="input-group mb-5">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text flex-column justify-content-center">
                                                    <span><i className="fa fa-credit-card" aria-hidden="true"/></span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="2xsD12F42xvR2deD4..." readOnly={true}/>
                                        </div>
                                        <Row className="align-items-end">
                                            <Col>
                                                <Table className="table-borderless m-b-0">
                                                    <tbody>
                                                    <tr>
                                                        <td className="p-0">
                                                            <p className="m-b-10">Sub total</p>
                                                            <p className="m-b-10">Coin fee</p>
                                                            <h6 className="m-b-0">Total</h6>
                                                        </td>
                                                        <td className="p-0">
                                                            <p className="m-b-10">BTC 143266</p>
                                                            <p className="m-b-10">BTC 1320</p>
                                                            <h6 className="m-b-0">BTC 12,342.098</h6>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col sm='auto'>
                                                <button className="btn btn-primary">Transfer</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5>Wallet Address</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-success mt-2">Bitcoin Wallet Address*</h5>
                                        <div className="form-group fill mb-5">
                                            <label className="floating-label" htmlFor="text1">Key</label>
                                            <input type="text" className="form-control" id="text1" aria-describedby="emailHelp" defaultValue="2xsD12F42xvR2deD42xsD12F"/>
                                        </div>
                                        <h5 className="text-success">Ethereum Wallet Address*</h5>
                                        <div className="form-group fill mb-5">
                                            <label className="floating-label" htmlFor="text2">Key</label>
                                            <input type="text" className="form-control" id="text2" aria-describedby="emailHelp" defaultValue="sD12F42xvR2de2xsD12F42xv"/>
                                        </div>
                                        <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sl-sm">Settings</a>
                                        <a href={DEMO.BLANK_LINK} className="btn btn-outline-success btn-sl-sm">View All</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5>Choose asset to trade</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="input-group input-group-prepend-big mb-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text flex-column justify-content-center px-5 border-0 border-bottom">
                                                    <p className="m-0 ">BTC</p>
                                                    <span>945.34 </span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control h-auto pl-5" aria-label="Text input with dropdown button" placeholder="0.25"/>
                                        </div>
                                        <div className="text-center">
                                            <i className="fas fa-exchange-alt f-20"/>
                                        </div>
                                        <div className="input-group input-group-prepend-big mt-4 mb-0">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text flex-column justify-content-center px-5 border-0 border-bottom">
                                                    <p className="m-0 ">ETH</p>
                                                    <span>945.34</span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control h-auto pl-5" aria-label="Text input with dropdown button" placeholder="0.25"/>
                                        </div>
                                        <div className="text-center">
                                            <p className="muted-text my-3 ">You could save up to $45,42</p>
                                            <button type="submit" className="btn btn-primary mt-3">Exchange</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5>Buy Bitcoin</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h6 className="m-b-25 text-primary">Amount</h6>
                                        <div className="input-group mb-3">
                                            <span className="input-group-prepend"><label className="input-group-text"><i className="fab fa-bitcoin"/></label></span>
                                            <input type="text" className="form-control" placeholder="Value" defaultValue="2"/>
                                        </div>
                                        <h6 className="m-b-25 text-primary">Ask Price</h6>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Value" value="at 721.3478  BTC each" disabled={true}/>
                                        </div>
                                        <Row className="align-items-end">
                                            <Col>
                                                <Table className="table-borderless m-b-0">
                                                    <tbody>
                                                    <tr>
                                                        <td className="p-0 border-0">
                                                            <p className="m-b-10">Sub total</p>
                                                            <p className="m-b-10">Coin fee</p>
                                                            <h6 className="m-b-0">Total</h6>
                                                        </td>
                                                        <td className="p-0 border-0">
                                                            <p className="m-b-10">BTC 143266</p>
                                                            <p className="m-b-10">BTC 1320</p>
                                                            <h6 className="m-b-0">BTC 12,342.098</h6>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col sm='auto'>
                                                <button className="btn btn-primary">Buy</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5>Sell Bitcoin</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h6 className="m-b-25 text-warning">Amount</h6>
                                        <div className="input-group mb-3">
                                            <span className="input-group-prepend"><label className="input-group-text"><i className="fab fa-bitcoin"/></label></span>
                                            <input type="text" className="form-control" placeholder="Value" defaultValue="2"/>
                                        </div>
                                        <h6 className="m-b-25 text-warning">Ask Price</h6>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Value" defaultValue="at 721.3478  BTC each" disabled/>
                                        </div>
                                        <Row className="align-items-end">
                                            <Col>
                                                <Table className="table-borderless m-b-0">
                                                    <tbody>
                                                    <tr>
                                                        <td className="p-0 border-0">
                                                            <p className="m-b-10">Sub total</p>
                                                            <p className="m-b-10">Coin fee</p>
                                                            <h6 className="m-b-0">Total</h6>
                                                        </td>
                                                        <td className="p-0 border-0">
                                                            <p className="m-b-10">BTC 143266</p>
                                                            <p className="m-b-10">BTC 1320</p>
                                                            <h6 className="m-b-0">BTC 12,342.098</h6>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col sm='auto'>
                                                <button className="btn btn-warning">SELL</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;