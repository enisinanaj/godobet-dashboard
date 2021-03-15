import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import windowSize from "react-window-size";

import NavContent from "./NavContent";
import OutsideClick from "./OutsideClick";
import Aux from "./../../../../hoc/_Aux";
import * as actionTypes from "./../../../../store/actions";
import navigation from "../../../../menu-items";

class Navigation extends Component {
  // resize = () => {
  //   const contentWidth = document.getElementById("root").clientWidth;

  //   if (this.props.layout === "horizontal" && contentWidth < 992) {
  //     this.props.onChangeLayout("vertical");
  //   }
  // };

  // componentDidMount() {
  //   this.resize();
  //   window.addEventListener("resize", this.resize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.resize);
  // }

  scroll = () => {
    if (this.props.navFixedLayout && this.props.headerFixedLayout === false) {
      const el = document.querySelector(".pcoded-navbar.menupos-fixed");
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 60) {
        el.style.position = "fixed";
        el.style.transition = "none";
        el.style.marginTop = "0";
      } else {
        el.style.position = "absolute";
        el.style.marginTop = "60px";
      }
    } else {
      document.querySelector(".pcoded-navbar").removeAttribute("style");
    }
  };

  render() {
    let navClass = ["pcoded-navbar"];

    navClass = [...navClass, this.props.layoutType];

    if (this.props.layout === "horizontal") {
      navClass = [...navClass, "theme-horizontal"];
    } else {
      if (this.props.navFixedLayout) {
        navClass = [...navClass, "menupos-fixed"];
      }

      if (this.props.navFixedLayout && !this.props.headerFixedLayout) {
        window.addEventListener("scroll", this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        window.removeEventListener("scroll", this.scroll, false);
      }
    }

    if (this.props.windowWidth < 992 && this.props.collapseMenu) {
      navClass = [...navClass, "mob-open"];
    } else if (this.props.collapseMenu) {
      navClass = [...navClass, "navbar-collapsed"];
    }

    if (this.props.layoutType === "dark") {
      document.body.classList.add("able-pro-dark");
    } else {
      document.body.classList.remove("able-pro-dark");
    }

    if (this.props.rtlLayout) {
      document.body.classList.add("able-pro-rtl");
    } else {
      document.body.classList.remove("able-pro-rtl");
    }

    if (this.props.boxLayout) {
      document.body.classList.add("container");
      document.body.classList.add("box-layout");
    } else {
      document.body.classList.remove("container");
      document.body.classList.remove("box-layout");
    }

    let navBarClass = ["navbar-wrapper"];
    if (
      this.props.layout === "horizontal" &&
      this.props.subLayout === "horizontal-2"
    ) {
      navBarClass = [...navBarClass, "container"];
    }

    let navContent = (
      <div className={navBarClass.join(" ")}>
        <NavContent navigation={navigation.items} />
      </div>
    );
    if (this.props.windowWidth < 992) {
      navContent = (
        <OutsideClick>
          <div className="navbar-wrapper">
            <NavContent navigation={navigation.items} />
          </div>
        </OutsideClick>
      );
    }

    return (
      <Aux>
        <nav className={navClass.join(" ")}>{navContent}</nav>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    subLayout: state.subLayout,
    collapseMenu: state.collapseMenu,
    layoutType: state.layoutType,
    rtlLayout: state.rtlLayout,
    navFixedLayout: state.navFixedLayout,
    headerFixedLayout: state.headerFixedLayout,
    boxLayout: state.boxLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
    onChangeLayout: (layout) =>
      dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
