import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import AllCkEditor from "../../../App/components/AllCkEditor";


class Newsletter extends React.Component {

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
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Email"><small className="text-danger">* </small>Email From</label>
                                            <input type="email" className="form-control" id="Email" placeholder="Email From"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Recipients"><small className="text-danger">* </small>Recipients</label>
                                            <input type="text" className="form-control" id="Recipients" placeholder="Recipients"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Subject">Email Subject</label>
                                            <input type="email" className="form-control" id="Subject" placeholder="Email Subject"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Attachment">Attachment</label>
                                            <input type="file" className="form-control" id="Attachment" placeholder="Attachment"/>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <AllCkEditor html={html} editor='classic'/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Newsletter;