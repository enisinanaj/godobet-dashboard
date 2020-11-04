import React, { Component } from "react";
import PoolCard from "./PoolCard";

class MyPools extends Component {
  render() {
    return this.props.pools.map((pool) => (
      <PoolCard
        history={this.props.history}
        key={pool.id}
        id={pool.id}
        description={pool.description}
        totalQuote={pool.totalQuote}
        stake={pool.stake}
        profit={pool.profit}
        bookmaker={pool.bookmaker}
        totalEvents={pool.totalEvents}
        poolCreatedOn={pool.createdOn}
        poolUpdatedOn={pool.updatedOn}
        links={pool._links}
      ></PoolCard>
    ));
  }
}

export default MyPools;
