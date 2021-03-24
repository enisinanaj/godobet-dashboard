import React from 'react';
import {
    Row,
    Col,
    Table,
    Card,
    Tab,
    Nav,
    Collapse
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import prod1 from '../../../assets/images/product/prod-1.jpg';
import prod2 from '../../../assets/images/product/prod-2.jpg';
import prod12 from '../../../assets/images/product/prod-12.jpg';
import paypal from '../../../assets/images/product/paypal.png';
import card from '../../../assets/images/product/card.png';
import cc from '../../../assets/images/product/cc.png';
import cash from '../../../assets/images/product/cash.png';


import DEMO from "../../../store/constant";

class Checkout extends React.Component {
    state = {
        accordionKey: 0
    };

    render() {
        const { accordionKey } = this.state;

        return (
            <Aux>
                <Row className='btn-page'>
                    <Col md={8}>
                        <Tab.Container defaultActiveKey="bi">
                            <Card>
                                <Card.Body>
                                    <Nav variant="pills" className="bg-nav-pills nav-justified mb-0">
                                        <Nav.Item>
                                            <Nav.Link eventKey="bi">Billing Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="si">Shipping Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="pi">Payment Info</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                            <Tab.Content>
                                <Tab.Pane eventKey="bi">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-2">Billing information</h5>
                                            <p className="text-muted mb-0">Fill the form below in order to send you the order's invoice.</p>
                                        </div>
                                        <div className="card-body">
                                            <Row>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="first-name">First Name</label>
                                                        <input className="form-control" type="text" placeholder="Enter your first name" id="first-name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="last-name">Last Name</label>
                                                        <input className="form-control" type="text" placeholder="Enter your last name" id="last-name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="Email"><span className="text-danger">*</span> Email Address</label>
                                                        <input className="form-control" type="email" placeholder="Enter your email" id="Email" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="Phone"><span className="text-danger">*</span> Phone</label>
                                                        <input className="form-control" type="text" placeholder="(+99) 9999 999 999" id="Phone" />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="billing-address">Address</label>
                                                        <input className="form-control" type="text" placeholder="Enter full address" id="billing-address"/>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="billing-town-city">Town / City</label>
                                                        <input className="form-control" type="text" placeholder="Enter your city name" id="billing-town-city" />
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="billing-state">State</label>
                                                        <input className="form-control" type="text" placeholder="Enter your state" id="billing-state" />
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="billing-zip-postal">Zip / Postal Code</label>
                                                        <input className="form-control" type="text" placeholder="Enter your zip code" id="billing-zip-postal" />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group fill">
                                                        <label>Country</label>
                                                        <select className="form-control">
                                                            <option value="0">Select Country</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="BN">Brunei Darussalam</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="CI">Cote d'Ivoire</option>
                                                            <option value="HR">Croatia (Hrvatska)</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KR">Korea, Republic of</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libyan Arab Jamahiriya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macau</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="MD">Moldova, Republic of</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="AN">Netherlands Antilles</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PW">Palau</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russian Federation</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint LUCIA</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="ST">Sao Tome and Principe</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia (Slovak Republic)</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SH">St. Helena</option>
                                                            <option value="PM">St. Pierre and Miquelon</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syrian Arab Republic</option>
                                                            <option value="TW">Taiwan, Province of China</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania, United Republic of</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN">Viet Nam</option>
                                                            <option value="VG">Virgin Islands (British)</option>
                                                            <option value="VI">Virgin Islands (U.S.)</option>
                                                            <option value="WF">Wallis and Futuna Islands</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group fill">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                            <label className="custom-control-label" htmlFor="customCheck2">Delivered to different address ?</label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group mt-3">
                                                        <label htmlFor="example-textarea">Quick Order Notes:</label>
                                                        <textarea className="form-control" id="example-textarea" rows="3" placeholder="Write some note.."/>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-outline-secondary">
                                                        Continue to Shopping
                                                    </a>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="text-sm-right">
                                                        <a href={DEMO.BLANK_LINK} className="btn btn-danger text-sm-right mt-md-0 mt-2">
                                                            <i className="mdi mdi-truck-fast mr-1"/> Proceed to Shipping
                                                        </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="si">
                                    <Card>
                                        <Card.Header>
                                            <h5 className="mb-2">Saved Address</h5>
                                            <p className="text-muted mb-0">Choose where you want to recived your product.</p>
                                        </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col md={6}>
                                                    <Card className="border mb-0 shadow-none">
                                                        <Card.Body>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="radiohome" name="customRadio" className="custom-control-input" defaultChecked={true}/>
                                                                <label className="custom-control-label font-weight-bold" htmlFor="radiohome">Home</label>
                                                            </div>
                                                            <br/>
                                                            <h6 className="mb-0">Josephin Villa</h6>
                                                            <p className="mb-0 m-t-10">1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
                                                            <p className="mb-0">(1234) - 567891</p>
                                                            <p className="mb-0"><a className="text-secondary" href="mailto:demo@sample.com" target="_top">demo@sample.com</a></p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                    <Card className="border mb-0 shadow-none">
                                                        <Card.Body>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="radiooffice" name="customRadio" className="custom-control-input"/>
                                                                <label className="custom-control-label font-weight-bold" htmlFor="radiooffice">Office</label>
                                                            </div>
                                                            <br />
                                                            <h6 className="mb-0">E-Croma Pvt Ltd.</h6>
                                                            <p className="mb-0 m-t-10">3654 Rodies Road, Columbia MO, Missouri. (123)-65202</p>
                                                            <p className="mb-0">(1234) - 567891</p>
                                                            <p className="mb-0"><a className="text-secondary" href="mailto:demo@sample.com" target="_top">E-Croma@sample.com</a></p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <h5 className="mb-2">Add New Address</h5>
                                            <p className="text-muted mb-0">Fill the form below in for your new address in wich we send you the order's invoice.</p>
                                        </Card.Header>
                                        <Card.Body className="card-body">
                                            <Row>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-first-name">First Name</label>
                                                        <input className="form-control" type="text" placeholder="Enter your first name" id="new-first-name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-last-name">Last Name</label>
                                                        <input className="form-control" type="text" placeholder="Enter your last name" id="new-last-name" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-email-address"><span className="text-danger">*</span> Email Address</label>
                                                        <input className="form-control" type="email" placeholder="Enter your email" id="new-email-address" />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-phone"><span className="text-danger">*</span> Phone</label>
                                                        <input className="form-control" type="text" placeholder="(+91) 9999 999 999" id="new-phone" />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-address">Address</label>
                                                        <input className="form-control" type="text" placeholder="Enter full address" id="new-address"/>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-town-city">Town / City</label>
                                                        <input className="form-control" type="text" placeholder="Enter your city name" id="new-town-city" />
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-state">State</label>
                                                        <input className="form-control" type="text" placeholder="Enter your state" id="new-state" />
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="form-group fill">
                                                        <label htmlFor="new-zip-postal">Zip / Postal Code</label>
                                                        <input className="form-control" type="text" placeholder="Enter your zip code" id="new-zip-postal" />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group fill">
                                                        <label>Country</label>
                                                        <select className="form-control">
                                                            <option value="0">Select Country</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="BN">Brunei Darussalam</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="CI">Cote d'Ivoire</option>
                                                            <option value="HR">Croatia (Hrvatska)</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KR">Korea, Republic of</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libyan Arab Jamahiriya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macau</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="MD">Moldova, Republic of</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="AN">Netherlands Antilles</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PW">Palau</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russian Federation</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint LUCIA</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="ST">Sao Tome and Principe</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia (Slovak Republic)</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SH">St. Helena</option>
                                                            <option value="PM">St. Pierre and Miquelon</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syrian Arab Republic</option>
                                                            <option value="TW">Taiwan, Province of China</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania, United Republic of</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN">Viet Nam</option>
                                                            <option value="VG">Virgin Islands (British)</option>
                                                            <option value="VI">Virgin Islands (U.S.)</option>
                                                            <option value="WF">Wallis and Futuna Islands</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <h5 className="my-3">Shipping Method</h5>
                                                    <div className="custom-control custom-radio custom-control-inline" data-toggle="tooltip" title="Estimated 5-7 days shipping (Duties and tax may be due upon delivery)">
                                                        <input type="radio" id="shippingMethodRadio1" name="shippingOptions" className="custom-control-input" defaultChecked={true} />
                                                        <label className="custom-control-label font-weight-bold" htmlFor="shippingMethodRadio1">Standard Delivery - FREE</label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline" data-toggle="tooltip" title="Estimated 1-2 days shipping (Duties and tax may be due upon delivery)">
                                                        <input type="radio" id="shippingMethodRadio2" name="shippingOptions" className="custom-control-input"/>
                                                        <label className="custom-control-label font-weight-bold" htmlFor="shippingMethodRadio2">Fast Delivery - $29</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="row mt-4">
                                                <div className="col-sm-6">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-outline-secondary">
                                                        Back to Shopping Cart
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="text-sm-right">
                                                        <a href={DEMO.BLANK_LINK} className="btn btn-danger text-sm-right mt-md-0 mt-2">
                                                            Continue to Payment
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pi">
                                    <div className="accordion">
                                        <Card className='mb-0'>
                                            <Card className="mb-0 shadow-none">
                                                <Card.Header className="card-header">
                                                    <h5 className="mb-2">Payment Selection</h5>
                                                    <p className="text-muted mb-0">Fill up given form for your payment details.</p>
                                                </Card.Header>
                                            </Card>
                                        </Card>
                                        <Card className='mb-0 shadow-none border-top'>
                                            <Card.Header>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="BillingPaypal"
                                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                                        name="billingOptions"
                                                        className="custom-control-input"
                                                        aria-controls="accordion1" />
                                                    <label className="custom-control-label font-weight-bold" htmlFor="BillingPaypal">Pay with Paypal</label>
                                                </div>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 1}>
                                                <div id="accordion1">
                                                    <Card.Body>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <p className="mb-0 pl-3 pt-1">You will be redirected to PayPal website to complete your purchase securely.</p>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={paypal} className="hei-25" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </div>
                                            </Collapse>
                                        </Card>
                                        <Card className='mb-0 shadow-none border-top'>
                                            <Card.Header>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="BillingCard"
                                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                                        name="billingOptions"
                                                        className="custom-control-input"
                                                        aria-controls="accordion2" />
                                                    <label className="custom-control-label font-weight-bold" htmlFor="BillingCard">Credit / Debit Card</label>
                                                </div>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 2}>
                                                <div id="accordion2">
                                                    <Card.Body className='bg-light'>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <p className="mb-0 pl-3 pt-1">Safe money transfer using your bank account. We support Mastercard, Visa, Discover and Stripe.</p>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={card} height="24" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-4">
                                                            <Col md={12}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-number">Card Number</label>
                                                                    <input type="text" id="card-number" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="0000 0000 0000 0000" placeholder="4242 4242 4242 4242"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-name-on">Name on card</label>
                                                                    <input type="text" id="card-name-on" className="form-control bg-transparent" placeholder="Master Shreyu"/>
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-expiry-date">Expiry date</label>
                                                                    <input type="text" id="card-expiry-date" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="00/00" placeholder="MM/YY"/>
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-cvv">CVV code</label>
                                                                    <input type="text" id="card-cvv" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="000" placeholder="012"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </div>
                                            </Collapse>
                                        </Card>
                                        <Card className='mb-0 shadow-none border-top'>
                                            <Card.Header>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="BillingOptRadio3"
                                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                                        name="billingOptions"
                                                        className="custom-control-input"
                                                        aria-controls="accordion1" />
                                                    <label className="custom-control-label font-weight-bold" htmlFor="BillingOptRadio3">Pay with CC Avenue</label>
                                                </div>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 3}>
                                                <div id="accordion1">
                                                    <Card.Body>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <p className="mb-0 pl-3 pt-1">You will be redirected to CC Avenue website to complete your purchase securely.</p>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={cc} className="hei-25" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </div>
                                            </Collapse>
                                        </Card>
                                        <Card className='mb-0 shadow-none border-top'>
                                            <Card.Header>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="BillingOptRadio4"
                                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 4) ? 4 : 0 })}
                                                        name="billingOptions"
                                                        className="custom-control-input"
                                                        aria-controls="accordion1" />
                                                    <label className="custom-control-label font-weight-bold" htmlFor="BillingOptRadio4">Cash on Delivery</label>
                                                </div>
                                            </Card.Header>
                                            <Collapse in={this.state.accordionKey === 4}>
                                                <div id="accordion1">
                                                    <Card.Body>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <p className="mb-0 pl-3 pt-1">Pay with cash when your order is delivered.</p>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={cash}  height="22" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </div>
                                            </Collapse>
                                        </Card>
                                        <Card className='mb-0 shadow-none border-top'>
                                            <Card.Header>
                                                <div className="row justify-content-between">
                                                    <div className="col">
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="BillingOptRadio5"
                                                                onClick={() => this.setState({ accordionKey: (accordionKey !== 5) ? 5 : 0 })}
                                                                name="billingOptions"
                                                                className="custom-control-input"
                                                                aria-controls="accordion1" disabled />
                                                            <label className="custom-control-label font-weight-bold" htmlFor="BillingOptRadio5">EMI ( Easy Installments )</label>
                                                        </div>
                                                    </div>
                                                    <div className="col text-right">
                                                        <a href={DEMO.BLANK_LINK} className="text-muted">
                                                            Not Applicable
                                                            <i className="feather icon-help-circle" data-toggle="tooltip" title="You are not allow to use this option"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                        </Card>
                                        <Card className="mb-0 shadow-none border-top">
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={6}>
                                                        <a href={DEMO.BLANK_LINK} className="btn btn-outline-secondary">
                                                            Back to Shopping Cart
                                                        </a>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div className="text-sm-right">
                                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger text-sm-right mt-md-0 mt-2">
                                                                Complete Order
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <h5>Order Summary</h5>
                            </Card.Header>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <img src={prod1} alt="contact-img" title="contact-img" className="rounded mr-2" height="48" />
                                                    <p className="m-0 d-inline-block align-middle">
                                                        <a href={DEMO.BLANK_LINK} className="text-body font-weight-semibold">Rolling Chair</a>
                                                        <br/>
                                                        <small>5 x $148.66</small>
                                                    </p>
                                                </td>
                                                <td className="text-right">
                                                    $743.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="list-group-item py-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <img src={prod2} alt="contact-img" title="contact-img" className="rounded mr-2" height="48" />
                                                    <p className="m-0 d-inline-block align-middle">
                                                        <a href={DEMO.BLANK_LINK} className="text-body font-weight-semibold">Dining Chair</a>
                                                        <br/>
                                                        <small>2 x $99.00</small>
                                                    </p>
                                                </td>
                                                <td className="text-right">
                                                    $198.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="list-group-item py-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <img src={prod12} alt="contact-img" title="contact-img" className="rounded mr-2" height="48" />
                                                    <p className="m-0 d-inline-block align-middle">
                                                        <a href={DEMO.BLANK_LINK} className="text-body font-weight-semibold">Chamiu lipstick</a>
                                                        <br/>
                                                        <small>1 x $129.99</small>
                                                    </p>
                                                </td>
                                                <td className="text-right">
                                                    $129.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <Card.Body className="py-2">
                                <Table responsive className="table-borderless mb-0 w-auto table-sm float-right text-right">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">Sub Total:</h6>
                                        </td>
                                        <td>
                                            $1070
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">Shipping:</h6>
                                        </td>
                                        <td>
                                            FREE
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td>
                                            <h5 className="m-0">Total:</h5>
                                        </td>
                                        <td className="font-weight-semibold">
                                            $1070
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Checkout;