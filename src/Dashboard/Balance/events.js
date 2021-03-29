import React, { Component } from "react";
import { Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import moment from 'moment';
import {getClassNameForOutcome} from '../../Dashboard/PendingTips/TipCard';

import Sports from '../../App/components/Sports'

class events extends Component {
    
    getRows() {
        const rows = [];
        
        this.props.data.forEach((d, index) => {

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
                        
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >{d.quote.toLocaleString("it-IT", { maximumFractionDigits: 2 })}</td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >{(d.stake/100).toLocaleString("it-IT", { maximumFractionDigits: 2 })}%</td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >{d.profit.toLocaleString("it-IT", { maximumFractionDigits: 2 })}%</td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >
                            <span className={getClassNameForOutcome(pool.outcome)}>{pool.outcome}</span>    
                        </td>}
                        {!tipHandled && <td rowSpan={eventCount} style={{verticalAlign: "middle"}} >{d.bookmaker}</td>}
                    </tr>)
                )
                tipHandled = true;
            })

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
                            <Table responsive className='mb-0'>
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
