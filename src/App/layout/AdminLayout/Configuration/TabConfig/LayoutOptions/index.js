import React, { Component } from "react";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";

import Aux from "../../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../../store/actions";

class LayoutOptions extends Component {
  render() {
    let layoutOption = (
      <div className="form-group mb-0">
        <div className="switch switch-primary d-inline m-r-10">
          <input
            type="checkbox"
            id="box-layouts"
            checked={this.props.boxLayout}
            onChange={this.props.onChangeBoxLayout}
          />
          <label htmlFor="box-layouts" className="cr" />
        </div>
        <label>Box Layouts</label>
      </div>
    );

    let layoutOptionHeaderFixWithoutBox = "";
    let layoutOptionNavFixWithoutBox = "";
    if (!this.props.boxLayout) {
      layoutOptionHeaderFixWithoutBox = (
        <div className="form-group mb-0">
          <div className="switch switch-primary d-inline m-r-10">
            <input
              type="checkbox"
              id="header-fixed"
              checked={this.props.headerFixedLayout}
              onChange={this.props.onChangeHeaderFixedLayout}
            />
            <label htmlFor="header-fixed" className="cr" />
          </div>
          <label>Header Fixed</label>
        </div>
      );
      layoutOptionNavFixWithoutBox = (
        <div className="form-group mb-0">
          <div className="switch switch-primary d-inline m-r-10">
            <input
              type="checkbox"
              id="menu-fixed"
              checked={this.props.navFixedLayout}
              onChange={this.props.onChangeNavFixedLayout}
            />
            <label htmlFor="menu-fixed" className="cr" />
          </div>
          <label>Menu Fixed</label>
        </div>
      );
    }

    layoutOption = (
      <div>
        <div className="form-group mb-0">
          <div className="switch switch-primary d-inline m-r-10">
            <input
              type="checkbox"
              id="theme-rtl"
              checked={this.props.rtlLayout}
              onChange={this.props.onChangeRtlLayout}
            />
            <label htmlFor="theme-rtl" className="cr" />
          </div>
          <label>RTL</label>
        </div>
        {layoutOptionNavFixWithoutBox}
        {layoutOptionHeaderFixWithoutBox}
        {layoutOption}
      </div>
    );

    return (
      <Aux>
        <div className="config-scroll">
          <PerfectScrollbar>{layoutOption}</PerfectScrollbar>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rtlLayout: state.rtlLayout,
    navFixedLayout: state.navFixedLayout,
    headerFixedLayout: state.headerFixedLayout,
    boxLayout: state.boxLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRtlLayout: () => dispatch({ type: actionTypes.RTL_LAYOUT }),
    onChangeNavFixedLayout: () =>
      dispatch({ type: actionTypes.NAV_FIXED_LAYOUT }),
    onChangeHeaderFixedLayout: () =>
      dispatch({ type: actionTypes.HEADER_FIXED_LAYOUT }),
    onChangeBoxLayout: () => dispatch({ type: actionTypes.BOX_LAYOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutOptions);
