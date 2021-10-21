import React, { Component, Suspense } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import Loadable from "react-loadable";

import "../../node_modules/font-awesome/scss/font-awesome.scss";

import Loader from "./layout/Loader";
import Aux from "../hoc/_Aux";
import ScrollToTop from "./layout/ScrollToTop";
import AuthRoutes from "../route.auth";
import MaintenanceRoutes from "../route.maintenance";
import AdminRoutes from "../routes.admin";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../App/auth/firebase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_live_00k3jSbq2rs4KbY3FeKH72gv00hEDAP1JJ");

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader,
});

class App extends Component {
  render() {
    const menu = AuthRoutes.map((route, index) => {
      return route.component && !this.props.loggedIn ? (
        <Route
          key={index + "-" + Math.floor(Math.random() * Math.floor(999))}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    const maintenance = MaintenanceRoutes.map((route, index) => {
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

    return (
      <Aux>
        <Elements stripe={stripePromise}>
          <ScrollToTop>
            <Suspense fallback={<Loader />}>
              {/* <BrowserRouter> */}
              <Route path={AuthRoutes.map(el => el.path).concat(MaintenanceRoutes.map(el => el.path)).concat(AdminRoutes.map(el => el.path))}>
                <Switch>
                  {menu}
                  {maintenance}
                  <Route path="/">
                    {!this.props.loggedIn ? (
                      <Redirect to="/auth/signin" />
                    ) : (
                      <AdminLayout />
                    )}
                  </Route>
                </Switch>
              </Route>
              {/* </BrowserRouter> */}
            </Suspense>
          </ScrollToTop>
        </Elements>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
  registered: state.registered,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
