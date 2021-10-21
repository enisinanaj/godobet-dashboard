import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import windowSize from "react-window-size";

import Aux from "../../../../../../hoc/_Aux";
import NavIcon from "./../NavIcon";
import NavBadge from "./../NavBadge";
import * as actionTypes from "../../../../../../store/actions";
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    if (this.props.user.roleValue < this.props.item.role) {
      return null;
    }
    
    let itemTitle = this.props.item.title;
    if (this.props.item.icon) {
      itemTitle = <span className="pcoded-mtext">{this.props.item.title}</span>;
    }

    let itemTarget = "";
    if (this.props.item.target) {
      itemTarget = "_blank";
    }

    let subContent;
    if (this.props.item.external) {
      subContent = (
        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
          <NavIcon items={this.props.item} />
          {itemTitle}
          <NavBadge layout={this.props.layout} items={this.props.item} />
        </a>
      );
    } else if (!this.props.item.hidden) {
      subContent = (
        <Link to={this.props.item.url} className={"nav-link" +
        (this.props.location.pathname === this.props.item.url
          ? " active"
          : "")} exact={this.props.item.exact || true} target={itemTarget}>
          <NavIcon items={this.props.item} />
          {itemTitle}
          <NavBadge layout={this.props.layout} items={this.props.item} />
        </Link>
      );
    }
    let mainContent = "";
    if (this.props.layout === "horizontal") {
      mainContent = <li onClick={this.props.onItemLeave}>{subContent}</li>;
    } else {
      if (this.props.windowWidth < 992) {
        mainContent = (
          <li
            className={"nav-item " + this.props.item.classes}
            onClick={this.props.onItemClick}
          >
            {subContent}
          </li>
        );
      } else {
        mainContent = <li className={"nav-item " + this.props.item.classes}>{subContent}</li>;
      }
    }

    return <Aux>{mainContent}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    collapseMenu: state.collapseMenu,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
    onItemLeave: () => dispatch({ type: actionTypes.NAV_CONTENT_LEAVE }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(NavItem))
);
