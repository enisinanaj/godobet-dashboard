import React, { Component } from "react";
import ServiceCard from "../services/ServiceCard";
import { Button, Col, Row, Spinner } from "reactstrap";
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
        //console.log(response);
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
          <Col xl={4} lg={5} md={5} style={{justifyContent: 'flex-end', flex: 'row'}}>
            <div>Tutti i pacchetti</div>
            <Label>Qua si trovano tutti i pacchetti disponibili nella piattaforma</Label>
          </Col>

          <Col xl={ 3 } md={ 3 } style={{justifyContent: 'flex-end', marginRight: 10}}>
            { /* START card */ }
            <div className="card flex-row align-items-center align-items-stretch border-0" style={{margin: 0}}>
              <div className={"col-2 d-flex align-items-center bg-gray justify-content-center rounded-left"}>
                  <em className={"icon-magnifier"} style={{fontSize: '15px'}}/>
              </div>
              <div className={"col-10 bg-gray-lighter rounded-right"}>
                  <div className="h3 mt-0" style={{margin: 0, paddingTop: 5, paddingBottom: 5}}>
                    <input className="form-control" type="text" placeholder="Cerca pacchetti" value={this.state.searchPhrase} onChange={this.updateSearchState} />
                  </div>
              </div>
            </div>
          </Col>
        </div>
        <Row>
          {
            this.state.loading && this.state.noErrors
            ? <div style={{flexDirection: "row", justifyContent: "center", flex: 1}}><Spinner /></div>
            : !this.state.loading && !this.state.noErrors
              ? <ContentWrapper>
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
                </ContentWrapper>
              : this.state.services.map((service) => (
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
