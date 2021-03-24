import React from 'react';
import {Row, Col, Card, Collapse, ProgressBar, Dropdown} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

import avatar1 from "../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../assets/images/user/avatar-3.jpg";

class TaskBoard extends React.Component {
    state = {
        activateCollapse: [1, 2, 3]
    };

    collapseHandler = (activeKey) => {
        if (this.state.activateCollapse.findIndex(item => item === activeKey) > -1) {
            this.setState(prevState => {
                return {
                    activateCollapse: (this.state.activateCollapse).filter(item => item !== parseInt(activeKey))
                };
            })
        } else {
            this.setState(prevState => {
                return {
                    activateCollapse: [...prevState.activateCollapse, parseInt(activeKey)]
                };
            })
        }
    };

    render() {
        const {activateCollapse} = this.state;
        return (
            <Aux>
                <Row>
                    <Col xl={3}>
                        <Card className='task-board-left'>
                            <Card.Header>
                                <Card.Title as='h5'>Search Box</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control add_task_todo" placeholder="Search here..." required="" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary btn-msg-send" type="button"><i className="fa fa-search"/></button>
                                    </div>
                                </div>
                                <div className="task-right">
                                    <div className="task-right-header-status" onClick={() => this.collapseHandler(1)} aria-controls="completed-status">
                                        <span className="f-w-400" data-toggle="collapse">Completed Status</span>
                                        <i className="fa fa-caret-down float-right m-t-5"/>
                                    </div>
                                    <Collapse in={(activateCollapse.findIndex(item => item === 1) > -1)}>
                                        <div className="taskboard-right-progress" id='completed-status'>
                                            <h6 className="m-t-10">Highest priority</h6>
                                            <ProgressBar variant="success" now={80} />
                                            <h6 className="m-t-10">High priority</h6>
                                            <ProgressBar variant="info" now={70} />
                                            <h6 className="m-t-10">Normal priority</h6>
                                            <ProgressBar variant="warning" now={50} />
                                            <h6 className="m-t-10">Low priority</h6>
                                            <ProgressBar variant="danger" now={60} />
                                        </div>
                                    </Collapse>
                                    <div className="task-right-header-users" onClick={() => this.collapseHandler(2)} aria-controls="assign-users">
                                        <span className="f-w-400" data-toggle="collapse">Assign Users</span>
                                        <i className="fa fa-caret-down float-right m-t-5"/>
                                    </div>
                                    <Collapse in={(activateCollapse.findIndex(item => item === 2) > -1)}>
                                        <div className="user-box assign-user taskboard-right-users" id='assign-users'>
                                            <div className="media mb-2">
                                                <div className="media-left media-middle mr-3">
                                                    <a href={DEMO.BLANK_LINK}>
                                                        <img className="media-object img-radius" src={avatar1} alt="Generic placeholder"/>
                                                        <div className="live-status bg-danger"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Josephin Doe</h6>
                                                    <p>Santa Ana,CA</p>
                                                </div>
                                            </div>
                                            <div className="media mb-2">
                                                <div className="media-left media-middle mr-3">
                                                    <a href={DEMO.BLANK_LINK}>
                                                        <img className="media-object img-radius" src={avatar2} alt="Generic placeholder"/>
                                                            <div className="live-status bg-success"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Josephin Doe</h6>
                                                    <p>Huntingston, NJ</p>
                                                </div>
                                            </div>
                                            <div className="media mb-2">
                                                <div className="media-left media-middle mr-3">
                                                    <a href={DEMO.BLANK_LINK}>
                                                        <img className="media-object img-radius" src={avatar3} alt="Generic placeholder"/>
                                                            <div className="live-status bg-danger"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Josephin Doe</h6>
                                                    <p>Willingstion, WA</p>
                                                </div>
                                            </div>
                                            <div className="media mb-2">
                                                <div className="media-left media-middle mr-3">
                                                    <a href={DEMO.BLANK_LINK}>
                                                        <img className="media-object img-radius" src={avatar2} alt="Generic placeholder"/>
                                                            <div className="live-status bg-success"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Josephin Doe</h6>
                                                    <p>Illions, IL</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <div className="task-right-header-revision" onClick={() => this.collapseHandler(3)} aria-controls="revision">
                                        <span className="f-w-400" data-toggle="collapse">Revision</span>
                                        <i className="fa fa-caret-down float-right m-t-5"/>
                                    </div>
                                    <Collapse in={(activateCollapse.findIndex(item => item === 3) > -1)}>
                                        <div className="taskboard-right-revision user-box" id='revision'>
                                            <div className="media">
                                                <div className="media-left mr-3">
                                                    <a className="btn btn-outline-primary btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-cogs"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="chat-header f-w-400 mb-1">Drop the IE specific hacks for temporal inputs</div>
                                                    <p className="chat-header  text-muted">4 minutes ago</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left mr-3">
                                                    <a className="btn btn-outline-danger btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-share-alt"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="chat-header f-w-400 mb-1">Have Carousel ignore keyboard events</div>
                                                    <p className="chat-header text-muted">12 Dec,2015</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left mr-3">
                                                    <a className="btn btn-outline-warning btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-font"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="chat-header f-w-400 mb-1">Add full font overrides for popovers and tooltips</div>
                                                    <p className="chat-header text-muted">2 month ago</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left mr-3">
                                                    <a className="btn btn-outline-success btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-phone"/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="chat-header">Responsive Asssignment</div>
                                                    <p className="chat-header  text-muted">6 month ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9} className='filter-bar'>
                        <nav className="navbar m-b-30 p-10">
                            <ul className="nav">
                                <li className="nav-item f-text active">
                                    <a className="nav-link text-secondary" href={DEMO.BLANK_LINK}>Filter: <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle variant='link' className='text-secondary nav-link' id="dropdown-basic">
                                            <span className="fa fa-clock-o"/> By Date
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Today</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Yesterday</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>This week</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>This month</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>This year</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle variant='link' className='text-secondary nav-link' id="bystatus">
                                            <span className="fa fa-line-chart"/> By Status
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Open</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle variant='link' className='text-secondary nav-link' id="bypriority">
                                            <span className="fa fa-list-ol"/> By Priority
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Highest</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>High</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Normal</Dropdown.Item>
                                            <Dropdown.Item href={DEMO.BLANK_LINK}>Low</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                            <div className="nav-item nav-grid f-view">
                                <span className="m-r-15">View Mode: </span>
                                <button type="button" className="btn btn-primary btn-icon m-0 mr-1" data-toggle="tooltip" data-placement="top" title="list view">
                                    <i className="fa fa-list-ul"/>
                                </button>
                                <button type="button" className="btn btn-primary btn-icon m-0" data-toggle="tooltip" data-placement="top" title="grid view">
                                    <i className="fa fa-th-large"/>
                                </button>
                            </div>
                        </nav>
                        <Row>
                            <Col md={6}>
                                <Card className='card-border-c-blue'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-primary float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-primary">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='card-border-c-green'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-success float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-success">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='card-border-c-red'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-danger float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-danger">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='danger' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='danger' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='danger' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='card-border-c-yellow'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-warning float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-warning">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='warning' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='warning' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='warning' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='card-border-c-green'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-success float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-success">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='success' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='card-border-c-blue'>
                                    <Card.Header>
                                        <a href={DEMO.BLANK_LINK} className="text-secondary">#24. Create UI design model </a>
                                        <span className="label label-primary float-right"> 28 January, 2015 </span>
                                    </Card.Header>
                                    <Card.Body className='card-task'>
                                        <Card.Text className='task-detail'>A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</Card.Text>
                                        <Card.Text className='task-due'><strong> Due : </strong><strong className="label label-primary">23 hours</strong></Card.Text>
                                        <hr/>
                                        <div className="task-list-table">
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar2} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><img className="img-fluid img-radius mr-1" src={avatar1} alt="1" /></a>
                                            <a href={DEMO.BLANK_LINK}><i className="fa fa-plus"/></a>
                                        </div>
                                        <div className="task-board">
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    Normal
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Highest priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>High priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Normal priority</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Low priority</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    Open
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className='mr-1'>
                                                <Dropdown.Toggle variant='primary' size='sm'>
                                                    <span className="fa fa-bars"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                    <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
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

export default TaskBoard;