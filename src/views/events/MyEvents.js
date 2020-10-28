import React, { Component } from "react";
import EventCard from "./EventCard";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";

class MyEvents extends Component {
  constructor(props, context) {
    super(props, context);
    //this.getMyPools();
  }

  render() {
    return this.props.events.map((event) => (
      <EventCard
        id={event.id}
        eventDate={event.eventDate}
        sport={event.sport}
        competition={event.competition}
        gender={event.gender}
        proposal={event.proposal}
        event={event.event}
        quote={event.quote}
        outcome={event.outcome}
        notes={event.notes}
        pool={event.pool}
        createdOn={event.createdOn}
        updatedOn={event.updatedOn}
      ></EventCard>
    ));
  }
}

export default MyEvents;
