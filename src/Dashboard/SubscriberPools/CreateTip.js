import React from "react";
import { Row } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../../store/actions'
import TokenManager from "../../App/auth/TokenManager";

const CreateTip = (props) =>  {
  return (
    <Aux>
      <Row>
        
      </Row>
    </Aux>
  );


}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTip);
