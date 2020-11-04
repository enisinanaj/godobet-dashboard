import React, { Component } from "react";

import { Button, Spinner } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import { connect } from "react-redux";

class TipsterList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalNewServiceVisible: false,
      tipsters: [],
    };
    this.test();
  }

  async getTipsters() {
    /*
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(this.props.app.user._links.services.href, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response._embedded !== undefined)
            this.setState({
              services: response._embedded.services,
              loading: false,
            });
          else this.setState({ noErrors: false, loading: true });
        });
    });
    */
  }

  async test() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch("https://godobet-api.herokuapp.com/users", {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
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
          <div className="form-group row"></div>
          {this.state.tipsters.map((tipster) => null)}
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
