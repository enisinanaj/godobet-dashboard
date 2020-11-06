import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

class SubscriberCard extends Component {
  render() {
    return (
      <Card className="card-default">
        <CardHeader>
          <strong>{this.props.data.email}</strong>
        </CardHeader>
      </Card>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SubscriberCard);
