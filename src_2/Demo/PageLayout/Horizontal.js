import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";
import CommonContent from "./CommonContent";

class Horizontal extends Component {

    UNSAFE_componentWillMount() {
        const contentWidth = document.getElementById('root').clientWidth;
        if (this.props.layout !== 'vertical' && contentWidth < 992) {
            this.props.onChangeLayout('vertical');
        } else {
            this.props.onChangeLayout('horizontal');
            if (this.props.collapseMenu) {
                this.props.onToggleNavigation();
            }
            if (this.props.navFixedLayout) {
                this.props.onChangeNavFixedLayout();
            }
            if (this.props.headerFixedLayout) {
                this.props.onChangeHeaderFixedLayout();
            }
        }


    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Horizontal Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In RTL Horizontal Layout - Navigation bar is set to be in Right-To-Left direction as a Horizontal way. It also showing/hidden while scrolling up/down.</p>
                                <div className="alert alert-info mb-0" role="alert">
                                    <p className="mb-0">RTL Horizontal Layout is mostly preferred by Arabic, Hebrew, Persian, and Urdu languages which are written from right to left.</p>
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
                                                <li>layout: <code>horizontal</code></li>
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
                <CommonContent/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        collapseMenu: state.collapseMenu,
        navFixedLayout: state.navFixedLayout,
        headerFixedLayout: state.headerFixedLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onChangeNavFixedLayout: () => dispatch({type: actionTypes.NAV_FIXED_LAYOUT}),
        onChangeHeaderFixedLayout: () => dispatch({type: actionTypes.HEADER_FIXED_LAYOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Horizontal);