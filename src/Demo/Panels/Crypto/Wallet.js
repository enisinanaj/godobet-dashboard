import React from 'react';
import {
    Row,
    Col,
    Card,
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

class Wallet extends React.Component {
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
                                <h5>Wallet</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Cryptocurrency</th>
                                        <th>Total</th>
                                        <th>Price</th>
                                        <th>Total Price</th>
                                        <th>Transact</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>100</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>1000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>80</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>8</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>640</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>75</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>750</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td className="align-middle">
                                            <div> 90</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>900</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/>ETH </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>750</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>7500</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className=" transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/> XRP </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>500</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>15</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>7500</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/> BTA </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>700</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>7000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/> XMR </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>400</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>80</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>32000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> ANC </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>650</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>6500</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/> ARK </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>200</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>200</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>40000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/> BC </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/> DCR </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>800</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>15</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>12000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> ETC </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>900</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>200</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>180000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/> FRK </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>500</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>40</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>20000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/> GAME </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>850</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>100</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>85000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>GNO </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>750</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>100</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>75000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> ICN </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>720</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>200</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>144000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/> ICO </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>300</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>400</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>120000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/> JBS </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>850</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>100</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>85000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/> KORE </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>630</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>300</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>189000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> MCO </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>470</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>200</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>94000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/> MRC </div>
                                        </td>
                                        <td className="align-middle">
                                            <div>100</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10</div>
                                        </td>
                                        <td className="align-middle">
                                            <div>10000</div>
                                        </td>
                                        <td className="align-middle">
                                            <div className="transact form-inline">
                                                <div className="mr-xl-2 mr-1">
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-success btn-sm"><i className="far fa-arrow-alt-circle-down"/> Deposit</a>
                                                </div>
                                                <div>
                                                    <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="far fa-arrow-alt-circle-up"/> Withdraw</a>
                                                </div>
                                            </div>
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

export default Wallet;