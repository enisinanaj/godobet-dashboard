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
  Label,
} from "reactstrap";
import TokenManager from "../../components/auth/Token";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import Sparkline from "../../template_components/Common/Sparklines";

class ServiceCard extends Component {
  state = {
    taxonomies: [],
  };

  componentDidMount() {
    this.getTaxonomies();
  }

  async getTaxonomies() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      try {
        fetch(this.props.serviceData._links.taxonomies.href, {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response._embedded) {
              let arrayTaxonomies = [];
              for (let taxonomy of response._embedded.taxonomy) {
                arrayTaxonomies.push(taxonomy.definition);
              }
              this.setState({
                taxonomies: arrayTaxonomies,
                taxonomiesObjects: response._embedded.taxonomy,
              });
            }
          });
      } catch {
        console.log(this.props.app);
        // this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <Col lg="4" md="6" sm="12" className={"mb-5"}>
        <Card className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
          <CardHeader style={{borderBottomColor: "#f0f0f0", borderBottomWidth: 1, borderBottomStyle: "solid"}}>
            <a className="text-muted" 
              style={{lineHeight: "35px", cursor: "pointer", flex: 1, flexDirection: "row", justifyContent: "space-between"}} href="#" 
              onClick={() => {
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
            }}>
              <strong style={{fontSize: "1.7em"}}>{this.props.serviceData.serviceName}</strong>
              <em className="fa fa-arrow-right" style={{float: "right", lineHeight: "38px"}}></em>
            </a>
          </CardHeader>
          <CardBody>
            <Row className={"bb"} style={{padding: 10}}>
              <Col lg="12" className={"mb-3"}>
                <Row><strong>Descrizione</strong></Row>
                <Row>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.serviceData.description}
                  </span>
                </Row>
              </Col>
              <Col lg="6">
                <Row><strong>Numero max iscritti</strong></Row>
                <Row><span style={{fontSize: "1.2em"}}>{this.props.serviceData.maxSubscribers}</span></Row>
              </Col>
            </Row>

            <Row classNamew="mb-3" style={{padding: 10}}>
              <ul class="list-inline m-0">
                {this.state.taxonomies.map(tax => {
                  return (<li class="list-inline-item" style={{marginTop: "0.5rem"}} key={tax}>
                    <span class="badge bg-gray" style={{fontSize: "1.1em", padding: 7, opacity: 0.8}}>#{tax}</span>
                  </li>);
                })}
              </ul>
            </Row>
          </CardBody>
          <CardFooter className="d-flex bg-light" style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Col lg="2">
                <div style={{fontSize: "1.2em", display: "inline-block", marginTop: "3px"}} className={"badge bg-green"}>v0.1{this.props.serviceData.version}</div>
              </Col>
              <Col lg="10" style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", textAlign: "right"}}>
                <div style={{fontSize: "1.4em", display: "inline-block"}}>{this.props.serviceData.price}€ ogni {this.props.serviceData.duration} giorni</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
