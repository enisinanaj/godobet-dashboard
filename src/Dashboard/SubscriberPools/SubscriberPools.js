import React, { useEffect, useState } from "react";
import { Row, Tabs, Col } from "react-bootstrap";
import { Tab } from 'bootstrap';

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
        <Col sm={12} className="tab-user-card">
          <Tabs
            variant="pills"
            defaultActiveKey="pending"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="pending" title="Tip in corso">
              <Row>
                {
                  pools.filter(p => !p.outcome).map(pool => (
                    <Tip key={pool.id} pool={pool} callback={loadPools} user={props.applicationState.user} author={true} />
                  ))
                }
              </Row>
            </Tab>
            <Tab eventKey="expired" title="Tip concluse">
              <Row>
                {
                  pools.filter(p => !!p.outcome).map(pool => (
                    <Tip key={pool.id} pool={pool} callback={loadPools} user={props.applicationState.user} author={true} />
                  ))
                }
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Aux>
  );


}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TipsterPools);
