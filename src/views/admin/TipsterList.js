import React, { Component } from "react";

import { Button, Spinner, Row, Col } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import TipsterCard from "./TipsterCard";
import { connect } from "react-redux";
import Register from "../auth/Register";

class TipsterList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalNewTipsterVisible: false,
      tipsters: [],
    };
    this.getTipsters();
  }

  toggleModal = () => {
    this.setState({
      modalNewTipsterVisible: !this.state.modalNewTipsterVisible,
    });
  };

  async getTipsters() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(
        "http://api.godobet.it/users/search/findByRole/?role=http://api.godobet.it/roles/4",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response._embedded !== undefined) {
            this.setState({
              tipsters: response._embedded.users,
              loading: false,
            });
          } else this.setState({ noErrors: false, loading: true });
        });
    });
  }

  async test() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(
        "http://api.godobet.it/users/search/findByRole/?role=http://api.godobet.it/roles/4",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    });
  }

  render() {
    if (!this.state.loading)
      return (
        <ContentWrapper>
          <Row>
            <Col lg="6">
              <h2>Gestione Tipster</h2>
            </Col>
            <Col lg="2">
              <Button
                className="btn btn-block btn-secondary"
                onClick={() => this.toggleModal()}
              >
                Aggiungi Tipster
              </Button>
              <Register
                //addService={(newService) => this.addService(newService)}
                modalNewTipsterVisible={this.state.modalNewTipsterVisible}
                toggleModal={() => this.toggleModal()}
                refreshTipsterList={() => this.getTipsters()}
              />
            </Col>
          </Row>

          {this.state.tipsters.map((tipster) => (
            <TipsterCard
              key={tipster._links.self.href}
              data={tipster}
              history={this.props.history}
            />
          ))}
        </ContentWrapper>
      );
    else if (this.state.noErrors)
      return (
        <ContentWrapper>
          <h4> Carico i Tipster...</h4>
          <div>
            <Spinner />
          </div>
        </ContentWrapper>
      );
    else
      return (
        <ContentWrapper>
          <div>
            <h4>Errore nel caricamento dei Tipster</h4>
          </div>
          <div>
            <Button
              className="btn"
              onClick={() => {
                this.setState({ noErrors: true, loading: true }, () => {
                  this.getTipsters();
                });
              }}
            >
              Riprova
            </Button>
          </div>
        </ContentWrapper>
      );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(TipsterList);
