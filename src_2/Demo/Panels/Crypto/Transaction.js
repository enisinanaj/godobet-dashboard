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
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Transaction extends React.Component {
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
                                <h5>Transactions</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>USD ($)</th>
                                        <th>Fee (%)</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div>#14342</div>
                                        </td>
                                        <td>
                                            <div className="text-success">Buy</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-bitcoin m-r-5"/>0.586
                                            </div>
                                        </td>
                                        <td>
                                            <div>119.12</div>
                                        </td>
                                        <td>
                                            <div>979.78</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                        <td>
                                            <div>04.40 am</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#14321</div>
                                        </td>
                                        <td>
                                            <div className="text-danger">Sell</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-ethereum m-r-5"/>1.386</div>
                                        </td>
                                        <td>
                                            <div>134.12</div>
                                        </td>
                                        <td>
                                            <div>346.23</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                        <td>
                                            <div>03.50 pm</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#23531</div>
                                        </td>
                                        <td>
                                            <div className="text-success">Buy</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-asymmetrik m-r-5"/>0.231
                                            </div>
                                        </td>
                                        <td>
                                            <div>124.12</div>
                                        </td>
                                        <td>
                                            <div>456.23</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                        <td>
                                            <div>12.23 pm</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#12463</div>
                                        </td>
                                        <td>
                                            <div className="text-success">Buy</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-bitcoin m-r-5"/>0.231
                                            </div>
                                        </td>
                                        <td>
                                            <div>231.12</div>
                                        </td>
                                        <td>
                                            <div>346.34</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                        <td>
                                            <div>02.12 pm</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#12431</div>
                                        </td>
                                        <td>
                                            <div className="text-danger">Sell</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-bitcoin m-r-5"/>2.945
                                            </div>
                                        </td>
                                        <td>
                                            <div>431.12</div>
                                        </td>
                                        <td>
                                            <div>125.12</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                        <td>
                                            <div>10.00 am</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#12532</div>
                                        </td>
                                        <td>
                                            <div className="text-danger">Sell</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-asymmetrik m-r-5"/>0.235
                                            </div>
                                        </td>
                                        <td>
                                            <div>215.34</div>
                                        </td>
                                        <td>
                                            <div>236.12</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                        <td>
                                            <div>08.22 am</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#23165</div>
                                        </td>
                                        <td>
                                            <div className="text-success">Buy</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-bitcoin m-r-5"/>2.346
                                            </div>
                                        </td>
                                        <td>
                                            <div>235.12</div>
                                        </td>
                                        <td>
                                            <div>332.23</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                        <td>
                                            <div>12.43 am</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>#63423</div>
                                        </td>
                                        <td>
                                            <div className="text-danger">Sell</div>
                                        </td>
                                        <td>
                                            <div className="amount">
                                                <i className="fab fa-ethereum m-r-5"/>3.213
                                            </div>
                                        </td>
                                        <td>
                                            <div>456.12</div>
                                        </td>
                                        <td>
                                            <div>231.53</div>
                                        </td>
                                        <td>
                                            <div>0.2</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                        <td>
                                            <div>11.21 am</div>
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

export default Transaction;