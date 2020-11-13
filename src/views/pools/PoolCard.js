import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
  Button,
} from "reactstrap";
import * as moment from "moment";
import "moment/locale/it";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
moment.locale("it");

class PoolCard extends Component {
  render() {
    return (
      <Col lg="4" md="6" sm="12" className={"mb-5"}>
        <Card className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
          <CardHeader style={{borderBottomColor: "#f0f0f0", borderBottomWidth: 1, borderBottomStyle: "solid"}}>
            <a className="text-muted" 
              style={{lineHeight: "35px", cursor: "pointer", flex: 1, flexDirection: "row", justifyContent: "space-between"}}
              onClick={() => {
                this.props.actions.poolDetails({
                  bookmaker: this.props.poolData.bookmaker,
                  description: this.props.poolData.description,
                  id: this.props.id,
                  createdOn: this.props.poolData.createdOn,
                  updatedOn: this.props.poolData.updatedOn,
                  profit: this.props.poolData.profit,
                  stake: this.props.poolData.stake,
                  totalEvents: this.props.poolData.totalEvents,
                  totalQuote: this.props.poolData.totalQuote,
                  links: this.props.poolData._links,
                });
              this.props.history.push("/poolDetails");
            }}>
              <strong style={{fontSize: "1.7em"}}>Schedina {this.props.poolData.id}</strong>
              <em className="fa fa-arrow-right" style={{float: "right", lineHeight: "38px"}}></em>
            </a>
          </CardHeader>
          <CardBody className={"pb-0"}>
            <Row className={"bb"} style={{padding: 10}}>
              <Col lg="12" className={"mb-3"}>
                <Row><strong>Descrizione</strong></Row>
                <Row>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.poolData.description}
                  </span>
                </Row>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <Row><strong>Bookmaker</strong></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.poolData.bookmaker}</span></Row>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <Row><strong>Quota</strong></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.poolData.totalQuote}</span></Row>
              </Col>
              <Col lg="6">
                <Row><strong>Stake</strong></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.poolData.stake}</span></Row>
              </Col>
              <Col lg="6">
                <Row><strong>Profitto</strong></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.poolData.profit}</span></Row>
              </Col>
            </Row>
            <Row classNamew="mb-3" style={{padding: 10}}>
              <span style={{fontSize: "1.2em"}}>{this.props.poolData.totalEvents}0 Eventi presenti</span>
            </Row>
          </CardBody>
          <CardFooter className="d-flex bg-light" style={{flexDirection: "row", justifyContent: "flex-start"}}>
              <Col lg="6" className="p-0">
                <div style={{fontSize: "0.9em", display: "inline-block"}}>creato il {moment(this.props.poolData.createdOn).format( "DD/MM/YYYY HH:mm" )}</div>
              </Col>
              <Col lg="6" className="p-0" style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", textAlign: "right"}}>
                <div style={{fontSize: "0.9em", display: "inline-block"}}>modificato il {moment(this.props.poolData.updatedOn).format( "DD/MM/YYYY HH:mm" )}</div>
              </Col>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
