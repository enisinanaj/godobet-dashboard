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

import DEMO from "../../../store/constant";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Customers extends React.Component {
    state = {
        isOpen: false
    };

    componentDidMount() {
        atable()
    }

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Customers Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>12</h3>
                                        <span className="">Total Customers</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>12</h3>
                                        <span className="text-success">Active Customers</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>0</h3>
                                        <span className="text-danger">Inactive Customers</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>12</h3>
                                        <span className="text-info">Active Contacts</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>0</h3>
                                        <span className="text-danger">Inactive Contacts</span>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <h3>1</h3>
                                        <span className="text-primary">Contacts Logged In Today</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col/>
                                    <Col className="text-right">
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Customers</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th/>
                                        <th>Company</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Active</th>
                                        <th>Groups</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Flatley-Wolff
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Wilfred Runolfsson</td>
                                        <td>client@test.com</td>
                                        <td>498.365.4362</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                                                <label className="custom-control-label" htmlFor="customSwitch1"/>
                                            </div>
                                        </td>
                                        <td/>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Feeney-Pouros
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Beau Reilly</td>
                                        <td>eleazar@example.org</td>
                                        <td>+1 (648) 982-6310</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch2"/>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block mr-1">VIP</span>
                                            <span className="badge badge-primary inline-block">Wholesaler</span>
                                        </td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Gorczany Barton
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Kristian Rowe</td>
                                        <td>jacobs@example.org</td>
                                        <td>977-0658</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch3"/>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-success inline-block">High Budget</span></td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Hilll Inc
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Gideon Schowalter</td>
                                        <td>xkreiger@example.com</td>
                                        <td>1-486-985-8752</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch4"/>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block mr-1">VIP</span>
                                            <span className="badge badge-primary inline-block">Wholesaler</span>
                                        </td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Bechtelar Lueilwitz
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Tremaine Bailey</td>
                                        <td>norris46@example.com</td>
                                        <td>1-521-678-5686</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch5"/>
                                                <label className="custom-control-label" htmlFor="customSwitch5"/>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-success inline-block">High Budget</span></td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Bogisich LLC
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Jules Rutherford</td>
                                        <td>ada40@example.org</td>
                                        <td>449.810.3109</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch6" defaultChecked={true}/>
                                                    <label className="custom-control-label" htmlFor="customSwitch6"/>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block mr-1">VIP</span>
                                            <span className="badge badge-primary inline-block">Wholesaler</span>
                                        </td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Herman-Zieme
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Emerson Wuckert</td>
                                        <td>mlegros@example.com</td>
                                        <td>897-306-5913</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch7" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch7"/>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-success inline-block">High Budget</span></td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Kutch-Prohaska
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Reed Pouros</td>
                                        <td>bhirthe@example.org</td>
                                        <td>469.256.6515</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch8" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch8"/>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block mr-1">VIP</span>
                                            <span className="badge badge-danger inline-block">Low Budget</span>
                                        </td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Flatley Mraz
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Darien Kozey</td>
                                        <td>kolaus@example.com</td>
                                        <td>(970) 790-8250</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch9"/>
                                                <label className="custom-control-label" htmlFor="customSwitch9"/>
                                            </div>
                                        </td>
                                        <td><span className="badge badge-primary inline-block">Wholesaler</span></td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Upton and Sons
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Haskell Toy</td>
                                        <td>oconnell@example.com</td>
                                        <td>(205) 770-7108</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch10"/>
                                                <label className="custom-control-label" htmlFor="customSwitch10"/>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block mr-1">VIP</span>
                                            <span className="badge badge-success inline-block">High Budget</span>
                                        </td>
                                        <td>2019-07-29</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Schultz Waters
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>View</a> |
                                                <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>Prof. Fletcher Jerde</td>
                                        <td>alek37@example.net</td>
                                        <td>(549) 626-9325</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch11" defaultChecked={true}/>
                                                <label className="custom-control-label" htmlFor="customSwitch11"/>
                                            </div>
                                        </td>
                                        <td/>
                                        <td>2019-07-30</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal size="xl" show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Add Customers</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Company"><small className="text-danger">* </small>Company</label>
                                            <input type="text" className="form-control" id="Company" placeholder="Company"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="VAT">VAT Number</label>
                                            <input type="text" className="form-control" id="VAT" placeholder="VAT Number"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Phone">Phone</label>
                                            <input type="text" className="form-control" id="Phone" placeholder="Phone"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Website">Website</label>
                                            <input type="text" className="form-control" id="Website" placeholder="Website"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Groups">Groups</label>
                                            <select className="form-control" id="Groups">
                                                <option value=""/>
                                                <option value="3">High Budget</option>
                                                <option value="4">Low Budget</option>
                                                <option value="1">VIP</option>
                                                <option value="2">Wholesaler</option>
                                            </select>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Currency">Currency</label>
                                            <select className="form-control" id="Currency">
                                                <option value=""/>
                                                <option value="1" data-subtext="$">USD</option>
                                                <option value="2" data-subtext="€">EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Language">Default Language</label>
                                            <select className="form-control" id="Language">
                                                <option defaultValue=""/>
                                                <option value="chinese">Chinese</option>
                                                <option value="japanese">Japanese</option>
                                                <option value="turkish">Turkish</option>
                                                <option value="bulgarian">Bulgarian</option>
                                                <option value="romanian">Romanian</option>
                                                <option value="indonesia">Indonesia</option>
                                                <option value="spanish">Spanish</option>
                                                <option value="german">German</option>
                                                <option value="persian">Persian</option>
                                                <option value="czech">Czech</option>
                                                <option value="slovak">Slovak</option>
                                                <option value="catalan">Catalan</option>
                                                <option value="swedish">Swedish</option>
                                                <option value="vietnamese">Vietnamese</option>
                                                <option value="dutch">Dutch</option>
                                                <option value="italian">Italian</option>
                                                <option value="english">English</option>
                                                <option value="french">French</option>
                                                <option value="portuguese">Portuguese</option>
                                                <option value="portuguese_br">Portuguese_br</option>
                                                <option value="russian">Russian</option>
                                                <option value="polish">Polish</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Address">Address</label>
                                            <textarea className="form-control" id="Address" rows="6" placeholder='Address' />
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="City">City</label>
                                            <input type="text" className="form-control" id="City" placeholder="City"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="State">State</label>
                                            <input type="text" className="form-control" id="State" placeholder="State"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Zip">Zip Code</label>
                                            <input type="text" className="form-control" id="Zip" placeholder="Zip Code"/>
                                        </div>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Country">Country</label>
                                            <select className="form-control" id="Country">
                                                <option value=""/>
                                                <option value="1">Afghanistan</option>
                                                <option value="2">Aland Islands</option>
                                                <option value="3">Albania</option>
                                                <option value="4">Algeria</option>
                                                <option value="5">American Samoa</option>
                                                <option value="6">Andorra</option>
                                                <option value="7">Angola</option>
                                                <option value="8">Anguilla</option>
                                                <option value="9">Antarctica</option>
                                                <option value="10">Antigua and Barbuda</option>
                                                <option value="11">Argentina</option>
                                                <option value="12">Armenia</option>
                                                <option value="13">Aruba</option>
                                                <option value="14">Australia</option>
                                                <option value="15">Austria</option>
                                                <option value="16">Azerbaijan</option>
                                                <option value="17">Bahamas</option>
                                                <option value="18">Bahrain</option>
                                                <option value="19">Bangladesh</option>
                                                <option value="20">Barbados</option>
                                                <option value="21">Belarus</option>
                                                <option value="22">Belgium</option>
                                                <option value="23">Belize</option>
                                                <option value="24">Benin</option>
                                                <option value="25">Bermuda</option>
                                                <option value="26">Bhutan</option>
                                                <option value="27">Bolivia</option>
                                                <option value="28">Bonaire, Sint Eustatius and Saba</option>
                                                <option value="29">Bosnia and Herzegovina</option>
                                                <option value="30">Botswana</option>
                                                <option value="31">Bouvet Island</option>
                                                <option value="32">Brazil</option>
                                                <option value="33">British Indian Ocean Territory</option>
                                                <option value="34">Brunei</option>
                                                <option value="35">Bulgaria</option>
                                                <option value="36">Burkina Faso</option>
                                                <option value="37">Burundi</option>
                                                <option value="38">Cambodia</option>
                                                <option value="39">Cameroon</option>
                                                <option value="40">Canada</option>
                                                <option value="41">Cape Verde</option>
                                                <option value="42">Cayman Islands</option>
                                                <option value="43">Central African Republic</option>
                                                <option value="44">Chad</option>
                                                <option defaultValue="45">Chile</option>
                                                <option value="46">China</option>
                                                <option value="47">Christmas Island</option>
                                                <option value="48">Cocos (Keeling) Islands</option>
                                                <option value="49">Colombia</option>
                                                <option value="50">Comoros</option>
                                                <option value="51">Congo</option>
                                                <option value="52">Cook Islands</option>
                                                <option value="53">Costa Rica</option>
                                                <option value="54">Cote d'ivoire (Ivory Coast)</option>
                                                <option value="55">Croatia</option>
                                                <option value="56">Cuba</option>
                                                <option value="57">Curacao</option>
                                                <option value="58">Cyprus</option>
                                                <option value="59">Czech Republic</option>
                                                <option value="60">Democratic Republic of the Congo</option>
                                                <option value="61">Denmark</option>
                                                <option value="62">Djibouti</option>
                                                <option value="63">Dominica</option>
                                                <option value="64">Dominican Republic</option>
                                                <option value="65">Ecuador</option>
                                                <option value="66">Egypt</option>
                                                <option value="67">El Salvador</option>
                                                <option value="68">Equatorial Guinea</option>
                                                <option value="69">Eritrea</option>
                                                <option value="70">Estonia</option>
                                                <option value="71">Ethiopia</option>
                                                <option value="72">Falkland Islands (Malvinas)</option>
                                                <option value="73">Faroe Islands</option>
                                                <option value="74">Fiji</option>
                                                <option value="75">Finland</option>
                                                <option value="76">France</option>
                                                <option value="77">French Guiana</option>
                                                <option value="78">French Polynesia</option>
                                                <option value="79">French Southern Territories</option>
                                                <option value="80">Gabon</option>
                                                <option value="81">Gambia</option>
                                                <option value="82">Georgia</option>
                                                <option value="83">Germany</option>
                                                <option value="84">Ghana</option>
                                                <option value="85">Gibraltar</option>
                                                <option value="86">Greece</option>
                                                <option value="87">Greenland</option>
                                                <option value="88">Grenada</option>
                                                <option value="89">Guadaloupe</option>
                                                <option value="90">Guam</option>
                                                <option value="91">Guatemala</option>
                                                <option value="92">Guernsey</option>
                                                <option value="93">Guinea</option>
                                                <option value="94">Guinea-Bissau</option>
                                                <option value="95">Guyana</option>
                                                <option value="96">Haiti</option>
                                                <option value="97">Heard Island and McDonald Islands</option>
                                                <option value="98">Honduras</option>
                                                <option value="99">Hong Kong</option>
                                                <option value="100">Hungary</option>
                                                <option value="101">Iceland</option>
                                                <option value="102">India</option>
                                                <option value="103">Indonesia</option>
                                                <option value="104">Iran</option>
                                                <option value="105">Iraq</option>
                                                <option value="106">Ireland</option>
                                                <option value="107">Isle of Man</option>
                                                <option value="108">Israel</option>
                                                <option value="109">Italy</option>
                                                <option value="110">Jamaica</option>
                                                <option value="111">Japan</option>
                                                <option value="112">Jersey</option>
                                                <option value="113">Jordan</option>
                                                <option value="114">Kazakhstan</option>
                                                <option value="115">Kenya</option>
                                                <option value="116">Kiribati</option>
                                                <option value="117">Kosovo</option>
                                                <option value="118">Kuwait</option>
                                                <option value="119">Kyrgyzstan</option>
                                                <option value="120">Laos</option>
                                                <option value="121">Latvia</option>
                                                <option value="122">Lebanon</option>
                                                <option value="123">Lesotho</option>
                                                <option value="124">Liberia</option>
                                                <option value="125">Libya</option>
                                                <option value="126">Liechtenstein</option>
                                                <option value="127">Lithuania</option>
                                                <option value="128">Luxembourg</option>
                                                <option value="129">Macao</option>
                                                <option value="130">North Macedonia</option>
                                                <option value="131">Madagascar</option>
                                                <option value="132">Malawi</option>
                                                <option value="133">Malaysia</option>
                                                <option value="134">Maldives</option>
                                                <option value="135">Mali</option>
                                                <option value="136">Malta</option>
                                                <option value="137">Marshall Islands</option>
                                                <option value="138">Martinique</option>
                                                <option value="139">Mauritania</option>
                                                <option value="140">Mauritius</option>
                                                <option value="141">Mayotte</option>
                                                <option value="142">Mexico</option>
                                                <option value="143">Micronesia</option>
                                                <option value="144">Moldava</option>
                                                <option value="145">Monaco</option>
                                                <option value="146">Mongolia</option>
                                                <option value="147">Montenegro</option>
                                                <option value="148">Montserrat</option>
                                                <option value="149">Morocco</option>
                                                <option value="150">Mozambique</option>
                                                <option value="151">Myanmar (Burma)</option>
                                                <option value="152">Namibia</option>
                                                <option value="153">Nauru</option>
                                                <option value="154">Nepal</option>
                                                <option value="155">Netherlands</option>
                                                <option value="156">New Caledonia</option>
                                                <option value="157">New Zealand</option>
                                                <option value="158">Nicaragua</option>
                                                <option value="159">Niger</option>
                                                <option value="160">Nigeria</option>
                                                <option value="161">Niue</option>
                                                <option value="162">Norfolk Island</option>
                                                <option value="163">North Korea</option>
                                                <option value="164">Northern Mariana Islands</option>
                                                <option value="165">Norway</option>
                                                <option value="166">Oman</option>
                                                <option value="167">Pakistan</option>
                                                <option value="168">Palau</option>
                                                <option value="169">Palestine</option>
                                                <option value="170">Panama</option>
                                                <option value="171">Papua New Guinea</option>
                                                <option value="172">Paraguay</option>
                                                <option value="173">Peru</option>
                                                <option value="174">Phillipines</option>
                                                <option value="175">Pitcairn</option>
                                                <option value="176">Poland</option>
                                                <option value="177">Portugal</option>
                                                <option value="178">Puerto Rico</option>
                                                <option value="179">Qatar</option>
                                                <option value="180">Reunion</option>
                                                <option value="181">Romania</option>
                                                <option value="182">Russia</option>
                                                <option value="183">Rwanda</option>
                                                <option value="184">Saint Barthelemy</option>
                                                <option value="185">Saint Helena</option>
                                                <option value="186">Saint Kitts and Nevis</option>
                                                <option value="187">Saint Lucia</option>
                                                <option value="188">Saint Martin</option>
                                                <option value="189">Saint Pierre and Miquelon</option>
                                                <option value="190">Saint Vincent and the Grenadines</option>
                                                <option value="191">Samoa</option>
                                                <option value="192">San Marino</option>
                                                <option value="193">Sao Tome and Principe</option>
                                                <option value="194">Saudi Arabia</option>
                                                <option value="195">Senegal</option>
                                                <option value="196">Serbia</option>
                                                <option value="197">Seychelles</option>
                                                <option value="198">Sierra Leone</option>
                                                <option value="199">Singapore</option>
                                                <option value="200">Sint Maarten</option>
                                                <option value="201">Slovakia</option>
                                                <option value="202">Slovenia</option>
                                                <option value="203">Solomon Islands</option>
                                                <option value="204">Somalia</option>
                                                <option value="205">South Africa</option>
                                                <option value="206">South Georgia and the South Sandwich Islands</option>
                                                <option value="207">South Korea</option>
                                                <option value="208">South Sudan</option>
                                                <option value="209">Spain</option>
                                                <option value="210">Sri Lanka</option>
                                                <option value="211">Sudan</option>
                                                <option value="212">Suriname</option>
                                                <option value="213">Svalbard and Jan Mayen</option>
                                                <option value="214">Swaziland</option>
                                                <option value="215">Sweden</option>
                                                <option value="216">Switzerland</option>
                                                <option value="217">Syria</option>
                                                <option value="218">Taiwan</option>
                                                <option value="219">Tajikistan</option>
                                                <option value="220">Tanzania</option>
                                                <option value="221">Thailand</option>
                                                <option value="222">Timor-Leste (East Timor)</option>
                                                <option value="223">Togo</option>
                                                <option value="224">Tokelau</option>
                                                <option value="225">Tonga</option>
                                                <option value="226">Trinidad and Tobago</option>
                                                <option value="227">Tunisia</option>
                                                <option value="228">Turkey</option>
                                                <option value="229">Turkmenistan</option>
                                                <option value="230">Turks and Caicos Islands</option>
                                                <option value="231">Tuvalu</option>
                                                <option value="232">Uganda</option>
                                                <option value="233">Ukraine</option>
                                                <option value="234">United Arab Emirates</option>
                                                <option value="235">United Kingdom</option>
                                                <option value="236">United States</option>
                                                <option value="237">United States Minor Outlying Islands</option>
                                                <option value="238">Uruguay</option>
                                                <option value="239">Uzbekistan</option>
                                                <option value="240">Vanuatu</option>
                                                <option value="241">Vatican City</option>
                                                <option value="242">Venezuela</option>
                                                <option value="243">Vietnam</option>
                                                <option value="244">Virgin Islands, British</option>
                                                <option value="245">Virgin Islands, US</option>
                                                <option value="246">Wallis and Futuna</option>
                                                <option value="247">Western Sahara</option>
                                                <option value="248">Yemen</option>
                                                <option value="249">Zambia</option>
                                                <option value="250">Zimbabwe</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => this.setState({ isOpen: false })}>Clear</Button>
                                <Button variant="primary">Save & Create Contact</Button>
                                <Button variant="primary">Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Customers;