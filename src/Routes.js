import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* loader component for Suspense*/
import PageLoader from "./template_components/Common/PageLoader";

import Base from "./template_components/Layout/Base";
import BaseTipster from "./template_components/Layout/BaseTipster";
import BasePage from "./template_components/Layout/BasePage";
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = (Tag) => (props) => <Tag {...props} />;

const Login = lazy(() => import("./views/auth/Login"));
const Register = lazy(() => import("./views/auth/Register"));
const Recover = lazy(() => import("./views/auth/Recover"));
const NotFound = lazy(() => import("./template_components/Pages/NotFound"));
const Error500 = lazy(() => import("./template_components/Pages/Error500"));
const Maintenance = lazy(() =>
  import("./template_components/Pages/Maintenance")
);
const Profile = lazy(() => import("./views/profile/Profile"));
const Pool = lazy(() => import("./views/pools/Pool"));
const MyPools = lazy(() => import("./views/pools/MyPools"));
const MyServices = lazy(() => import("./views/services/MyServices"));
const ServiceDetails = lazy(() => import("./views/services/ServiceDetails"));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
  "/register",
  "/login",
  "/recover",
  "/lock",
  "/notfound",
  "/error500",
  "/maintenance",
];

const Routes = ({ location, app }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  // Animations supported
  //      'rag-fadeIn'
  //      'rag-fadeInRight'
  //      'rag-fadeInLeft'

  const animationName = "rag-fadeIn";

  if (!app.loggedIn && listofPages.indexOf(location.pathname) === -1) {
    return <Redirect to={"/login"} />;
  }

  if (!app.loggedIn) {
    return (
      // Page Layout component wrapper
      <BasePage>
        <Suspense fallback={<PageLoader />}>
          <Switch location={location}>
            <Route path="/login" component={waitFor(Login)} />
            <Route path="/register" component={waitFor(Register)} />
            <Route path="/recover" component={waitFor(Recover)} />
            <Route path="/notfound" component={waitFor(NotFound)} />
            <Route path="/error500" component={waitFor(Error500)} />
            <Route path="/maintenance" component={waitFor(Maintenance)} />
          </Switch>
        </Suspense>
      </BasePage>
    );
  } else {
    return (
      // Layout component wrapper
      // Use <BaseHorizontal> to change layout
      <BaseTipster>
        <TransitionGroup>
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames={animationName}
            exit={false}
          >
            <div>
              <Suspense fallback={<PageLoader />}>
                <Switch location={location}>
                  <Route path="/profile" component={waitFor(Profile)} />
                  <Route path="/pool" component={waitFor(Pool)} />
                  <Route path="/myPools" component={waitFor(MyPools)} />
                  <Route path="/myServices" component={waitFor(MyServices)} />
                  <Route
                    path="/serviceDetails"
                    component={waitFor(ServiceDetails)}
                  />
                </Switch>
              </Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </BaseTipster>
    );
  }
};

export default withRouter(Routes);
