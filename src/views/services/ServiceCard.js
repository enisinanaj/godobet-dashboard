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
    },
    author: null
  }

  checkAuthorAndOpenDetail() {
    if (this.state.author) {
      this.goToDetail()
      return;
    }

    return;
  }

  loadAuthor() {
    return TokenManager.getInstance().getToken()
    .then(t => {
      return fetch(this.props.serviceData._links.author.href.replace("http://", "https://"), {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": t
        }
      });
    })
    .then(body => body.json())
    .then(author => {
      this.setState({author})
    });
  }

  isAuthor() {
    if (!this.state.author) {
      this.loadAuthor();
    } else if (this.state.author._links.self.href.replace("http://", "https://") === this.props.app.user._links.self.href.replace("http://", "https://")
       || this.props.app.user.roleName === "God") {
        return true;
    }

    return false;
  }

  goToDetail() {
    if (this.isAuthor()) {
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
    }
  }

  subscriptionConfirmation(isConfirm, swal) {
    if (isConfirm) {
      TokenManager.getInstance().getToken()
      .then(t => {
        return fetch(config.API_URL + "/subscriptions", {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "X-AUTH": t
          },
          body: JSON.stringify({
            "subscriber": this.props.app.user._links.self.href.replace("http://", "https://"),
            "service": this.props.serviceData._links.self.href.replace("http://", "https://"),
            "paymentSystemToken": "godobet",
            "subscribedOn": moment()
          })
        });
      })
      .then(e => swal("Confermato!", "Ti sei abbonato al servizio con successo!", "success"));
    } else {
      return;
    }
  }

  render() {
    return (
      <Col xl="6" lg="6" md="6" sm="12" className={"mb-5"}>
        <ShadowCard className="card bg-light mb-3">
          <CardHeader style={{borderBottomColor: "#f0f0f0", borderBottomWidth: 1, borderBottomStyle: "solid"}}>
            <a className="text-muted" 
              style={{lineHeight: "35px", cursor: "pointer", flex: 1, flexDirection: "row", justifyContent: "space-between"}} 
              onClick={() => this.checkAuthorAndOpenDetail()}>
              <strong style={{fontSize: "1.7em"}}>{this.props.serviceData.serviceName}</strong>
              {this.isAuthor() && <em className="fa fa-arrow-right" style={{float: "right", lineHeight: "38px"}}></em>}
              {!this.isAuthor() && <Swal callback={(isConfirm, swal) => this.subscriptionConfirmation(isConfirm, swal)} options={this.state.swalOption3} className={"btn btn-primary float-right"}>Abbonati ora!</Swal>}
            </a>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="6" sm={6} className={"mb-2"}>
                <div><Label>Descrizione</Label></div>
                <div>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.serviceData.description}
                  </span>
                </div>
              </Col>
              <Col lg="6" sm={6} xs={6} className={"mb-2"}>
                <div><Label><i className="icon-people mr-2"></i>  Numero max iscritti</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.serviceData.maxSubscribers}</span></div>
              </Col>
              <Col lg="12">
                <div><Label><i className="icon-tag mr-2"></i> Hashtag</Label></div>
                <div>
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
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="bg-light">
            <Row style={{paddingBottom: "10px", paddingLeft: "15px", borderBottomWidth: "1px", borderBottomColor: "rgba(0, 0, 0, 0.125)", borderBottomStyle: "solid"}}
              className={"mb-2"}>
              <Col lg="3" sm={4} xs={4}>
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
