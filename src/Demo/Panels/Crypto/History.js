import React from 'react';
import {
    Row,
    Col,
    Card,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import $ from 'jquery';

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    let table1 = '#data-table-1';
    let table2 = '#data-table-2';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
    $(table1).DataTable();
    $(table2).DataTable();
}

class History extends React.Component {
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
                                <h5>Deposit</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Coin</th>
                                        <th>Date</th>
                                        <th>Volume</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.725.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>05/30/2018</div>
                                        </td>
                                        <td>
                                            <div>0.134.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td>
                                            <div>06/27/2019</div>
                                        </td>
                                        <td>
                                            <div>1.345.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>12/10/2020</div>
                                        </td>
                                        <td>
                                            <div>0.755.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>06/02/2021</div>
                                        </td>
                                        <td>
                                            <div>0.124.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>08/11/2022</div>
                                        </td>
                                        <td>
                                            <div>0.123.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h5>Withdraw</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl-1" striped hover responsive bordered id="data-table-1">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Coin</th>
                                        <th>Volume</th>
                                        <th>Receiver</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.1235.00</div>
                                        </td>
                                        <td>Bank - 1025********347</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td>
                                            <div>07/12/2020</div>
                                        </td>
                                        <td>
                                            <div>0.550</div>
                                        </td>
                                        <td>NEO Wallet - #17642</td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td>
                                            <div>02/10/2017</div>
                                        </td>
                                        <td>
                                            <div>0.4345.00</div>
                                        </td>
                                        <td>BTC Wallet - #23562</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>07/10/2020</div>
                                        </td>
                                        <td>
                                            <div>1.234.00</div>
                                        </td>
                                        <td>Bank - 1550********879</td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h5>Withdraw</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl-2" striped hover responsive bordered id="data-table-2">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Coin</th>
                                        <th>Type</th>
                                        <th>Volume</th>
                                        <th>Price per unit</th>
                                        <th>Price</th>
                                        <th>Fees (%)</th>
                                        <th>Total Amount ($)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>10/04/2020</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Deposit</div>
                                        </td>
                                        <td>
                                            <div>0.75</div>
                                        </td>
                                        <td>
                                            <div>100</div>
                                        </td>
                                        <td>
                                            <div>75</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div>60</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td>
                                            <div>03/20/2021</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Withdraw</div>
                                        </td>
                                        <td>
                                            <div>1.225</div>
                                        </td>
                                        <td>
                                            <div>90</div>
                                        </td>
                                        <td>
                                            <div>110.25</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div>88.20</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td>
                                            <div>07/10/2019</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Withdraw</div>
                                        </td>
                                        <td>
                                            <div>0.525</div>
                                        </td>
                                        <td>
                                            <div>100</div>
                                        </td>
                                        <td>
                                            <div>52.50</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div>42.00</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>12/02/2018</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Deposit</div>
                                        </td>
                                        <td>
                                            <div>0.740</div>
                                        </td>
                                        <td>
                                            <div>100</div>
                                        </td>
                                        <td>
                                            <div>74.00</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div>62.92</div>
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

export default History;