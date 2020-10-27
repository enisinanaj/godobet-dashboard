import React, { Component } from "react";
import EventCard from "./EventCard";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import * as moment from "moment";
import config from "../../store/config";

class MyEvents extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      events: [
        {
          id: 2,
          eventDate: moment().format(),
          sport: "calcio",
          competition: "Serie A",
          gender: config.API_URL + "/items/1",
          proposal: "over 2.5",
          event: "Roma - Parma",
          quote: "1.40",
          outcome: "2.5",
          notes: "alto rischio, non giocatela se non vi fidate",
          pool: "props.pool",
        },
        {
          id: 3,
          eventDate: moment().format(),
          sport: "calcio",
          competition: "Serie A",
          gender: config.API_URL + "/items/1",
          proposal: "over 2.5",
          event: "Juventus - Milan",
          quote: "3.4",
          outcome: "2.5",
          notes: "sicura",
          pool: "props.pool",
        },
      ],
    };
    //this.getMyPools();
  }

  render() {
    return this.state.events.map((event) => (
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
