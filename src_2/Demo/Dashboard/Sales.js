import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, Table} from 'react-bootstrap';

import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';

import phone1 from '../../assets/images/widget/PHONE1.jpg';
import phone2 from '../../assets/images/widget/PHONE2.jpg';
import phone3 from '../../assets/images/widget/PHONE3.jpg';

import seoAnalytics1 from './chart/sale-seo-analytics-1';
import seoAnalytics2 from './chart/sale-seo-analytics-2';
import seoAnalytics3 from './chart/sale-seo-analytics-3';
import seoAnalytics4 from './chart/sale-seo-analytics-4';

import secEcommerceChartLine from './chart/sale-sec-ecommerce-chart-line';
import secEcommerceChartBar from './chart/sale-sec-ecommerce-chart-bar';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import monthlyProfilt1 from "../Widget/chart/monthly-profit-1";
import monthlyProfilt2 from "../Widget/chart/monthly-profit-2";

class Sales extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>20500</h3>
                                <p className="text-muted">Site Analysis</p>
                                <Chart {...seoAnalytics1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>20500</h3>
                                <p className="text-muted">Total Sales</p>
                                <Chart {...seoAnalytics2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>28000</h3>
                                <p className="text-muted">Total Visits</p>
                                <Chart {...seoAnalytics3} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>59600</h3>
                                <p className="text-muted">Total Usage</p>
                                <Chart {...seoAnalytics4} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-green pb-0">
                                <Row className="text-white">
                                    <Col sm='auto'>
                                        <h4 className="m-b-5 text-white">$654</h4>
                                        <h6 className="text-white">+1.65(2.56%)</h6>
                                    </Col>
                                    <Col className="text-right">
                                        <h6 className="text-white">Friday</h6>
                                    </Col>
                                </Row>
                                <Chart {...secEcommerceChartLine} />
                                <Row className="justify-content-center">
                                    <Col sm={8}>
                                        <Chart {...secEcommerceChartBar} />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <h4>$2654.00</h4>
                                <p className="text-muted">Sales in Nov.</p>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">From Market</p>
                                        <h6>$1860.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Referral</p>
                                        <h6>$500.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Affiliate</p>
                                        <h6>$294.00</h6>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={8} md={6}>
                        <Card className="table-card latest-activity-card">
                            <Card.Header>
                                <h5>Latest Order</h5>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order ID</th>
                                        <th>Photo</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>John Deo</td>
                                        <td>#81412314</td>
                                        <td><img src={phone1} alt="" className="img-fluid"/></td>
                                        <td>Moto G5</td>
                                        <td>10</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-warning">Pending</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Jenny William</td>
                                        <td>#68457898</td>
                                        <td><img src={phone2} alt="" className="img-fluid"/></td>
                                        <td>iPhone 8</td>
                                        <td>16</td>
                                        <td>20-2-2017</td>
                                        <td><label className="badge badge-light-primary">Paid</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Lori Moore</td>
                                        <td>#45457898</td>
                                        <td><img src={phone3} alt="" className="img-fluid"/></td>
                                        <td>Redmi 4</td>
                                        <td>20</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-success">Success</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={12}>
                        <Card className="bg-c-yellow order-card">
                            <Card.Body>
                                <h6 className="text-white">Revenue</h6>
                                <h2 className="text-white">$42,562</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-up m-l-10"/></p>
                                <i className="card-icon feather icon-filter"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="bg-c-blue order-card">
                            <Card.Body>
                                <h6 className="text-white">Orders Received</h6>
                                <h2 className="text-white">486</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-up m-l-10 m-r-10"></i>$1,055 <i className="feather icon-arrow-down"/></p>
                                <i className="card-icon feather icon-users"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="bg-c-green order-card">
                            <Card.Body>
                                <h6 className="text-white">Total Sales</h6>
                                <h2 className="text-white">1641</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-down m-l-10 m-r-10"></i>$1,055 <i className="feather icon-arrow-up"/></p>
                                <i className="card-icon feather icon-radio"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card review-card">
                            <Card.Header>
                                <h5>Customer Reviews</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="review-block">
                                    <div className="row">
                                        <div className="col-sm-auto p-r-0">
                                            <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                        </div>
                                        <div className="col">
                                            <h6 className="m-b-15">John Deo <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                                took a
                                                galley of type and scrambled it to make a type specimen book.</p>
                                            <a href={DEMO.BLANK_LINK} className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"/>Helpful?</a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-heart-on text-c-red m-r-15"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-auto p-r-0">
                                            <img src={avatar4} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                        </div>
                                        <div className="col">
                                            <h6 className="m-b-15">Allina D’croze <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                            <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                                took a
                                                galley of type and scrambled it to make a type specimen book.</p>
                                            <a href={DEMO.BLANK_LINK} className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"/>Helpful?</a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-heart-on text-c-red m-r-15"/></a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a>
                                            <blockquote className="blockquote m-t-15 m-b-0">
                                                <h6>Allina D’croze</h6>
                                                <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of the industry.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right  m-r-20">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Customer Reviews</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center f-w-400 ">$45,567</h2>
                                <p className="text-center text-muted ">Monthly Profit</p>
                                <Chart {...monthlyProfilt1} />
                                <div className="m-t-20">
                                    <Row>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">$6,234</h6>
                                            <p className="text-muted f-14 m-b-0">Today</p>
                                        </Col>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">$4,387</h6>
                                            <p className="text-muted f-14 m-b-0">Yesterday</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center f-w-400 ">2,413</h2>
                                <p className="text-center text-muted ">Total Sales</p>
                                <Chart {...monthlyProfilt2} />
                                <div className="m-t-20">
                                    <Row>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">1578</h6>
                                            <p className="text-muted f-14 m-b-0">Today</p>
                                        </Col>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">1028</h6>
                                            <p className="text-muted f-14 m-b-0">Yesterday</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Sales;