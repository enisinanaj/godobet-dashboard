import React, { Component } from "react";
import MyPools from "./MyPools";
import { Button, Spinner } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import { connect } from "react-redux";
import NewPool from "./NewPool";
import Label from "../../components/layout/Label";
import config from "../../store/config";

class SubscriberPools extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalEditPoolVisible: false,
      pools: [],
    };
    this.getAllPools();
  }

  editPool(pool) {
    this.setState(
      {
        poolToEdit: pool,
      },
      () => this.toggleModalEditPool()
    );
  }

  toggleModalEditPool = () => {
    this.setState({
      modalEditPoolVisible: !this.state.modalEditPoolVisible,
    });
  };

  async getAllPools() {
    //console.log(this.props.app.user);
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(`${config.API_URL}/pools/search/subscriberPools?subscriber=${this.props.user._links.self.href}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response._embedded !== undefined)
            this.setState({
              pools: response._embedded.pools,
              loading: false,
            });
          else this.setState({ noErrors: false, loading: true });
        });
    });
  }

  render() {
    if (!this.state.loading)
      return (
        <ContentWrapper>
          <div className="content-heading" style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
            <div>
              <div>Le mie schedine</div>
              <Label>Qua si trovano tutte le schedine in ordine di inserimento</Label>
            </div>
          </div>
          
          <NewPool
            modalNewPoolVisible={this.state.modalEditPoolVisible}
            poolToEdit={this.state.poolToEdit}
            toggleModal={() => this.toggleModalEditPool()}
            refreshService={() => this.getAllPools()}
          />
          
          <MyPools
            pools={this.state.pools}
            history={this.props.history}
            editPool={(pool) => this.editPool(pool)}
          />
        </ContentWrapper>
      );
    else if (this.state.noErrors)
      return (
        <ContentWrapper>
          <h4> Carico tutte le schedine...</h4>
          <div>
            <Spinner />
          </div>
        </ContentWrapper>
      );
    else
      return (
        <ContentWrapper>
          <div>
            <h4>Errore nel caricamento delle schedine</h4>
          </div>
          <div>
            <Button
              className="btn"
              onClick={() => {
                this.setState({ noErrors: true, loading: true }, () => {
                  this.getAllPools();
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

const mapStateToProps = (state) => ({user: state.app.user});
export default connect(mapStateToProps)(SubscriberPools);
