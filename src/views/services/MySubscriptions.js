import React, { Component } from "react";

import { Spinner, Row, Col } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import SubscriberCard from "./SubscriberCard";
import { connect } from "react-redux";
import TokenManager from "../../components/auth/Token";
import Label from "../../components/layout/Label";

class MySubscriptions extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      subscriptions: [],
      subscriptionMoney: 0
    };
    this.getMySubscriptions();
  }

  async getMySubscriptions() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(this.props.user._links.subscriptions.href.replace("{?projection}", ""), { method: "GET", headers: { "Content-Type": "application/json", "X-Auth": token }})
      .then((response) => response.json())
      .then((response) => {
        if (response._embedded !== undefined) {
          this.setState({
            subscriptions: response._embedded.subscriptions,
            loading: false
          });
        } else this.setState({ noErrors: false, loading: true });
      });
    });
  }

  render() {
      return (
        <ContentWrapper>
          <Row className="content-heading" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Col xl={4} lg={5} md={5}>Abbonamenti
                <Label>Elenco dei miei abbonamenti</Label>
            </Col>
          </Row>

          <Row>
            {!this.state.loading && this.state.subscriptions.map(sub => (
              <SubscriberCard key={sub._links.self.href} data={sub} />
            ))}

            {this.state.loading && <Spinner />}
          </Row>
        </ContentWrapper>
      );
  }
}

const mapStateToProps = (state) => ({user: state.app.user});
export default connect(mapStateToProps)(MySubscriptions);
