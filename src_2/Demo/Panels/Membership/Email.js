import React from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import $ from 'jquery';

import AllCkEditor from "../../../App/components/AllCkEditor";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Email extends React.Component {
    state = {
        isOpen: false
    };

    componentDidMount() {
        atable()
    }

    render() {
        const html = `
                <table border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#F0F0F0">
                    <tbody>
                        <tr>
                            <td style="background-color: #ffffff;" align="center" valign="top" bgcolor="#ffffff"><br />
                                <table style="width: 100%; max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td height="30"> </td>
                                        </tr>
                                        <tr>
                                            <td align="center">[LOGO]</td>
                                        </tr>
                                        <tr>
                                            <td height="20"> </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="text-align: center; margin: 0; font-family: Helvetica, Arial, sans-serif; font-size: 26px; color: #222222;">Welcome to [COMPANY]</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <hr>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="30"> </td>
                                        </tr>
                                        <tr>
                                            <td style="background-color: #ffffff; padding: 12px 24px 12px 24px;" align="left"><br />
                                                <p style="font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; color: #374550;">Hello, [NAME]</p>
                                                <p style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; text-align: left; color: #222222;">You're now a member of [COMPANY]. <br /> Here are your login details. Please keep them in a
                                                    safe place: </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background-color: #ffffff; padding: 12px 24px 12px 24px;" align="left">
                                                <p style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; text-align: left; color: #222222;">Here are your login details. Please keep them in a safe place: <br /> <br /> Username:
                                                    [USERNAME] or [EMAIL]<br /> Password: [PASSWORD]</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="65"> </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td style="background: #289CDC; padding: 15px 18px; -webkit-border-radius: 4px; border-radius: 4px; font-family: Helvetica, Arial, sans-serif;" align="center" bgcolor="#289CDC"><a target="_blank"
                                                                    href="[LINK]" style="color: #ffffff; text-decoration: none; font-size: 16px;">Login</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="65"> </td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom: 1px solid #DDDDDD;"> </td>
                                        </tr>
                                        <tr>
                                            <td height="25"> </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;" align="center">
                                                <table border="0" width="95%" cellspacing="0" cellpadding="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td style="font-family: Helvetica, Arial, sans-serif;" align="left" valign="top">
                                                                <p style="text-align: left; color: #999999; font-size: 12px; font-weight: normal; line-height: 20px;">This email is sent to you directly from <a href="http://www.wojoscripts.com/mmp">[COMPANY]</a> The
                                                                    information above is gathered from the user input. <br /> ©[DATE] <a href="#!">[COMPANY]</a>. All rights reserved.</p>
                                                            </td>
                                                            <td width="30"> </td>

                                                            <td width="16"> </td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
           `;

        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th className="disabled center aligned"><i className="icon disabled id"/></th>
                                        <th data-sort="string">Template Name</th>
                                        <th data-sort="string">Subject</th>
                                        <th className="disabled center aligned">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Registration Email</td>
                                        <td>Please verify your email</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Welcome Mail From Admin</td>
                                        <td>You have been registered</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Default Newsletter</td>
                                        <td>Newsletter</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Single Email</td>
                                        <td>Single User Email</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Forgot Password Admin</td>
                                        <td>Password Reset</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Forgot Password User</td>
                                        <td>Password Reset</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Welcome Email</td>
                                        <td>Welcome</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Registration Pending</td>
                                        <td>Registration Verification Pending</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Notify Admin</td>
                                        <td>New User Registration</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Contact Request</td>
                                        <td>Contact Inquiry</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Transaction Completed Admin</td>
                                        <td>Payment Completed</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Transaction Completed User</td>
                                        <td>Payment Completed</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Membership Expired</td>
                                        <td>Membership Has Expired</td>
                                        <td><button type="button" className="btn btn-icon btn-outline-success" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-check-circle"/></button></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal size='lg' show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Edit Email Template</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Name"><small className="text-danger">* </small>Template Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Template Name"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Subject"><small className="text-danger">* </small>Subject</label>
                                            <input type="text" className="form-control" id="Subject" placeholder="Subject" />
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <AllCkEditor html={html} editor='classic'/>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => this.setState({ isOpen: false })}>Clear</Button>
                                <Button variant="primary">Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Email;