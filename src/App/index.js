import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route.auth";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
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

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <BrowserRouter>
                            <Switch>
                                {menu}
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


const mapStateToProps = (state) => ({ user: state.user, loggedIn: state.loggedIn });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
