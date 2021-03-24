import React from 'react';
import {
    Row,
    Col,
    Card,
    Dropdown
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import DEMO from "../../../store/constant";
import Prism from "../../../App/components/Prism";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../../assets/images/user/avatar-5.jpg';

import p1 from '../../../assets/images/ticket/p1.jpg';
import p2 from '../../../assets/images/ticket/p2.jpg';
import p3 from '../../../assets/images/ticket/p3.jpg';
import p4 from '../../../assets/images/ticket/p4.jpg';
import p5 from '../../../assets/images/ticket/p5.jpg';

import image1 from '../../../assets/images/light-box/l1.jpg';
import image2 from '../../../assets/images/light-box/l2.jpg';
import image3 from '../../../assets/images/light-box/l3.jpg';
import image4 from '../../../assets/images/light-box/l4.jpg';
import image5 from '../../../assets/images/light-box/l5.jpg';
import image6 from '../../../assets/images/light-box/l6.jpg';

import thumb1 from '../../../assets/images/light-box/sl1.jpg';
import thumb2 from '../../../assets/images/light-box/sl2.jpg';
import thumb3 from '../../../assets/images/light-box/sl3.jpg';
import thumb4 from '../../../assets/images/light-box/sl4.jpg';
import thumb5 from '../../../assets/images/light-box/sl5.jpg';
import thumb6 from '../../../assets/images/light-box/sl6.jpg';
import Gallery from "../../../App/components/Gallery";

class TicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello...',
        }
    }

    state = {
        gridSize: 'large-view',
        isOpen: false
    };

    updateContent = (value) => {
        this.setState({content:value})
    };

    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false
    };

    render() {
        const deskClass = ['btn-page', 'help-desk', this.state.gridSize];
        const gridDefault = 'btn waves-effect waves-light btn-primary';
        const gridActiveClass = 'btn waves-effect waves-light btn-primary active';

        const queView = 'q-view';
        const queViewActive = 'q-view active';

        const basicCode = (
            `<div class="card">
    <div class="card-header">
        <h5>Hello card</h5>
        <span> lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <div class="card-header-right">
            <i class="icofont icofont-rounded-down"/>
            <i class="icofont icofont-refresh"/>
            <i class="icofont icofont-close-circled"/>
        </div>
    </div>
    <div class="card-block">
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
    </div>
</div>`);

        return (
            <Aux>
                <Row className={deskClass.join(' ')}>
                    <Col xl={8} lg={12}>
                        <Card>
                            <Card.Body>
                                <nav className="navbar justify-content-between p-0 align-items-center">
                                    <h5>Ticket List</h5>
                                    <div className="btn-group btn-group-toggle">
                                        <label onClick={() => this.setState({gridSize: 'sm-view'})} className={this.state.gridSize === 'sm-view' ? gridActiveClass : gridDefault}>
                                            <input type="radio" name="options" id="option1" defaultChecked={true} /> <i className="feather icon-align-justify m-0"/>
                                        </label>
                                        <label onClick={() => this.setState({gridSize: 'md-view'})} className={this.state.gridSize === 'md-view' ? gridActiveClass : gridDefault}>
                                            <input type="radio" name="options" id="option1" defaultChecked={true} /> <i className="feather icon-menu m-0"/>
                                        </label>
                                        <label onClick={() => this.setState({gridSize: 'large-view'})} className={this.state.gridSize === 'large-view' ? gridActiveClass : gridDefault}>
                                            <input type="radio" name="options" id="option1" defaultChecked={true} /> <i className="feather icon-grid m-0"/>
                                        </label>
                                    </div>
                                </nav>
                            </Card.Body>
                        </Card>
                        <div className="ticket-block">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar1} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p1} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="ticket-block">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar4} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p2} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="ticket-block">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar3} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p3} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="ticket-block open-tic">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar4} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p4} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="ticket-block">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar2} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="ticket-block close-tic">
                            <Row className="row">
                                <Col sm='auto'>
                                    <img className="media-object wid-60 img-radius" src={avatar1} alt="Generic placeholder"/>
                                </Col>
                                <div className="col">
                                    <div className="card hd-body" onClick={() => this.setState({isOpen: true})}>
                                        <div className="row align-items-center">
                                            <div className="col border-right pr-0">
                                                <div className="card-body inner-center">
                                                    <div className="ticket-customer font-weight-bold">John lui</div>
                                                    <div className="ticket-type-icon private mt-1 mb-1"><i className="feather icon-lock mr-1 f-14"/>theme customisation issue</div>
                                                    <ul className="list-inline mt-2 mb-0">
                                                        <li className="list-inline-item"><img src={p3} alt="" className="wid-20 rounded mr-1 img-fluid"/>Piaf able</li>
                                                        <li className="list-inline-item"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>Assigned to Robert alia</li>
                                                        <li className="list-inline-item"><i className="feather icon-calendar mr-1 f-14"/>Updated 22 hours ago</li>
                                                        <li className="list-inline-item"><i className="feather icon-message-square mr-1 f-14"/>9</li>
                                                    </ul>
                                                    <div className="excerpt mt-4">
                                                        <h6><img src={avatar5} alt="" className="wid-20 avatar mr-2 rounded"/>Last comment from <a href={DEMO.BLANK_LINK}>Robert alia:</a></h6>
                                                        <p>hello John lui, you need to create "toolbar-options" div only once in a page&nbsp;in your code, this div fill found every "td" tag in your page, just remove those things. and
                                                            also in option
                                                            button add</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <a href={DEMO.BLANK_LINK} className="mr-3 text-muted"><i className="feather icon-eye mr-1"/>View Ticket</a>
                                                        <a href={DEMO.BLANK_LINK} className="text-danger"><i className="feather icon-trash-2 mr-1"/>Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto pl-0 right-icon">
                                                <div className="card-body">
                                                    <ul className="list-unstyled mb-0">
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top" className="active"><i className="feather icon-star text-warning"/></a></li>
                                                        <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top"><i className="feather icon-circle text-muted"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-auto hover-blk position-absolute shadow-sm rounded">
                                                <div className="card-body p-0 pt-2">
                                                    <div className="img-txt">
                                                        <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                        <p>You replied</p>
                                                    </div>
                                                    <p>hello Yogen dra,you need to create "toolbar-options" div only once in a page in your code, this div fill found every "td"...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={4} lg={12}>
                        <div className="right-side">
                            <Card className="mb-3">
                                <Card.Header className="card-header">
                                    <h5>Ticket Categories</h5>
                                </Card.Header>
                                <Card.Body className="p-3">
                                    <div className="cat-list">
                                        <div className="border-bottom pb-3 ">
                                            <div className="d-inline-block">
                                                <img src={p1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Piaf able</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-danger rounded-circle mr-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">1</a>
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={p2} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Pro able</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={p3} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>CRM admin</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-danger rounded-circle mr-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">1</a>
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={p4} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Alpha pro</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <div className="d-inline-block">
                                                <img src={p5} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Carbon able</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="pt-4 pb-4">
                                    <h5>Support Agent</h5>
                                </Card.Header>
                                <Card.Body className="p-3">
                                    <div className="cat-list">
                                        <div className="border-bottom pb-3 ">
                                            <div className="d-inline-block">
                                                <img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Tom Cook</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-danger rounded-circle mr-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">1</a>
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={avatar4} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Brad Larry</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-danger rounded-circle mr-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">1</a>
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={avatar3} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Jhon White</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="border-bottom pb-3 pt-3">
                                            <div className="d-inline-block">
                                                <img src={avatar2} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Mark Jobs</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <div className="d-inline-block">
                                                <img src={avatar1} alt="" className="wid-20 rounded mr-1 img-fluid"/>
                                                <a href={DEMO.BLANK_LINK}>Able Pro</a>
                                            </div>
                                            <div className="float-right span-content">
                                                <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-default badge-secondary rounded-circle mr-0 " data-toggle="tooltip" data-placement="top" title="" data-original-title="tooltip on top">3</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <div className={this.state.isOpen ? queViewActive : queView}>
                    <div className="overlay" onClick={() => this.setState({isOpen: false})}/>
                    <div className="content">
                        <Card.Body>
                            <h4>Chrome bug The page uses a roller to slide under a black block<span className="badge badge-danger text-uppercase ml-2 f-12">Private</span></h4>
                            <div className="border-bottom pb-3 pt-3">
                                <div className="row">
                                    <div className="col-md-7">
                                        <button type="button" className="btn waves-effect waves-light btn-outline-success btn-sm mr-1"><i className="feather icon-check mr-1"/> Closed</button>
                                        <p className="list-inline-item mb-0"><img src={p1} alt="" className="wid-20 rounded mr-1 img-fluid"/>Alpha pro</p>
                                    </div>
                                    <div className="col-md-5 text-right">
                                        <p className="d-inline-block mb-0"><i className="feather icon-calendar mr-1"/><label className="mb-0">Jan,1st,2019</label></p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        
                        <Col sm={12}>
                            <Card className='border-0 shadow-none'>
                                <Card.Body className='pr-0 pl-0 pt-0'>
                                    <Row>
                                        <Col sm='auto'>
                                            <img className="media-object wid-60 img-radius" src={avatar5} alt="Generic placeholder"/>
                                        </Col>
                                        <Col>
                                            <div className="tab-block border-bottom mb-4 pb-3">
                                                <h5><i className="feather icon-corner-up-left mr-1"/>Reply</h5>
                                            </div>
                                            <p className="text-danger"><span className="font-weight-bold mr-1">Note!</span>This ticket is closed. If you want to re-open it, just post a reply below.</p>
                                            <JoditEditor
                                                editorRef={this.setRef}
                                                value={this.state.content}
                                                config={this.config}
                                                onChange={this.updateContent}
                                            />
                                            <div className="btn-block mt-3">
                                                <Dropdown className="btn-group mb-2 mr-2">
                                                    <button type="button" className="btn waves-effect waves-light btn-primary">Primary</button>
                                                    <Dropdown.Toggle className="btn waves-effect waves-light btn-primary dropdown-toggle dropdown-toggle-split">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <a className="dropdown-item" href={DEMO.BLANK_LINK}>Action</a>
                                                        <a className="dropdown-item" href={DEMO.BLANK_LINK}>Another action</a>
                                                        <a className="dropdown-item" href={DEMO.BLANK_LINK}>Something else here</a>
                                                        <div className="dropdown-divider"/>
                                                        <a className="dropdown-item" href={DEMO.BLANK_LINK}>Separated link</a>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <div className="file btn waves-effect waves-light btn-outline-secondary file-btn mb-2 mr-2">
                                                    <i className="feather icon-paperclip"/>Add Atachment
                                                    <input type="file" name="file" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Row className="border-bottom border-top pb-3 pt-4 pl-3 pr-3">
                                    <Col sm='auto'>
                                        <img className="media-object wid-60 img-radius" src={avatar5} alt="Generic placeholder"/>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-0">Support Agent name<span className="badge badge-secondary ml-2">Support Agent</span></h6>
                                        <label className="text-muted">5 Month ago</label>
                                    </Col>
                                    <Col sm='auto'>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-inline-block mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a></li>
                                            <li className="d-inline-block"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} className='mt-3'>
                                        <div className="comment-content">
                                            <p>hello John lui,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                            <Prism code={basicCode} language="html" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="border-bottom border-top pb-3 pt-4 pl-3 pr-3">
                                    <Col sm='auto'>
                                        <img className="media-object wid-60 img-radius" src={avatar4} alt="Generic placeholder"/>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-0">Support Agent name<span className="badge badge-secondary ml-2">Support Agent</span></h6>
                                        <label className="text-muted">5 Month ago</label>
                                    </Col>
                                    <Col sm='auto'>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-inline-block mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a></li>
                                            <li className="d-inline-block"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} className='mt-3'>
                                        <div className="comment-content">
                                            <p>hello John lui,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                            <Gallery images={[
                                                {src: image1, thumbnail: thumb1, caption:"Gallery Image 1", useForDemo:true},
                                                {src: image2, thumbnail: thumb2, caption:"Gallery Image 2", useForDemo:true},
                                                {src: image3, thumbnail: thumb3, caption:"Gallery Image 3", useForDemo:true},
                                                {src: image4, thumbnail: thumb4, caption:"Gallery Image 4", useForDemo:true},
                                                {src: image5, thumbnail: thumb5, caption:"Gallery Image 5", useForDemo:true},
                                                {src: image6, thumbnail: thumb6, caption:"Gallery Image 6", useForDemo:true}
                                            ]} backdropClosesModal />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="border-bottom border-top pb-3 pt-4 pl-3 pr-3">
                                    <Col sm='auto'>
                                        <img className="media-object wid-60 img-radius" src={avatar3} alt="Generic placeholder"/>
                                    </Col>
                                    <Col>
                                        <h6 className="mb-0">Support Agent name<span className="badge badge-secondary ml-2">Support Agent</span></h6>
                                        <label className="text-muted">5 Month ago</label>
                                    </Col>
                                    <Col sm='auto'>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-inline-block mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a></li>
                                            <li className="d-inline-block"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} className='mt-3'>
                                        <div className="comment-content">
                                            <p>hello John lui,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                            <Prism code={basicCode} language="html" />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default TicketList;