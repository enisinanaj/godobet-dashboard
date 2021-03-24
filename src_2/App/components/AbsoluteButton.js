import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./AbsoluteButton.css";
import { FaFutbol, FaTools } from "react-icons/fa";

const AbsoluteButton = (props) => {
  const [active, setActive] = useState(false);

  return props.applicationState.user.roleValue === 7 ? (
    <div className="absolute-div">
      <button
        className={active ? "create-service-btn active" : "create-service-btn"}
      >
        <a href="/dashboard/tipster/createService" style={{ color: "white" }}>
          <FaTools />
        </a>
      </button>
      <button
        className={active ? "create-tip-btn active" : "create-tip-btn"}
        title="Crea Tip"
      >
        <a href="/dashboard/tipster/createTip" style={{ color: "white" }}>
          <FaFutbol />
        </a>
      </button>

      <button
        onClick={() => setActive(!active)}
        className={"absolute-btn"}
        id="absolute-btn-id"
        title={"Crea tip"}
      >
        +
      </button>
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
