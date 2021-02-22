import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import AuthRoutes from "../route.auth";
import MaintenanceRoutes from "../route.maintenance";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import "../App/auth/firebase"

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {

    render() {
        const menu = AuthRoutes.map((route, index) => {
          return (route.component && !this.props.loggedIn) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        const maintenance = MaintenanceRoutes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
          });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <BrowserRouter>
                            <Switch>
                                {menu}
                                {maintenance}
                                <Route path="/">
                                    {!this.props.loggedIn ? <Redirect to="/auth/signin" /> : <AdminLayout />}
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}


const mapStateToProps = (state) => ({ user: state.user, loggedIn: state.loggedIn, registered: state.registered });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
