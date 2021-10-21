import React, { Component, Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
// import windowSize from "react-window-size";c

import Navigation from "./Navigation";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import Loader from "../Loader";
import Routes from "../../../routes";
import AdminRoutes from "../../../routes.admin";
import DemoRoutes from "../../../routes.original";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import AbsoluteButton from "../../components/AbsoluteButton";
import Footer from "../Footer/Footer";
import TokenManager from "../../auth/TokenManager";
import { bindActionCreators } from "redux";
import * as actions from '../../../store/actions';

class AdminLayout extends Component {

  state = {
    loaded: false
  }

  fullScreenExitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      this.props.onFullScreenExit();
    }
  };

  UNSAFE_componentWillMount() {
    if (
      this.props.windowWidth > 992 &&
      this.props.windowWidth <= 1024 &&
      this.props.layout !== "horizontal"
    ) {
      this.props.onUNSAFE_componentWillMount();
    }
  }

  componentDidMount() {
    this.reloadUser()
  }

  reloadUser = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(this.props.user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((localUser) => {
            this.props.actions.userLogin({
              ...this.props.user,
              ...localUser,
            });
            this.setState({loaded: true})
          });
      });
  };

  mobileOutClickHandler() {
    if (this.props.windowWidth < 992 && this.props.collapseMenu) {
      this.props.onUNSAFE_componentWillMount();
    }
  }

  render() {
    /* full screen exit call */
    document.addEventListener("fullscreenchange", this.fullScreenExitHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener(
      "mozfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener("MSFullscreenChange", this.fullScreenExitHandler);

    const menu = Routes.map((route, index) => {
      const guard = this.props.user.roleValue >= route.role;
      return route.component && guard ? (
        <Route
          key={index + "-" + Math.floor(Math.random() * Math.floor(999))}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    const admin = AdminRoutes.map((route, index) => {
      const guard = this.props.user.roleValue >= route.role;
      return route.component && guard ? (
        <Route
          key={index + "-" + Math.floor(Math.random() * Math.floor(999))}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    const demo = DemoRoutes.map((route, index) => {
      return route.component ? (
        <Route
          key={index + "-" + Math.floor(Math.random() * Math.floor(999))}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    let mainClass = ["pcoded-wrapper"];
    if (
      this.props.layout === "horizontal" &&
      this.props.subLayout === "horizontal-2"
    ) {
      mainClass = [...mainClass, "container"];
    }

    return (
      <Aux>
        <Fullscreen enabled={this.props.isFullScreen}>
          <Navigation />
          <NavBar />
          {this.props.user._embedded && this.props.user._embedded.services && this.props.user._embedded.services.length > 0 ? <AbsoluteButton /> : null}
          <div
            className="pcoded-main-container"
            onClick={() => this.mobileOutClickHandler}
          >
            <div className={mainClass.join(" ")}>
              <div className="pcoded-content" style={{ paddingBottom: "80px" }}>
                {" "}
                {/* padding bottom 80px for mobile */}
                <div className="pcoded-inner-content">
                  <Breadcrumb />
                  <div className="main-body">
                    <div className="page-wrapper">
                      {!this.state.loaded && <Loader />}
                      {this.state.loaded && <Suspense fallback={<Loader />}>
                        {/* <BrowserRouter> */}
                          <Switch>
                            {menu}
                            {admin}
                            {demo}
                            <Redirect from="/" to={this.props.defaultPath} />
                          </Switch>
                        {/* </BrowserRouter> */}
                      </Suspense>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Fullscreen>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    defaultPath: state.defaultPath,
    isFullScreen: state.isFullScreen,
    collapseMenu: state.collapseMenu,
    layout: state.layout,
    subLayout: state.subLayout,
    user: state.user,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
    onUNSAFE_componentWillMount: () =>
      dispatch({ type: actionTypes.COLLAPSE_MENU }),
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminLayout)
);
