import React, {Component} from 'react';
import {connect} from 'react-redux';

import ColorOptions from './ColorOptions';
import LayoutOptions from './LayoutOptions';
import Aux from "../../../../../hoc/_Aux";

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

export default connect(mapStateToProps) (TabConfig);