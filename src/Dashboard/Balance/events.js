import React, { Component } from "react";
import { Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import moment from 'moment';

class events extends Component {
    
    getRows() {
        const rows = [];
        
        this.props.data.forEach((d, index) => {
            d.events.forEach(e => {
                if (!e.outcome || !d.outcome) {
                    return false;
                }
                rows.push(
                    (<tr key={index + d.id + e.event}>
                        <td>{moment(e.eventDate).format("DD/MM/YYY HH:mm")}</td>
                        <td>{e.sport}</td>
                        <td>{e.genderValue}</td>
                        <td>{e.competition}</td>
                        <td>{e.event}</td>
                        <td>{e.proposal}</td>
                        <td className={e.outcome === "win" ? "bg-c-green text-white" : ""}>{e.outcome}</td>
                        <td>{d.quote}</td>
                        <td>{d.stake}</td>
                        <td>{d.profit}</td>
                        <td className={d.outcome === "win" ? "bg-c-green text-white" : ""}>{d.outcome}</td>
                        <td>{d.bookmaker}</td>
                    </tr>)
                )
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
                                        <th>Sesso</th>
                                        <th>Competizione</th>
                                        <th>Evento</th>
                                        <th>Tip</th>
                                        <th>Esito Evento</th>
                                        <th>Quota</th>
                                        <th>Stake</th>
                                        <th>Profitto</th>
                                        <th>Esito Schedina</th>
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
