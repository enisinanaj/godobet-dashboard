import React, { Component } from "react";
import { connect } from "react-redux";
import PoolCard from "./PoolCard";

class MyPools extends Component {

  isAuthor(pool) {
    let authorCode = pool._embedded ? pool._embedded.service.author.userCode : pool.author.userCode;
    let result = this.props.user._links.self.href.endsWith(authorCode);
    console.warn(result);
  }

  render() {
    return (<div className="row">
      {this.props.pools.map((pool) => (
        <PoolCard
          history={this.props.history}
          key={pool.id}
          poolData={pool}
          edittable={this.props.user.roleValue >= 5 && this.isAuthor(pool)}
          editPool={(poolEdit) => this.props.editPool(poolEdit)}
        ></PoolCard>
      ))}
    </div>)
  }
}

const mapStateToProps = state => ({user: state.app.user});
export default connect(mapStateToProps)(MyPools);
