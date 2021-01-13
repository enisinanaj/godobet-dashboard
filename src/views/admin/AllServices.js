import React, { Component } from "react";
import ServiceCard from "../services/ServiceCard";
import { Button, Col, Row } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import { connect } from "react-redux";
import Label from "../../components/layout/Label";

class AllServices extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalEditServiceVisible: false,
      services: [],
      searchPhrase: "",
    };
    this.getAllServices();
  }

  toggleModalEditService = () => {
    this.setState({
      modalEditServiceVisible: !this.state.modalEditServiceVisible,
    });
  };

  editService(service) {
    this.setState(
      {
        serviceToEdit: service,
      },
      () => this.toggleModalEditService()
    );
  }

  async getAllServices(q) {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {

      let url = config.API_URL + "/services";
      let params = q ? new URLSearchParams({name: q}) : null;

      url = q ? url + "/search/findByServiceName/?" + params : url;

      fetch(url, {
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
      })
      .catch(() => {
        this.setState({ noErrors: false, loading: false });
      });
    });
  };

  updateSearchState = (searchPhrase) => {
    this.setState({searchPhrase: searchPhrase.target.value}, () => this.searchClickHandler());
  };

  searchClickHandler = () => {
    this.getAllServices(this.state.searchPhrase);
  };

  render() {
    return (
      <ContentWrapper>
        <div className="content-heading" style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
          <Col xl={12} lg={12} md={12} style={{justifyContent: 'flex-end', flex: 'row'}}>
            <div>Tutti i pacchetti</div>
            <Label>Qua si trovano tutti i pacchetti disponibili nella piattaforma</Label>
          </Col>
        </div>
        <Row>
          <Col lg={12} className={"mb-3"}>
            <input className="form-control" type="text" placeholder="Cerca pacchetti" value={this.state.searchPhrase} onChange={this.updateSearchState} />
          </Col>

          {!this.state.loading && !this.state.noErrors
            ? <div>
                <div>
                  <h4>Errore nel caricamento dei pacchetti</h4>
                </div>
                <div>
                  <Button
                    className="btn"
                    onClick={() => {
                      this.setState({ noErrors: true, loading: true }, () => {
                        this.searchClickHandler();
                      });
                    }}
                  >
                    Riprova
                  </Button>
                </div>
              </div>
            : 
            this.state.services.map((service) => (
              <ServiceCard
                history={this.props.history}
                key={service._links.self.href}
                serviceData={service}
                editService={(service) => this.editService(service)}
              ></ServiceCard>
            ))
          }
        </Row>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(AllServices);
