import React, { Component } from "react";
import PoolCard from "./PoolCard";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";

class MyPools extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.pools.map((pool) => (
      <PoolCard
        key={1}
        id={pool.id}
        description={pool.description}
        totalQuote={pool.totalQuote}
        stake={pool.stake}
        profit={pool.profit}
        bookmaker={pool.bookmaker}
        totalEvents={pool.totalEvents}
        poolCreatedOn={pool.createdOn}
        poolUpdatedOn={pool.updatedOn}
        hrefPool={"pool._links.self.href"}
      ></PoolCard>
    ));
  }
}

export default MyPools;
