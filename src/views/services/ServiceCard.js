import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import "@pathofdev/react-tag-input/build/index.css";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import ShadowCard from "../../components/layout/ShadowCard";
import Label from "../../components/layout/Label";
import moment from 'moment';
import TokenManager from "../../components/auth/Token";
import Swal from "../../components/elements/Swal";
import config from "../../store/config";

class ServiceCard extends Component {

  state = {
    swalOption3: {
      title: 'Sei sicuro?',
      text: 'Stai per abbonarti al servizio. Conferma l\'iscrizione con cliccando sul pulsante sottostante.',
      icon: 'warning',
      buttons: {
          cancel: true,
          confirm: {
              text: 'Confermo',
              value: true,
              visible: true,
              className: "bg-success",
              closeModal: true
          }
      }
    }
  }

  openDetail() {
    let token = "";
    TokenManager.getInstance().getToken()
    .then(t => {
      token = t;

      return fetch(this.props.serviceData._links.author.href, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": token
        }
      });
    })
    .then(body => body.json())
    .then(author => {
      if (author._links.self.href === this.props.app.user._links.self.href || this.props.app.user.roleName === "God") {
        this.props.actions.serviceDetails({
          serviceName: this.props.serviceData.serviceName,
          description: this.props.serviceData.description,
          maxSubscribers: this.props.serviceData.maxSubscribers,
          duration: this.props.serviceData.duration,
          price: this.props.serviceData.price,
          version: this.props.serviceData.version,
          links: this.props.serviceData._links,
        });
        
        this.props.history.push("/serviceDetails");
      } else if (this.props.app.user.roleName === 'Subscriber') {
        //TODO: open payment form for subscription
        fetch(config.API_URL + "/subscriptions", {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "X-AUTH": token
          },
          body: JSON.stringify({
            "subscriber": this.props.app.user._links.self.href,
            "service": this.props.serviceData._links.self.href,
            "paymentSystemToken": "godobet",
            "subscribedOn": moment()
          })
        })

      }
    });
  }

  subscriptionConfirmation(isConfirm, swal) {
    if (isConfirm) {
      swal("Confermato!", "Ti sei abbonato al servizio con successo!", "success");
    } else {
      return;
    }
  }

  render() {
    return (
      <Col lg="4" md="6" sm="12" className={"mb-5"}>
        <ShadowCard className="card bg-light mb-3">
          <CardHeader style={{borderBottomColor: "#f0f0f0", borderBottomWidth: 1, borderBottomStyle: "solid"}}>
            <a className="text-muted" 
              style={{lineHeight: "35px", cursor: "pointer", flex: 1, flexDirection: "row", justifyContent: "space-between"}} 
              onClick={() => this.openDetail()}>
              <strong style={{fontSize: "1.7em"}}>{this.props.serviceData.serviceName}</strong>
              {this.props.app.user.roleName !== 'Subscriber' && <em className="fa fa-arrow-right" style={{float: "right", lineHeight: "38px"}}></em>}
              {this.props.app.user.roleName === 'Subscriber' 
                && <Swal callback={this.subscriptionConfirmation} options={this.state.swalOption3} className={"btn btn-primary float-right"}>Abbonati ora!</Swal>}
            </a>
          </CardHeader>
          <CardBody>
            <div style={{padding: 10}}>
              <Col lg="12" className={"mb-3"}>
                <Row><Label>Descrizione</Label></Row>
                <Row>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.serviceData.description}
                  </span>
                </Row>
              </Col>
              <Col lg="6">
                <Row><Label><i className="icon-people mr-2"></i>  Numero max iscritti</Label></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.serviceData.maxSubscribers}</span></Row>
              </Col>
            </div>
            <div className="mb-1" style={{padding: 10}}>
              <Col lg="12">
                <Row><Label><i className="icon-tag mr-2"></i> Hashtag</Label></Row>
                <Row>
                  {this.props.serviceData.taxonomies.map(tax => <span 
                    key={tax.definition}
                    style={{fontSize: "1.1em", padding: 3, display: 'inline-block'}}>
                    #{tax.definition}
                  </span>)}
                  {this.props.serviceData.taxonomies.length === 0 && (<Alert color="info" style={{
                      color: "#125f77", 
                      backgroundColor: "#d3f1fa",
                      width: "100%",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      marginTop: "5px",
                      opacity: 0.8
                    }}>
                     Non ci sono hashtag per questo pacchetto.
                    </Alert>)}
                </Row>
              </Col>
            </div>
          </CardBody>
          <CardFooter className="bg-light">
            <Row style={{paddingBottom: "10px", paddingLeft: "15px", borderBottomWidth: "1px", borderBottomColor: "rgba(0, 0, 0, 0.125)", borderBottomStyle: "solid"}}
              className={"mb-2"}>
              <Col lg="3">
                <Label style={{fontSize: "1.2em", display: "inline-block", marginTop: "3px"}}>v {this.props.serviceData.version}</Label>
              </Col>
              <Col lg="10" style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", textAlign: "right"}}>
                <Label display={"inline"}>{this.props.serviceData.price}€ ogni {this.props.serviceData.duration} giorni</Label>
              </Col>
            </Row>
            <div className={"d-flex"} style={{flex :1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Col lg="6" className="p-0">
                <Label style={{fontSize: "1em", display: "inline-block"}}>creato il {moment(this.props.serviceData.createdOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
              <Col lg="6" className="p-0" style={{textAlign: "right"}}>
                <Label style={{fontSize: "1em", display: "inline-block"}}>modificato il {moment(this.props.serviceData.updatedOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
