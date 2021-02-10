import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";
import CommonContent from "./CommonContent";

class BoxLayout extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.layout !== 'vertical') {
            this.props.onChangeLayout('vertical');
        }
        if (!this.props.boxLayout) {
            this.props.onChangeBoxLayout();
        }
        if (this.props.headerFixedLayout) {
            this.props.onChangeHeaderFixedLayout();
        }
        if (!this.props.collapseMenu) {
            this.props.onToggleNavigation();
        }
        if (!this.props.navFixedLayout) {
            this.props.onChangeNavFixedLayout();
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Box Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In Box Layout - The entire page content with sidebar & header is set to be in Box fixed width container</p>
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
                                                <li>navFixedLayout: <code>true</code></li>
                                                <li>headerFixedLayout: <code>false</code></li>
                                                <li>boxLayout: <code>true</code></li>
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
        boxLayout: state.boxLayout,
        headerFixedLayout: state.headerFixedLayout,
        collapseMenu: state.collapseMenu,
        navFixedLayout: state.navFixedLayout,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onChangeBoxLayout: () => dispatch({type: actionTypes.BOX_LAYOUT}),
        onChangeHeaderFixedLayout: () => dispatch({type: actionTypes.HEADER_FIXED_LAYOUT}),
        onChangeNavFixedLayout: () => dispatch({type: actionTypes.NAV_FIXED_LAYOUT}),
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (BoxLayout);