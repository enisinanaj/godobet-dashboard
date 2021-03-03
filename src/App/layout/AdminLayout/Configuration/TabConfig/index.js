import React, {Component} from 'react';
import {connect} from 'react-redux';

import ColorOptions from './ColorOptions';
import LayoutOptions from './LayoutOptions';
import Aux from "../../../../../hoc/_Aux";
import { withRouter } from 'react-router-dom';

class TabConfig extends Component {
    render() {
        return (
            <Aux>
                <ColorOptions />
                <LayoutOptions/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout
    }
};

export default withRouter(connect(mapStateToProps) (TabConfig));