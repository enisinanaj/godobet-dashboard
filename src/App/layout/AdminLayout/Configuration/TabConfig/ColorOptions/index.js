import React, {Component} from 'react';
import {connect} from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../../store/actions";
import DEMO from "../../../../../../store/constant";

class ColorOptions extends Component {
    render() {
        let colorOptions = '';
        colorOptions = (
            <div>
                <h6 className=" text-dark">Background Color</h6>
                <div className="theme-color background-color flat">
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-blue')} className={this.props.headerBackColor === 'background-blue' ? 'active' : ''} data-value="background-blue"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-red')} className={this.props.headerBackColor === 'background-red' ? 'active' : ''} data-value="background-red"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-purple')} className={this.props.headerBackColor === 'background-purple' ? 'active' : ''} data-value="background-purple"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-info')} className={this.props.headerBackColor === 'background-info' ? 'active' : ''} data-value="background-info"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-green')} className={this.props.headerBackColor === 'background-green' ? 'active' : ''} data-value="background-green"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-dark')} className={this.props.headerBackColor === 'background-dark' ? 'active' : ''} data-value="background-dark"><span/><span/></a>
                </div>
                <h6 className=" text-dark">Background Gradient</h6>
                <div className="theme-color background-color gradient">
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-blue')} className={this.props.headerBackColor === 'background-grd-blue' ? 'active' : ''} data-value="background-grd-blue"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-red')} className={this.props.headerBackColor === 'background-grd-red' ? 'active' : ''} data-value="background-grd-red"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-purple')} className={this.props.headerBackColor === 'background-grd-purple' ? 'active' : ''} data-value="background-grd-purple"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-info')} className={this.props.headerBackColor === 'background-grd-info' ? 'active' : ''} data-value="background-grd-info"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-green')} className={this.props.headerBackColor === 'background-grd-green' ? 'active' : ''} data-value="background-grd-green"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-grd-dark')} className={this.props.headerBackColor === 'background-grd-dark' ? 'active' : ''} data-value="background-grd-dark"><span/><span/></a>
                </div>
                <h6 className=" text-dark">Background Image</h6>
                <div className="theme-color background-color image">
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-1')} className={this.props.headerBackColor === 'background-img-1' ? 'active' : ''} data-value="background-img-1"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-2')} className={this.props.headerBackColor === 'background-img-2' ? 'active' : ''} data-value="background-img-2"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-3')} className={this.props.headerBackColor === 'background-img-3' ? 'active' : ''} data-value="background-img-3"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-4')} className={this.props.headerBackColor === 'background-img-4' ? 'active' : ''} data-value="background-img-4"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-5')} className={this.props.headerBackColor === 'background-img-5' ? 'active' : ''} data-value="background-img-5"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('background-img-6')} className={this.props.headerBackColor === 'background-img-6' ? 'active' : ''} data-value="background-img-6"><span/><span/></a>
                </div>
            </div>
        );


        return (
            <Aux>
                <div className="config-scroll">
                    <PerfectScrollbar>
                        {colorOptions}
                    </PerfectScrollbar>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        headerBackColor: state.headerBackColor
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHeaderBackColor: (headerBackColor) => dispatch({type: actionTypes.HEADER_BACK_COLOR, headerBackColor: headerBackColor})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ColorOptions);