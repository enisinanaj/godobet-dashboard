import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../../store/actions'
import TokenManager from "../../App/auth/TokenManager";
import Tip from "./Tip";

const TipsterPools = (props) =>  {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    loadPools()
  }, []);

  const loadPools = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(props.applicationState.user._links.pools.href.replace("{?projection}", ""), {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((pools) => {
            setPools(pools._embedded.pools);
          });
      });
  }

  return (
    <Aux>
      <Row>
        {
          pools.map(pool => (
            <Tip key={pool.id} pool={pool} callback={loadPools} user={props.applicationState.user} author={true} />
          ))
        }
      </Row>
    </Aux>
  );


}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TipsterPools);
