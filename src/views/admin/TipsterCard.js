import React, { Component } from "react";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
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
            {/* <strong>{JSON.stringify(this.props.data)}</strong> */}
            <strong>{this.props.data.name}</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="6">
                <FormGroup row>
                  <Col md="2">email:</Col>
                  <Col md="8">
                    <strong>{this.props.data.email}</strong>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="d-flex">
            <div>
              <Button
                className="btn btn-block btn-secondary"
                onClick={() => {
                  this.props.actions.tipsterDetails(this.props.data);
                  this.props.history.push("/tipsterDetails");
                }}
              >
                Visualizza
              </Button>
            </div>
          </CardFooter>
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
