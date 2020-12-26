import React, { Component } from "react";
import PoolCard from "./PoolCard";

class MyPools extends Component {
  render() {
    return (<div className="row">
      {this.props.pools.map((pool) => (
        <PoolCard
          history={this.props.history}
          key={pool.id}
          poolData={pool}
          editPool={(poolEdit) => this.props.editPool(poolEdit)}
        ></PoolCard>
      ))}
    </div>)
  }
}

export default MyPools;
