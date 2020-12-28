import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import ShadowCard from "../../components/layout/ShadowCard";

class TipsterCard extends Component {
  render() {
    return (
      <Col lg={3} md={3} sm={4}>
        <ShadowCard className="card bg-light">
          <CardHeader>
            <a onClick={() => {
                this.props.actions.tipsterDetails(this.props.data);
                this.props.history.push("/tipsterDetails");
              }} style={{cursor: 'pointer', fontWeight: '600'}}>
              {this.props.data.name ? this.props.data.name : "[Utente senza nome]"}
            </a>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" className={"mb-3"}>
                <div><Label><i className="icon-envelope mr-2"></i> Email</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.email}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-user mr-2"></i> Ruolo</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.roleName}</span></div>
              </Col>
            </Row>
          </CardBody>
        </ShadowCard>
      </Col>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(TipsterCard);
