import React, { Component } from "react";

import { Button, Spinner, Row, Col } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import SubscriberCard from "./SubscriberCard";
import config from "../../store/config";
import { connect } from "react-redux";
import Register from "../auth/Register";

class MySubscribers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      subscribers: [],
    };
    //this.getMySubscribers();
    this.test();
  }

  async getMySubscribers() {
    /*var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(
        "https://godobet-api.herokuapp.com/users/search/findByRole/?role=https://godobet-api.herokuapp.com/roles/4",
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
    */
  }

  async test() {
    console.log(this.props.app.user._links);
    /*var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(this.props.app.user._links.subscriptions.href, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    });*/
  }

  render() {
    if (!this.state.loading)
      return (
        <ContentWrapper>
          <Row>
            <Col lg="6">
              <h2>I miei abbonati</h2>
            </Col>
          </Row>

          {this.state.subscribers.map((subscriber) => (
            <SubscriberCard
              key={subscriber._links.self.href}
              data={subscriber}
            />
          ))}
        </ContentWrapper>
      );
    else if (this.state.noErrors)
      return (
        <ContentWrapper>
          <h4> Carico gli abbonati...</h4>
          <div>
            <Spinner />
          </div>
        </ContentWrapper>
      );
    else
      return (
        <ContentWrapper>
          <div>
            <h4>Errore nel caricamento degli abbonati</h4>
          </div>
          <div>
            <Button
              className="btn"
              onClick={() => {
                this.setState({ noErrors: true, loading: true }, () => {
                  this.getMySubscribers();
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
export default connect(mapStateToProps)(MySubscribers);
