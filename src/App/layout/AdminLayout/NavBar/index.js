import React, { Component } from "react";
import { connect } from "react-redux";
import windowSize from "react-window-size";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";
import * as actionTypes from "../../../../store/actions";

import logoNegative from "../../../../assets/images/godobet_negative.png";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    rightToggle: false,
  };

  render() {
    let headerClass = [
      "navbar",
      "pcoded-header",
      "navbar-expand-lg",
      "header-blue",
    ];

    document.body.classList.remove("background-blue");
    document.body.classList.remove("background-red");
    document.body.classList.remove("background-purple");
    document.body.classList.remove("background-info");
    document.body.classList.remove("background-green");
    document.body.classList.remove("background-dark");

    document.body.classList.remove("background-grd-blue");
    document.body.classList.remove("background-grd-red");
    document.body.classList.remove("background-grd-purple");
    document.body.classList.remove("background-grd-info");
    document.body.classList.remove("background-grd-green");
    document.body.classList.remove("background-grd-dark");

    document.body.classList.remove("background-img-1");
    document.body.classList.remove("background-img-2");
    document.body.classList.remove("background-img-3");
    document.body.classList.remove("background-img-4");
    document.body.classList.remove("background-img-5");
    document.body.classList.remove("background-img-6");
    document.body.classList.add(this.props.headerBackColor);

    if (this.props.headerFixedLayout) {
      headerClass = [...headerClass, "headerpos-fixed"];
    }

    let toggleClass = ["mobile-menu"];
    if (this.props.collapseMenu) {
      toggleClass = [...toggleClass, "on"];
    }

    let mainLogo = logoNegative;

    let navHtml;
    if (!this.state.rightToggle && this.props.windowWidth < 992) {
      navHtml = "";
    } else {
      navHtml = (
        <div className="collapse navbar-collapse d-flex">
          <NavLeft />
          <NavRight rtlLayout={this.props.rtlLayout} />
        </div>
      );
    }

    let navBar = (
      <Aux>
        <div className="m-header">
          <a
            className={toggleClass.join(" ")}
            id="mobile-collapse1"
            href={DEMO.BLANK_LINK}
            onClick={this.props.onToggleNavigation}
          >
            <span />
          </a>
          <a href="/dashboard/default" className="b-brand">
            <img
              id="main-logo"
              src={mainLogo}
              alt=""
              className="logo"
              style={{ width: 140 }}
            />
          </a>
          <a
            className="mob-toggler"
            href={DEMO.BLANK_LINK}
            onClick={() =>
              this.setState((prevState) => {
                return { rightToggle: !prevState.rightToggle };
              })
            }
          >
            <i className="feather icon-more-vertical" />
          </a>
        </div>
        {navHtml}
      </Aux>
    );

    if (
      this.props.layout === "horizontal" &&
      this.props.subLayout === "horizontal-2"
    ) {
      navBar = <div className="container">{navBar}</div>;
    }

    return (
      <Aux>
        <header className={headerClass.join(" ")}>{navBar}</header>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rtlLayout: state.rtlLayout,
    headerBackColor: state.headerBackColor,
    headerFixedLayout: state.headerFixedLayout,
    collapseMenu: state.collapseMenu,
    layout: state.layout,
    subLayout: state.subLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(NavBar))
);
