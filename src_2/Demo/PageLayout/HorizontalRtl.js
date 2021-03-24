import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";
import CommonContent from "./CommonContent";

class HorizontalRtl extends Component {

    UNSAFE_componentWillMount() {
        const contentWidth = document.getElementById('root').clientWidth;
        if (this.props.layout !== 'vertical' && contentWidth < 992) {
            this.props.onChangeLayout('vertical');
        } else {
            this.props.onChangeLayout('horizontal');
            this.props.onChangeSubLayout('horizontal-2');
            if (this.props.collapseMenu) {
                this.props.onToggleNavigation();
            }
            if (this.props.navFixedLayout) {
                this.props.onChangeNavFixedLayout();
            }
            if (this.props.headerFixedLayout) {
                this.props.onChangeHeaderFixedLayout();
            }
            if (!this.props.rtlLayout) {
                this.props.onChangeRtlLayout();
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
                                <p>In Horizontal Layout V2 - Navigation bar is set in a Horizontal way with fixed width container. It also showing/hidden while scrolling up/down.</p>
                                <div className="alert alert-info mb-0" role="alert">
                                    <p className="mb-0">It is best suited for those applications where you required your navigation is set to be a Horizontal way with fixed width container.</p>
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
                                                <li>subLayout: <code>horizontal-2</code></li>
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
        subLayout: state.subLayout,
        collapseMenu: state.collapseMenu,
        navFixedLayout: state.navFixedLayout,
        headerFixedLayout: state.headerFixedLayout,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onChangeSubLayout: (subLayout) => dispatch({type: actionTypes.CHANGE_SUB_LAYOUT, subLayout: subLayout}),
        onChangeNavFixedLayout: () => dispatch({type: actionTypes.NAV_FIXED_LAYOUT}),
        onChangeHeaderFixedLayout: () => dispatch({type: actionTypes.HEADER_FIXED_LAYOUT}),
        onChangeRtlLayout: () => dispatch({type: actionTypes.RTL_LAYOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (HorizontalRtl);