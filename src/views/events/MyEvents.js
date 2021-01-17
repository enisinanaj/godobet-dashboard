import React, { Component } from "react";
import EventCard from "./EventCard";

class MyEvents extends Component {
  render() {
    return this.props.events.map((event) => (
      <EventCard
        refreshPool={() => this.props.refreshPool()}
        key={event._links.self.href}
        data={event}
        edittable={this.props.edittable}
        editEvent={(eventEdit) => this.props.editEvent(eventEdit)}
      ></EventCard>
    ));
  }
}

export default MyEvents;
