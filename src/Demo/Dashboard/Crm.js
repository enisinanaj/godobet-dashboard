import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import dashboard1 from '../../assets/images/widget/dashborad-1.jpg';
import dashboard2 from '../../assets/images/widget/dashborad-2.jpg';
import dashboard3 from '../../assets/images/widget/dashborad-3.jpg';

import totalLead from './chart/crm-total-lead';
import totalVendor from './chart/crm-total-vendor';
import totalInvoice from './chart/crm-total-invoice';

import monthlyProfit from './chart/crm-monthly-profit';
import clientMap1 from './chart/crm-client-map-1';
import clientMap2 from './chart/crm-client-map-2';

import DEMO from "../../store/constant";

class Crm extends React.Component {
    render() {
        return (
            <Aux>
               <Row>
                   <Col xl={4} md={6}>
                       <Card>
                           <Card.Body className="text-center">
                               <i className="feather icon-mail text-c-blue d-block f-40"/>
                               <h4 className="m-t-20"><span className="text-c-blue">8.62k</span> Subscribers</h4>
                               <p className="m-b-20">Your main list is growing</p>
                               <button className="btn btn-primary btn-sm btn-round">Manage List</button>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col xl={4} md={6}>
                       <Card>
                           <Card.Body className="text-center">
                               <i className="feather icon-twitter text-c-green d-block f-40"/>
                               <h4 className="m-t-20"><span className="text-c-green">+40</span> Followers</h4>
                               <p className="m-b-20">Your main list is growing</p>
                               <button className="btn btn-success btn-sm btn-round">Check them out</button>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col xl={4} md={12}>
                       <Card>
                           <Card.Body className="text-center">
                               <i className="feather icon-briefcase text-c-red d-block f-40"/>
                               <h4 className="m-t-20">Business Plan</h4>
                               <p className="m-b-20">This is your current active plan</p>
                               <button className="btn btn-danger btn-sm btn-round">Upgrade to VIP</button>
                           </Card.Body>
                       </Card>
                   </Col>

                   <Col md={6} xl={4}>
                       <Card>
                           <Card.Body>
                               <h5 className="mb-3">Total Leads</h5>
                               <p className="text-c-green f-w-500"><i className="fa fa-caret-up m-r-15"></i> 18% High than last month</p>
                               <Row>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Overall</p>
                                       <h5>76.12%</h5>
                                   </Col>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Monthly</p>
                                       <h5>16.40%</h5>
                                   </Col>
                                   <Col>
                                       <p className="text-muted m-b-5">Day</p>
                                       <h5>4.56%</h5>
                                   </Col>
                               </Row>
                           </Card.Body>
                           <Chart {...totalLead} />
                       </Card>
                   </Col>
                   <Col md={6} xl={4}>
                       <Card>
                           <Card.Body>
                               <h5 className="mb-3">Total Vendors</h5>
                               <p className="text-c-red f-w-500"><i className="fa fa-caret-down m-r-15"></i> 24% High than last month</p>
                               <Row>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Overall</p>
                                       <h5>68.52%</h5>
                                   </Col>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Monthly</p>
                                       <h5>28.90%</h5>
                                   </Col>
                                   <Col>
                                       <p className="text-muted m-b-5">Day</p>
                                       <h5>13.50%</h5>
                                   </Col>
                               </Row>
                           </Card.Body>
                           <Chart {...totalVendor} />
                       </Card>
                   </Col>
                   <Col md={6} xl={4}>
                       <Card>
                           <Card.Body>
                               <h5 className="mb-3">Invoice Generate</h5>
                               <p className="text-c-green f-w-500"><i className="fa fa-caret-up m-r-15"></i> 20% High than last month</p>
                               <Row>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Overall</p>
                                       <h5>68.52%</h5>
                                   </Col>
                                   <Col className="b-r-default">
                                       <p className="text-muted m-b-5">Monthly</p>
                                       <h5>28.90%</h5>
                                   </Col>
                                   <Col>
                                       <p className="text-muted m-b-5">Day</p>
                                       <h5>13.50%</h5>
                                   </Col>
                               </Row>
                           </Card.Body>
                           <Chart {...totalInvoice} />
                       </Card>
                   </Col>

                   <Col xl={8} md={12}>
                       <Card className="latest-activity-card">
                           <Card.Header>
                               <h5>Latest Activity</h5>
                           </Card.Header>
                           <Card.Body>
                               <div className="latest-update-box">
                                   <Row className="p-t-20 p-b-30">
                                       <Col sm='auto' className="text-right update-meta">
                                           <p className="text-muted m-b-0 d-inline-flex">just now</p>
                                           <i className="feather icon-sunrise bg-c-blue update-icon"/>
                                       </Col>
                                       <Col>
                                           <a href={DEMO.BLANK_LINK}>
                                               <h6>John Deo</h6>
                                           </a>
                                           <p className="text-muted m-b-15">The trip was an amazing and a life changing experience!!</p>
                                           <img src={dashboard1} alt="" className="img-fluid wid-100 m-r-15 m-b-10"/>
                                           <img src={dashboard3} alt="" className="img-fluid wid-100 m-r-15 m-b-10"/>
                                       </Col>
                                   </Row>
                                   <div className="row p-b-30">
                                       <div className="col-auto text-right update-meta">
                                           <p className="text-muted m-b-0 d-inline-flex">5 min ago</p>
                                           <i className="feather icon-file-text bg-c-blue update-icon"/>
                                       </div>
                                       <div className="col">
                                           <a href={DEMO.BLANK_LINK}>
                                               <h6>Administrator</h6>
                                           </a>
                                           <p className="text-muted m-b-0">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>
                                       </div>
                                   </div>
                                   <div className="row p-b-30">
                                       <div className="col-auto text-right update-meta">
                                           <p className="text-muted m-b-0 d-inline-flex">3 hours ago</p>
                                           <i className="feather icon-map-pin bg-c-blue update-icon"/>
                                       </div>
                                       <div className="col">
                                           <a href={DEMO.BLANK_LINK}>
                                               <h6>Jeny William</h6>
                                           </a>
                                           <p className="text-muted m-b-15">Happy Hour! Free drinks at <span> <a href={DEMO.BLANK_LINK} className="text-c-blue">Cafe-Bar all </a> </span>day long!</p>
                                           <iframe title='Able Pro Map'
                                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.961710410607!2d72.86204201533417!3d21.233366886136675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c84348989%3A0xfb5817a0f069bfe5!2sPhoenixcoded!5e0!3m2!1sen!2sin!4v1562323931692!5m2!1sen!2sin"
                                                   style={{width: '100%', height:'245px', border:0}} frameborder="0" allowfullscreen/>
                                       </div>
                                   </div>
                               </div>
                               <div className="text-right">
                                   <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Activity</a>
                               </div>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col xl={4} md={12}>
                       <Card className="feed-card">
                           <Card.Header>
                               <h5>Feeds</h5>
                           </Card.Header>
                           <Card.Body>
                               <div className="row m-b-30">
                                   <div className="col-auto p-r-0">
                                       <i className="feather icon-bell bg-c-blue feed-icon"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                       </a>
                                   </div>
                               </div>
                               <div className="row m-b-30">
                                   <div className="col-auto p-r-0">
                                       <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                       </a>
                                   </div>
                               </div>
                               <div className="row m-b-30">
                                   <div className="col-auto p-r-0">
                                       <i className="feather icon-file-text bg-c-green feed-icon"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                       </a>
                                   </div>
                               </div>
                               <div className="row m-b-20">
                                   <div className="col-auto p-r-0">
                                       <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                       </a>
                                   </div>
                               </div>
                               <div className="text-center">
                                   <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Feeds</a>
                               </div>
                           </Card.Body>
                       </Card>
                       <Card className="feed-card">
                           <Card.Header>
                               <h5>Upcoming Deadlines</h5>
                           </Card.Header>
                           <Card.Body>
                               <div className="row m-b-25">
                                   <div className="col-auto p-r-0">
                                       <img src={dashboard1} alt="" className="img-fluid wid-50"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">New able - Redesign</h6>
                                       </a>
                                       <p className="text-c-red m-b-0">2 Days Remaining</p>
                                   </div>
                               </div>
                               <div className="row m-b-25">
                                   <div className="col-auto p-r-0">
                                       <img src={dashboard2} alt="" className="img-fluid wid-50"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">New Admin Dashboard</h6>
                                       </a>
                                       <p className="text-c-red m-b-0">Proposal in 6 Days</p>
                                   </div>
                               </div>
                               <div className="row m-b-25">
                                   <div className="col-auto p-r-0">
                                       <img src={dashboard3} alt="" className="img-fluid wid-50"/>
                                   </div>
                                   <div className="col">
                                       <a href={DEMO.BLANK_LINK}>
                                           <h6 className="m-b-5">Logo Design</h6>
                                       </a>
                                       <p className="text-c-green m-b-0">10 Days Remaining</p>
                                   </div>
                               </div>
                               <div className="text-center">
                                   <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Feeds</a>
                               </div>
                           </Card.Body>
                       </Card>
                   </Col>

                   <Col xl={4} md={12}>
                       <Card>
                           <Card.Body>
                               <Row className="align-items-center m-l-0">
                                   <Col sm="auto">
                                       <i className="icon feather icon-users f-30 text-c-red"/>
                                   </Col>
                                   <Col>
                                       <h6 className="text-muted m-b-10">Happy Customers</h6>
                                       <h2 className="m-b-0">5984</h2>
                                   </Col>
                               </Row>
                           </Card.Body>
                       </Card>
                       <Card>
                           <Card.Body>
                               <h2 className="text-center f-w-400 ">8,421</h2>
                               <p className="text-center text-muted ">Unique Visitors</p>
                               <Chart {...monthlyProfit} />
                               <div className="m-t-20">
                                   <Row>
                                       <Col className="text-center ">
                                           <h6 className="f-20 f-w-400">2,849</h6>
                                           <p className="text-muted f-14 m-b-0">Today</p>
                                       </Col>
                                       <Col className="text-center ">
                                           <h6 className="f-20 f-w-400">3,587</h6>
                                           <p className="text-muted f-14 m-b-0">Yesterday</p>
                                       </Col>
                                   </Row>
                               </div>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col md={6} xl={4}>
                       <Card className="client-map">
                           <Card.Body>
                               <div className="client-detail">
                                   <div className="client-profile">
                                       <img src={avatar2} alt=""/>
                                   </div>
                                   <div className="client-contain">
                                       <h5>Gregory Johnes</h5>
                                       <a href="#!" className="text-muted">gregory@demo.com</a>
                                       <p className="text-muted m-0 p-t-10">Product Manager</p>
                                   </div>
                               </div>
                               <div className="">
                                   <div className="client-card-box">
                                       <Row>
                                           <Col className="text-center client-border p-10">
                                               <p className="text-muted m-0">Invites</p>
                                               <span className="text-c-blue f-20 f-w-600">345</span>
                                           </Col>
                                           <Col className="text-center p-10">
                                               <p className="text-muted m-0">Pending</p>
                                               <span className="text-c-blue f-20 f-w-600">12</span>
                                           </Col>
                                       </Row>
                                       <Col sm={12} className="client-border-card p-t-10">
                                           <p>Overall Activity</p>
                                       </Col>
                                       <Chart {...clientMap1} />
                                   </div>
                               </div>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col md={6} xl={4}>
                       <Card className="client-map">
                           <Card.Body>
                               <div className="client-detail">
                                   <div className="client-profile">
                                       <img src={avatar3} alt=""/>
                                   </div>
                                   <div className="client-contain">
                                       <h5>Gregory Johnes</h5>
                                       <a href="#!" className="text-muted">gregory@demo.com</a>
                                       <p className="text-muted m-0 p-t-10">Product Manager</p>
                                   </div>
                               </div>
                               <div className="">
                                   <div className="client-card-box">
                                       <Row>
                                           <Col className="text-center client-border p-10">
                                               <p className="text-muted m-0">Invites</p>
                                               <span className="text-c-green f-20 f-w-600">812</span>
                                           </Col>
                                           <Col className="text-center p-10">
                                               <p className="text-muted m-0">Pending</p>
                                               <span className="text-c-green f-20 f-w-600">00</span>
                                           </Col>
                                       </Row>
                                       <Col sm={12} className="client-border-card p-t-10">
                                           <p>Overall Activity</p>
                                       </Col>
                                       <Chart {...clientMap2} />
                                   </div>
                               </div>
                           </Card.Body>
                       </Card>
                   </Col>
               </Row>
            </Aux>
        );
    }
}

export default Crm;