import React from 'react';

import {
    Row,
    Col,
    Card,
    Tab,
    Nav
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import DEMO from "./../../../store/constant";

class IcoListing extends React.Component {

    render() {
        const option1 = (
            <Col lg={4} md={6} className="element-item realestate sponsored" data-category="realestate">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc XRP f-36 mr-3" title="XRP"/></a>
                            </div>
                            <div>
                                <h4 className="m-0 text-bold">Ripple</h4>
                                <span>Real Estate</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );

        const option2 = (
            <Col lg={4} md={6} className=" element-item finance sponsored " data-category="finance">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc BAT f-36 mr-3" title="bat"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">BasicAtt</h3>
                                <span>Finance</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$2.000</span> / $3.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">40%</span></p>
                                <p className="m-0">8d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );

        const option3 = (
            <Col lg={4} md={6} className=" element-item healthcare sponsored" data-category="healthcare">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc ADA f-36 mr-3" title="ADA"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Cardano</h3>
                                <span>Healthcare</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$13.900</span> / $25.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">62%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );

        const option4 = (
            <Col lg={4} md={6} className=" element-item advertising sponsored " data-category="advertising">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc LTC f-36 mr-3" title="LTC"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Litecoin</h3>
                                <span>Advertising</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$4.600</span> / $15.200</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">31%</span></p>
                                <p className="m-0">25d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option5 = (
            <Col lg={4} md={6} className=" element-item finance neutral " data-category="finance">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc XEM f-36 mr-3" title="XEM"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Nem</h3>
                                <span>Finance</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$9.600</span> / $20.000</p>
                                <p className="m-0">Neutral</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">48%</span></p>
                                <p className="m-0">6d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option6 = (
            <Col lg={4} md={6} className=" element-item banking neutral " data-category="banking">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc NEO f-36 mr-3" title="NEO"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">NEO</h3>
                                <span>Banking</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Neutral</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option7 = (
            <Col lg={4} md={6} className=" element-item exchange medium " data-category="exchange">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc EOS f-36 mr-3" title="EOS"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">EOS</h3>
                                <span>Exchange</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Medium</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option8 = (
            <Col lg={4} md={6} className=" element-item realestate notrated " data-category="realestate">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc XMR f-36 mr-3" title="XMR"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Monero</h3>
                                <span>Real Estate</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Not Rated</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option9 = (
            <Col lg={4} md={6} className=" element-item blockchain notrated " data-category="blockchain">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc QTUM f-36 mr-3" title="QTUM"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">QTUM</h3>
                                <span>Blockchain</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Not Rated</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option10 = (
            <Col lg={4} md={6} className=" element-item trading notrated " data-category="trading">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc LSK f-36 mr-3" title="LSK"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Lisk</h3>
                                <span>Trading</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Not Rated</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option11 = (
            <Col lg={4} md={6} className=" element-item smart notrated " data-category="smart">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc OMG f-36 mr-3" title="OMG"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">OmiGO</h3>
                                <span>Smart</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Not Rated</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option12 = (
            <Col lg={4} md={6} className=" element-item advertising medium " data-category="advertising">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc USDT f-36 mr-3" title="USDT"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Tether</h3>
                                <span>Advertising</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Medium</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option13 = (
            <Col lg={4} md={6} className=" element-item blockchain medium " data-category="blockchain">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc ZEC f-36 mr-3" title="ZEC"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Zcach</h3>
                                <span>Blockchain</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Medium</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option14 = (
            <Col lg={4} md={6} className=" element-item trading neutral " data-category="trading">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc STRAT f-36 mr-3" title="STRAT"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Stratis</h3>
                                <span>Trading</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Neutral</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option15 = (
            <Col lg={4} md={6} className=" element-item finance sponsored " data-category="finance">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc ARDR f-36 mr-3" title="ARDR"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Ardor</h3>
                                <span>Finance</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option16 = (
            <Col lg={4} md={6} className=" element-item finance sponsored " data-category="finance">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc STEEM f-36 mr-3" title="STEEM"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Steem</h3>
                                <span>Finance</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option17 = (
            <Col lg={4} md={6} className=" element-item banking sponsored " data-category="banking">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc WAVES f-36 mr-3" title="WAVES"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Wavrs</h3>
                                <span>Banking</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option18 = (
            <Col lg={4} md={6} className=" element-item exchange sponsored " data-category="exchange">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc REP f-36 mr-3" title="REP"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Augur</h3>
                                <span>Exchange</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option19 = (
            <Col lg={4} md={6} className=" element-item realestate sponsored " data-category="realestate">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc KMD f-36 mr-3" title="KMD"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Komodo</h3>
                                <span>Real Estate</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        const option20 = (
            <Col lg={4} md={6} className=" element-item blockchain sponsored " data-category="blockchain">
                <Card>
                    <Card.Body>
                        <div className="media align-items-center p-0">
                            <div className="text-center">
                                <a href={DEMO.BLANK_LINK}><i className="cc ARK f-36 mr-3" title="ARK"/></a>
                            </div>
                            <div>
                                <h3 className="m-0 text-bold">Ark</h3>
                                <span>Blockchain</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div>
                                <p className="m-0 font-weight-600"><span className="text-primary">$25.000</span> / $30.000</p>
                                <p className="m-0">Sponsored</p>
                            </div>
                            <div className="text-right">
                                <p className="m-0 font-weight-600"><span className="text-primary">84%</span></p>
                                <p className="m-0">9d left</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
        return (
            <Aux>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                    <Row className='btn-page'>
                        <Col xl={3} lg={12}>
                            <Card>
                                <Card.Body>
                                    <div className="form-group mb-0 fill">
                                        <label className="floating-label" htmlFor="filterserch"><i className="feather icon-search"/> Search here</label>
                                        <input type="text" className="form-control" id="filterserch" placeholder='Search Ico'/>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Nav variant="pills" className="flex-column m-0">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all" className='button btn btn-block text-left border-0 m-0 rounded-0 btn-outline-secondary'>All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sponsored" className='button btn btn-block text-left border-0 m-0 rounded-0 btn-outline-secondary'>Sponsored</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="medium" className='button btn btn-block text-left border-0 m-0 rounded-0 btn-outline-secondary'>Medium</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="neutral" className='button btn btn-block text-left border-0 m-0 rounded-0 btn-outline-secondary'>Neutral</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="rated" className='button btn btn-block text-left border-0 m-0 rounded-0 btn-outline-secondary'>Not rated</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card>
                        </Col>
                        <div className="col-xl-9 col-lg-12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                        <Row className="grid">
                                            {option1}
                                            {option2}
                                            {option3}
                                            {option4}
                                            {option5}
                                            {option6}
                                            {option7}
                                            {option8}
                                            {option9}
                                            {option10}
                                            {option11}
                                            {option12}
                                            {option13}
                                            {option14}
                                            {option15}
                                            {option16}
                                            {option17}
                                            {option18}
                                            {option19}
                                            {option20}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sponsored">
                                        <Row className="grid">
                                            {option1}
                                            {option2}
                                            {option3}
                                            {option4}
                                            {option15}
                                            {option16}
                                            {option17}
                                            {option18}
                                            {option19}
                                            {option20}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="medium">
                                        <Row className="grid">
                                            {option7}
                                            {option12}
                                            {option13}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="neutral">
                                        <Row className="grid">
                                            {option5}
                                            {option6}
                                            {option14}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="rated">
                                        <Row className="grid">
                                            {option8}
                                            {option9}
                                            {option10}
                                            {option11}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                        </div>
                    </Row>
                </Tab.Container>
            </Aux>
        );
    }
}

export default IcoListing;