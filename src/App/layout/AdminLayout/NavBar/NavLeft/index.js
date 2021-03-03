import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import windowSize from 'react-window-size';

import Aux from "../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {

    render() {
        return (
            <Aux>
                <ul className="navbar-nav mr-auto"></ul>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.isFullScreen,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft)));
