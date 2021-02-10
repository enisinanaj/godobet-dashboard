import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import * as actionTypes from "../../../store/actions";
import CommonContent from "../CommonContent";

class RtlLayout extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.layout !== 'vertical') {
            this.props.onChangeLayout('vertical');
        }
        if (!this.props.rtlLayout) {
            this.props.onChangeRtlLayout();
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>RTL Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In RTL Layout - The entire layout looks like Right-To-Left alignment. The entire page content starts from the right side of the page.</p>
                                <div className="alert alert-info mb-0" role="alert">
                                    <p className="mb-0">RTL Layout is mostly preferred by Arabic, Hebrew, Persian, and Urdu languages which are written from right to left.</p>
                                </div>
                                <h5 className="m-15">You can edit this file at [ ../src/config.js ] </h5>
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
                                                <li>rtlLayout: <code>true</code></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <CommonContent/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onChangeRtlLayout: () => dispatch({type: actionTypes.RTL_LAYOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (RtlLayout);