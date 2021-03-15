import React, { Component } from "react";
import { Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class events extends Component {
    
    getRows() {
        return this.props.data.map((d, index) => {
            console.log(d);
            return <tr key={index}>
                <td>{d.quote}</td>
                <td>{d.description}</td>
                <td>{d.outcome}</td>
            </tr>
        })
    }
    
    render() {
        return (
            <Aux>
                {
                    this.props.data.length && 
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Eventi giocati nel periodo</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className='mb-0'>
                                <thead>
                                    <tr>
                                        <th>Tip</th>
                                        <th>Servizio</th>
                                        <th>Esito</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getRows()}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
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

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(events)
);
