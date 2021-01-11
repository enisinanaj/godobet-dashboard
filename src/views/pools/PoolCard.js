import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Col,
} from "reactstrap";
import * as moment from "moment";
import "moment/locale/it";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import ShadowCard from "../../components/layout/ShadowCard";
import Label from "../../components/layout/Label";
moment.locale("it");

class PoolCard extends Component {
  render() {
    return (
      <Col xl="4" lg={6} md="6" sm="12" className={"mb-5"}>
        <ShadowCard className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
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
                  edittable: this.props.edittable
                });
              this.props.history.push("/poolDetails");
            }}>
              <strong style={{fontSize: "1.7em"}}>Schedina {this.props.poolData.id}</strong>
              <em className="fa fa-arrow-right" style={{float: "right", lineHeight: "38px"}}></em>
            </a>
          </CardHeader>
          <CardBody className={"pb-0"}>
            <div style={{paddingLeft: 10, paddingRight: 10, display: "flex", flexWrap: "wrap"}}>
              <Col lg="12" className={"mb-3"}>
                <div><Label>Description</Label></div>
                <div>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.poolData.description}
                  </span>
                </div>
              </Col>
              <Col lg="6" md={6} sm={6} xs={4} className={"mb-3"}>
                <div><Label><i className="icon-book-open mr-2"></i> Bookmaker</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.poolData.bookmaker}</span></div>
              </Col>
              <Col lg="6" md={6} sm={6} xs={4} className={"mb-3"}>
                <div><Label><i className="icon-graph mr-2"></i> Quota</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{(this.props.poolData.quote).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div>
              </Col>
              <Col lg="6" md={6} sm={6} xs={4} className={"mb-3"}>
                <div><Label><i className="icon-pie-chart mr-2"></i>Stake</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{(this.props.poolData.stake / 100).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}</span></div>
              </Col>
              <Col lg="6" md={6} sm={6} xs={4} className={"mb-3"}>
                <div><Label><i className="icon-trophy mr-2"></i>Profitto</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{(this.props.poolData.profit).toLocaleString('it-IT', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}</span></div>
              </Col>
              <Col lg="6" md={6} sm={6} xs={4} className={"mb-12"}>
                <div><Label><i className="icon-trophy mr-2"></i>Eventi</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.poolData.events.length}</span></div>
              </Col>
            </div>
          </CardBody>
          <CardFooter className="d-flex bg-light" style={{flexDirection: "row", justifyContent: "flex-start"}}>
              <Col lg="6" className="p-0">
                <Label style={{fontSize: "1em", display: "inline-block"}}>creato il {moment(this.props.poolData.createdOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
              <Col lg="6" className="p-0" style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", textAlign: "right"}}>
                <Label style={{fontSize: "1em", display: "inline-block"}}>modificato il {moment(this.props.poolData.updatedOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
