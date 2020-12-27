import React, { Component } from "react";

import { Spinner, Row, Col } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import SubscriberCard from "./SubscriberCard";
import { connect } from "react-redux";
import config from "../../store/config";
import TokenManager from "../../components/auth/Token";
import Label from "../../components/layout/Label";

class MySubscribers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      subscriptions: [],
      subscriptionMoney: 0
    };
    this.getMySubscribers();
  }

  async getMySubscribers() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(`${config.API_URL}/subscriptions/search/findByAuthor/?author=${this.props.user._links.self.href}`,
        { method: "GET", headers: { "Content-Type": "application/json", "X-Auth": token }})
      .then((response) => response.json())
      .then((response) => {
        if (response._embedded !== undefined) {
          this.setState({
            subscriptions: response._embedded.subscriptions,
            loading: false,
            subscriptionMoney: response._embedded.subscriptions.reduce((accumulator, sub) => accumulator + sub.service.price, 0)
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
                <Label>Elenco degli abbonamenti ai miei servizi</Label>
            </Col>
            <Col xl={8} lg={7} md={7} style={{justifyContent: 'flex-end', flex: 'row'}}>
              <Row style={{justifyContent: 'flex-end', marginRight: 10}}>
                <Col xl={ 3 } md={ 3 }>
                  <div className="card flex-row align-items-center align-items-stretch border-0" style={{margin: 0}}>
                    <div className={"col-2 d-flex align-items-center bg-success-dark justify-content-center rounded-left"}>
                        <span style={{fontSize: '1.4rem'}}>€</span>
                    </div>
                    <div className={"col-10 bg-success rounded-right"} style={{paddingTop: "0.4rem", paddingBottom: "0.3rem"}}>
                        <div className="h3 mt-0" style={{margin: 0, paddingTop: 5, paddingBottom: 5}}>
                            {this.state.subscriptionMoney.toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </div>
                    </div>
                  </div>
                </Col>
              </Row>
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
export default connect(mapStateToProps)(MySubscribers);
