import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* loader component for Suspense*/
import PageLoader from "./template_components/Common/PageLoader";
import BaseAdmin from "./template_components/Layout/BaseAdmin";
import BaseTipster from "./template_components/Layout/BaseTipster";
import BasePage from "./template_components/Layout/BasePage";
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = (Tag) => (props) => <Tag {...props} />;

const Login = lazy(() => import("./views/auth/Login"));
const Recover = lazy(() => import("./views/auth/Recover"));
const NotFound = lazy(() => import("./template_components/Pages/NotFound"));
const Error500 = lazy(() => import("./template_components/Pages/Error500"));
const Maintenance = lazy(() =>
  import("./template_components/Pages/Maintenance")
);
const Profile = lazy(() => import("./views/profile/Profile"));
const MyServices = lazy(() => import("./views/services/MyServices"));
const ServiceDetails = lazy(() => import("./views/services/ServiceDetails"));
const PoolDetails = lazy(() => import("./views/pools/PoolDetails"));
const MySubscribers = lazy(() => import("./views/services/MySubscribers"));
const AllPools = lazy(() => import("./views/pools/AllPools"));
const TipsterList = lazy(() => import("./views/admin/TipsterList"));
const TipsterDetails = lazy(() => import("./views/admin/TipsterDetails"));
const AllServices = lazy(() => import("./views/admin/AllServices"));

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

  if (
    (!app.loggedIn ||
      (app && app.user && (!app.user._links || !app.user.role))) &&
    listofPages.indexOf(location.pathname) === -1
  ) {
    return <Redirect to={"/login"} />;
  }

  if (
    !app.loggedIn ||
    (app && app.user && (!app.user._links || !app.user.role))
  ) {
    return (
      // Page Layout component wrapper
      <BasePage>
        <Suspense fallback={<PageLoader />}>
          <Switch location={location}>
            <Route path="/login" component={waitFor(Login)} />
            <Route path="/recover" component={waitFor(Recover)} />
            <Route path="/notfound" component={waitFor(NotFound)} />
            <Route path="/error500" component={waitFor(Error500)} />
            <Route path="/maintenance" component={waitFor(Maintenance)} />
          </Switch>
        </Suspense>
      </BasePage>
    );
  } else {
    if (
      app &&
      app.user &&
      app.user.role &&
      app.user.role._links.self.href.split("/")[4] >= 4
    ) {
      //ADMIN
      return (
        <BaseAdmin>
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
                    <Route path="/myServices" component={waitFor(MyServices)} />
                    <Route
                      path="/serviceDetails"
                      component={waitFor(ServiceDetails)}
                    />
                    <Route
                      path="/poolDetails"
                      component={waitFor(PoolDetails)}
                    />
                    <Route
                      path="/mySubscribers"
                      component={waitFor(MySubscribers)}
                    />
                    <Route path="/allPools" component={waitFor(AllPools)} />
                    <Route
                      path="/tipstersList"
                      component={waitFor(TipsterList)}
                    />
                    <Route
                      path="/tipsterDetails"
                      component={waitFor(TipsterDetails)}
                    />
                    <Route
                      path="/allServices"
                      component={waitFor(AllServices)}
                    />

                    <Redirect to="/profile" />
                  </Switch>
                </Suspense>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </BaseAdmin>
      );
    } else
      return (
        //TIPSTER
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
                    <Route path="/myServices" component={waitFor(MyServices)} />
                    <Route
                      path="/serviceDetails"
                      component={waitFor(ServiceDetails)}
                    />
                    <Route
                      path="/poolDetails"
                      component={waitFor(PoolDetails)}
                    />
                    <Route
                      path="/mySubscribers"
                      component={waitFor(MySubscribers)}
                    />
                    <Route path="/allPools" component={waitFor(AllPools)} />

                    <Redirect to="/profile" />
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
