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
import TokenManager from "../../components/auth/Token";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

class ServiceCard extends Component {
  static propTypes = {
    id: PropTypes.string,
    serviceName: PropTypes.string,
    description: PropTypes.string,
    maxSubscribers: PropTypes.number,
    duration: PropTypes.number,
    price: PropTypes.number,
    version: PropTypes.number,
    links: PropTypes.object,
  };

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
        fetch(this.props.links.taxonomies.href, {
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
              this.setState({ taxonomies: arrayTaxonomies });
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
      <Card className="card-default">
        <CardHeader>
          <strong>{this.props.serviceName}</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Descrizione:</Col>
                <Col md="8">
                  <strong>{this.props.description}</strong>
                </Col>
                <Col md="4">Prezzo:</Col>
                <Col md="8">
                  <strong>{this.props.price} €</strong>
                </Col>
                <Col md="4">Durata:</Col>
                <Col md="8">
                  <strong>{this.props.duration} giorni</strong>
                </Col>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Numero max iscritti:</Col>
                <Col md="8">
                  <strong>{this.props.maxSubscribers}</strong>
                </Col>
                <Col md="4">Tag:</Col>
                <Col md="8">
                  <ReactTagInput
                    className="culo"
                    tags={this.state.taxonomies}
                    readOnly={true}
                  />
                </Col>
                <Col md="4">Versione:</Col>
                <Col md="8">
                  <strong>{this.props.version}</strong>
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
                this.props.actions.serviceDetails({
                  serviceName: this.props.serviceName,
                  description: this.props.description,
                  maxSubscribers: this.props.maxSubscribers,
                  duration: this.props.duration,
                  price: this.props.price,
                  version: this.props.version,
                  links: this.props.links,
                });
                this.props.history.push("/serviceDetails");
              }}
            >
              Visualizza
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
