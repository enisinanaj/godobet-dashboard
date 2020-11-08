import React, { Component } from "react";
import EventCard from "./EventCard";

class MyEvents extends Component {
  render() {
    return this.props.events.map((event) => (
      <EventCard
        key={event._links.self.href}
        data={event}
        editEvent={(eventEdit) => this.props.editEvent(eventEdit)}
      ></EventCard>
    ));
  }
}

export default MyEvents;
