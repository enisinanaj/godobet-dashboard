import React, { Component } from "react";
import Aux from "../../hoc/_Aux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table, Card } from "react-bootstrap";
import moment from 'moment';
import {getClassNameForOutcome} from '../../Dashboard/PendingTips/TipCard';

import Sports from '../../App/components/Sports'
import LocaleNumber from "../../App/components/LocaleNumber";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );

class events extends Component {    
    getRows() {
        const rows = [];
        this.props.data.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)).forEach((d, index) => {
            const eventCount = d.events.length;
            let tipHandled = false;

            d.events.forEach(e => {
                if (!e.outcome || !d.outcome) {
                    return false;
                }

                rows.push(
                    (<tr key={index + d.id + e.event}>
                        <td>{moment(e.eventDate).format("DD/MM/YYY HH:mm")}</td>
                        <td>{ Sports.find(s => s.value === e.sport) ? Sports.find(s => s.value === e.sport).label : e.sport }</td>
                        <td>{e.competition}</td>
                        <td>{e.event}</td>
                        <td>{e.proposal}</td>
                        
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} ><LocaleNumber amount={d.quote} symbol={""}/> </td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} ><LocaleNumber amount={(d.stake/100)} symbol={"%"} /></td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} ><LocaleNumber amount={d.profit} symbol={"%"} /></td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >
                            <span className={getClassNameForOutcome(d.outcome)}>{d.outcome}</span>    
                        </td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >{d.bookmaker}</td>}
                        {!tipHandled && <td rowSpan={eventCount}> <a className={"btn btn-light-default"} href={"/dashboard/service/" + d.serviceId } target={"_blank"} rel="noopener noreferrer" >
                            <span style={{textDecoration: 'underline'}}>{d.service.serviceName}</span> <em className={"feather icon-external-link"}>
                        </em></a></td>}
                    </tr>)
                )

                tipHandled = true;
            });
        })
        return rows;
    }
    
    render() {
        return (
            <Aux>
                {
                    this.props.data.length ? 
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Eventi giocati nel periodo</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table ref="tbl" striped hover responsive bordered className="table table-condensed mb-0" id="data-table-responsive">
                                <thead>
                                    <tr>
                                        <th>Data evento</th>
                                        <th>Sport</th>
                                        <th>Competizione</th>
                                        <th>Evento</th>
                                        <th>Tip</th>
                                        <th>Quota</th>
                                        <th>Stake</th>
                                        <th>Profitto</th>
                                        <th>Esito Tip</th>
                                        <th>Bookmaker</th>
                                        <th>Servizio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getRows()}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card> :
                    <></>
                }
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loggedIn: state.loggedIn,
    registered: state.registered,
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(events);
