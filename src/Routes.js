import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './template_components/Common/PageLoader';

import Base from './template_components/Layout/Base'; 
import BasePage from './template_components/Layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const Login = lazy(() => import('./views/auth/Login'));
const Register = lazy(() => import('./views/auth/Register'));
const Recover = lazy(() => import('./template_components/Pages/Recover'));
const Lock = lazy(() => import('./template_components/Pages/Lock'));
const NotFound = lazy(() => import('./template_components/Pages/NotFound'));
const Error500 = lazy(() => import('./template_components/Pages/Error500'));
const Maintenance = lazy(() => import('./template_components/Pages/Maintenance'));
const Profile = lazy(() => import('./views/profile/Profile'));
const Pool = lazy(() => import('./views/pools/Pool'));
const MyPools = lazy(() => import('./views/pools/MyPools'));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/register',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    if (!localStorage.getItem('token') && listofPages.indexOf(location.pathname) === -1) {
        return <Redirect to="/login"></Redirect>
    }

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Suspense fallback={<PageLoader/>}>
                    <Switch location={location}>
                        <Route path="/login" component={waitFor(Login)}/>
                        <Route path="/register" component={waitFor(Register)}/>
                        <Route path="/recover" component={waitFor(Recover)}/>
                        <Route path="/lock" component={waitFor(Lock)}/>
                        <Route path="/notfound" component={waitFor(NotFound)}/>
                        <Route path="/error500" component={waitFor(Error500)}/>
                        <Route path="/maintenance" component={waitFor(Maintenance)}/>
                    </Switch>
                </Suspense>
            </BasePage>
        )
    } else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Suspense fallback={<PageLoader/>}>
                            <Switch location={location}>
                                <Route path="/profile" component={waitFor(Profile)}/>
                                <Route path="/pool" component={waitFor(Pool)}/>
                                <Route path="/myPools" component={waitFor(MyPools)}/>
                            </Switch>
                        </Suspense>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);