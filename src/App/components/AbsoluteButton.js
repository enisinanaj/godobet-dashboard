import React, { useState } from "react";
import { withRouter } from "react-router";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./AbsoluteButton.css";

const AbsoluteButton = (props) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false)

  return props.applicationState.user.roleValue >= 5 ? (
    <div className="absolute-div">
      <h5 className={hover ? 'crea-tip-text hover' : 'crea-tip-text'}>Crea tip</h5>
      <a href="/dashboard/tipster/createTip">
        <button
          onClick={() => setActive(!active)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={"absolute-btn"}
          id="absolute-btn-id"
        >
          +
        </button>
      </a>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AbsoluteButton)
);
