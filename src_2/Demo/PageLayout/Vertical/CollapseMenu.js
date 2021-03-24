import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import CommonContent from "../CommonContent";

class CollapseMenu extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.layout !== 'vertical') {
            this.props.onChangeLayout('vertical');
        }
        if (!this.props.collapseMenu) {
            this.props.onToggleNavigation();
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Collapse Menu Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In Collapse Sidebar Layout - Sidebar is getting minimal and all menu item is collapsed by default.</p>
                                <div className="alert alert-info mb-0" role="alert">
                                    <p className="mb-0">It is best suited for those applications where you want more focus on page content & having less sidebar menu items.</p>
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
                                                <li>collapseMenu: <code>true</code></li>
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
        collapseMenu: state.collapseMenu
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CollapseMenu);