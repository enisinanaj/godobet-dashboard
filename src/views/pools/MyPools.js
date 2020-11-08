import React, { Component } from "react";
import PoolCard from "./PoolCard";

class MyPools extends Component {
  render() {
    return this.props.pools.map((pool) => (
      <PoolCard
        history={this.props.history}
        key={pool.id}
        poolData={pool}
        editPool={(poolEdit) => this.props.editPool(poolEdit)}
      ></PoolCard>
    ));
  }
}

export default MyPools;
