import React, { Component } from "react";
import {
  CardBody,
  CardFooter,
  Col,
  Label
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import ShadowCard from "../../components/layout/ShadowCard";
import moment from 'moment';

class SubscriberCard extends Component {
  render() {
    let active = this.props.data.expired || !this.props.data.valid ? false : true;

    return (
      <Col lg={3} md={4} sm={6} className={"mb-3"}>
        <ShadowCard className="card bg-light">
          <CardBody className={"pb-0"}>
            <div style={{display: "flex", flexWrap: "wrap"}}>
              <Col lg="12" className={"mb-3"}>
                <div><Label><i className="icon-info mr-2"></i>Nome pacchetto</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.service.serviceName}</span></div>
              </Col>
              <Col lg="6">
                <div><Label><i className={(active ? 'icon-check' : 'icon-close') + " mr-2"}></i>Stato</Label></div>
                <div>
                  <span style={{fontSize: "1.2em", color: active ? 'green' : 'red'}}>
                    {this.props.data.expired ? "Scaduto" : !this.props.data.valid ? "Non attivo" : "Attivo"}
                  </span>
                </div>
              </Col>
              <Col lg="6">
                <div><Label><i className="icon-wallet mr-2"></i>Prezzo</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.service.price.toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}€</span></div>
              </Col>
            </div>
          </CardBody>
          <CardFooter className="d-flex bg-light" style={{flexDirection: "row", justifyContent: "flex-start"}}>
              <Col lg="12" className="p-0" style={{textAlign: "right"}}>
                <Label style={{fontSize: "1em", fontWeight: '300', display: "inline-block"}}>Inizio abbonamento {moment(this.props.data.subscribedOn).format( "DD/MM/YYYY" )}</Label>
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
export default connect(mapStateToProps, mapDispatchToProps)(SubscriberCard);
