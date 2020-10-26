import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";

class MyServices extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      services: [
        {
          id: 1,
          author: config.API_URL + "/users/1",
          taxonomies: [
            config.API_URL + "/taxonomies/2",
            config.API_URL + "/taxonomies/3",
          ],
          serviceName: "vinci ora (Pallavolo)!",
          description: "Tutte le scommesse sulla pallavolo",
          maxSubscribers: 30,
          duration: 30,
          price: 4500,
          version: 2,
          taxonomiesDefinition: [],
        },
        {
          id: 2,
          author: config.API_URL + "/users/1",
          taxonomies: [
            config.API_URL + "/taxonomies/2",
            config.API_URL + "/taxonomies/3",
          ],
          serviceName: "Tutto il calcio",
          description: "Tutte le scommesse sul calcio 222",
          maxSubscribers: 20,
          duration: 30,
          price: 5000,
          version: 1,
          taxonomiesDefinition: [],
        },
      ],
    };
    //this.getMyServices();
  }

  async getMyServices() {
    var token = await TokenManager.getInstance().getToken();
    fetch(config.API_URL + "/services", {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) =>
        this.setState({ services: response._embedded.services })
      );
  }

  async getTaxonomies() {
    var token = await TokenManager.getInstance().getToken();
    fetch(config.API_URL + "/taxonomies", {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) =>
        this.setState({ taxonomiesDefinition: response._embedded.taxonomies })
      );
  }

  render() {
    return (
      <ContentWrapper>
        {this.state.services.map((service) => (
          <ServiceCard
            key={service.key}
            id={service.id}
            author={service.author}
            taxonomies={service.taxonomies}
            taxonomiesDefinition={service.taxonomiesDefinition}
            serviceName={service.serviceName}
            description={service.description}
            maxSubscribers={service.maxSubscribers}
            duration={service.duration}
            price={service.price}
            version={service.version}
            hrefService={""}
          ></ServiceCard>
        ))}
      </ContentWrapper>
    );
  }
}

export default MyServices;
