import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import DEMO from "../../../store/constant";
import Prism from "../../../App/components/Prism";
import Gallery from "../../../App/components/Gallery";

import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../../assets/images/user/avatar-5.jpg';

import p1 from '../../../assets/images/ticket/p1.jpg';

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

class TicketDetails extends React.Component {

    render() {

        const basicCode = (
            `<div className="card">
    <div className="card-header">
        <h5>Hello card</h5>
        <div className="card-header-right">
            <i className="fa fa-down"/>
            <i className="fa fa-refresh"/>
            <i className="fa fa-x"/>
        </div>
    </div>
    <div className="card-block">
        <p>
            "Lorem ipsum dolor"
        </p>
    </div>
</div>`);

        return (
            <Aux>
                <Row className='btn-page'>
                    <Col lg={8}>
                        <Card>
                            <Card.Header>
                                <h5><i className="feather icon-lock mr-1"/>Private Ticket #1831786</h5>
                            </Card.Header>
                            <Card.Body className='topic-name'>
                                <Row className="align-items-center">
                                    <Col md={8}>
                                        <h4 className="d-inline-block mb-0">Theme customization issue</h4>
                                    </Col>
                                    <Col md={4}>
                                        <div className="btn-star">
                                            <a href={DEMO.BLANK_LINK} className="btn waves-effect waves-light btn-primary btn-sm mr-1">Mark as unread</a>
                                            <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-20 text-muted"/></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <div className="bg-light p-3">
                                <Row className="align-items-center">
                                    <Col className="btn-page">
                                        <button type="button" className="btn btn-secondary text-uppercase"><i className="mr-2 feather icon-message-square"/>Post a reply</button>
                                        <button type="button" className="btn btn-secondary text-uppercase"><i className="mr-2 feather icon-edit"/>Post a Note</button>
                                        <button type="button" className="btn btn-secondary text-uppercase"><i className="mr-2 feather icon-user-check"/>Customer Notes</button>
                                    </Col>
                                </Row>
                            </div>
                            <Card.Body className='hd-detail hdd-admin border-bottom'>
                                <Row>
                                    <Col sm='auto' className='text-center'>
                                        <img className="media-object wid-60 img-radius mb-2" src={avatar5} alt="Generic placeholder"/>
                                        <p><i className="fas fa-thumbs-up mr-1 text-primary"/>4</p>
                                    </Col>
                                    <Col>
                                        <div className="comment-top">
                                            <h4>You <small className="text-muted f-w-400">replied</small></h4>
                                            <p>1 day ago on Wednesday at 8:18am</p>
                                        </div>
                                        <div className="comment-content">
                                            <p>hello john doe,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                        </div>
                                        <Row>
                                            <Col>
                                                <Prism code={basicCode} language="html" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm='auto' className="pl-0 col-right">
                                        <Card.Body className="text-center">
                                            <ul className="list-unstyled mb-0 edit-del">
                                                <li className="d-inline-block f-20 mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit-2 text-muted"/></a></li>
                                                <li className="d-inline-block f-20"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                            </ul>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className='hd-detail hdd-user border-bottom bg-light'>
                                <Row>
                                    <Col sm='auto' className='text-center'>
                                        <img className="media-object wid-60 img-radius mb-2" src={avatar4} alt="Generic placeholder"/>
                                        <p><i className="fas fa-thumbs-up mr-1 text-primary"/>4</p>
                                    </Col>
                                    <Col>
                                        <div className="comment-top">
                                            <h4>You <small className="text-muted f-w-400">replied</small></h4>
                                            <p>1 day ago on Wednesday at 8:18am</p>
                                        </div>
                                        <div className="comment-content">
                                            <p>hello john doe,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                        </div>
                                        <Row>
                                            <Col>
                                                <Gallery images={[
                                                    {src: image1, thumbnail: thumb1, caption:"Gallery Image 1", useForDemo:true},
                                                    {src: image2, thumbnail: thumb2, caption:"Gallery Image 2", useForDemo:true},
                                                    {src: image3, thumbnail: thumb3, caption:"Gallery Image 3", useForDemo:true},
                                                    {src: image4, thumbnail: thumb4, caption:"Gallery Image 4", useForDemo:true},
                                                    {src: image5, thumbnail: thumb5, caption:"Gallery Image 5", useForDemo:true},
                                                    {src: image6, thumbnail: thumb6, caption:"Gallery Image 6", useForDemo:true}
                                                ]} backdropClosesModal />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm='auto' className="pl-0 col-right">
                                        <Card.Body className="text-center">
                                            <ul className="list-unstyled mb-0 edit-del">
                                                <li className="d-inline-block f-20 mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit-2 text-muted"/></a></li>
                                                <li className="d-inline-block f-20"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                            </ul>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className='hd-detail hdd-admin border-bottom'>
                                <Row>
                                    <Col sm='auto' className='text-center'>
                                        <img className="media-object wid-60 img-radius mb-2" src={avatar3} alt="Generic placeholder"/>
                                        <p><i className="fas fa-thumbs-up mr-1 text-primary"/>4</p>
                                    </Col>
                                    <Col>
                                        <div className="comment-top">
                                            <h4>You <small className="text-muted f-w-400">replied</small></h4>
                                            <p>1 day ago on Wednesday at 8:18am</p>
                                        </div>
                                        <div className="comment-content">
                                            <p>hello john doe,</p>
                                            <p>you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found
                                                <strong>every "td"</strong> tag in your page, just remove those things.
                                            </p>
                                            <p>and also</p>
                                            <p>in option button add "<strong>p-0</strong>" class in "<strong>I</strong>" tag</p>
                                            <p>to</p>
                                            <p/>
                                            <p>Thanks...</p>
                                        </div>
                                        <Row>
                                            <Col>
                                                <Prism code={basicCode} language="html" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm='auto' className="pl-0 col-right">
                                        <Card.Body className="text-center">
                                            <ul className="list-unstyled mb-0 edit-del">
                                                <li className="d-inline-block f-20 mr-1"><a href={DEMO.BLANK_LINK}><i className="feather icon-edit-2 text-muted"/></a></li>
                                                <li className="d-inline-block f-20"><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 text-muted"/></a></li>
                                            </ul>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="hdd-right-inner">
                            <Card.Header>
                                <h5>Ticket Details</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="alert alert-success d-block text-center text-uppercase"><i className="feather icon-check-circle mr-2"/>Verified Purchase</div>
                                <div className="select-block">
                                    <select className="js-status-multiple col-sm-12 form-control">
                                        <option>Open</option>
                                        <option>Close</option>
                                        <option>CLosed Forever</option>
                                    </select>
                                    <select className="js-assigned-multiple col-sm-12 form-control">
                                        <option value="avatar-5">Jack Pall</option>
                                        <option value="avatar-4">Liza Mac</option>
                                        <option value="avatar-3">Lina Hop</option>
                                        <option value="avatar-2">Sam Hunk</option>
                                        <option value="avatar-1">Jhon White</option>
                                    </select>
                                    <select className="js-category-multiple col-sm-12 form-control">
                                        <option value="prod-1">Able Admin</option>
                                        <option value="prod-2">Guru Dash</option>
                                        <option value="prod-3">Able pro</option>
                                        <option value="prod-4">Able Dash</option>
                                        <option value="prod-5">Dash Able</option>
                                    </select>
                                </div>
                            </Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Customer</label>
                                        <div className="media-body">
                                            <p className="mb-0"><img src={avatar5} alt="" className="wid-20 rounded mr-1 img-fluid"/><a href={DEMO.BLANK_LINK}>Jack Pall</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Contact</label>
                                        <div className="media-body">
                                            <p className="mb-0"><i className="feather icon-mail mr-1"/><a href={DEMO.BLANK_LINK}>mail@mail.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Category</label>
                                        <div className="media-body">
                                            <p className="mb-0"><img src={p1} alt="" className="wid-20 rounded mr-1 img-fluid"/><a href={DEMO.BLANK_LINK}>Alpha pro</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Assigned</label>
                                        <div className="media-body">
                                            <p className="mb-0"><img src={avatar4} alt="" className="wid-20 rounded mr-1 img-fluid"/><a href={DEMO.BLANK_LINK}>Lina Hop</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Created</label>
                                        <div className="media-body">
                                            <p className="mb-0"><i className="feather icon-calendar mr-1"/><label className="mb-0">Date</label></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="media align-items-center">
                                        <label className="mb-0 wid-100">Response</label>
                                        <div className="media-body">
                                            <p className="mb-0"><i className="feather icon-clock mr-1"/><label className="mb-0">Time</label></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <button type="button" className="btn btn-primary"><i className="m-r-5 feather icon-thumbs-up"/>Make Private</button>
                                    <button type="button" className="btn btn-danger"><i className="m-r-5 feather icon-trash-2"/>Delete</button>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default TicketDetails;