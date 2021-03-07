import React, { Component } from "react";

import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SamplePage extends Component {
  render() {
    return (
      <Aux>
        <h1>Marketplace</h1>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
  registered: state.registered,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SamplePage)
);
