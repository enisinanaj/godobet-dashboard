import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import CommonContent from "../CommonContent";
import * as actionTypes from "../../../store/actions";

class Static extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.layout !== 'vertical') {
            this.props.onChangeLayout('vertical');
        }
        if (this.props.navFixedLayout) {
            this.props.onChangeNavFixedLayout();
        }
        if (this.props.headerFixedLayout) {
            this.props.onChangeHeaderFixedLayout();
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Static Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In Static Layout - Header & Sidebar is not fixed while scrolling the page.</p>
                                <div className="alert alert-info mb-0" role="alert">
                                    <p className="mb-0">It is best suited for those applications where you don't need sidebar & header to be fixed while scrolling the page.</p>
                                </div>
                                <h5 className="m-15">You can edit this file at [ ../src/app/app-config.ts ] </h5>
                                <Table bordered striped responsive>
                                    <thead className="header-table">
                                        <tr>
                                            <th>Configuration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>layout: <code>vertical</code></li>
                                                    <li>navFixedLayout: <code>false</code></li>
                                                    <li>headerFixedLayout: <code>false</code></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <CommonContent />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        navFixedLayout: state.navFixedLayout,
        headerFixedLayout: state.headerFixedLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onChangeNavFixedLayout: () => dispatch({type: actionTypes.NAV_FIXED_LAYOUT}),
        onChangeHeaderFixedLayout: () => dispatch({type: actionTypes.HEADER_FIXED_LAYOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Static);