import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Signin = React.lazy(() => import('./Dashboard/Authentication/SignIn/SignIn'));
const Signup = React.lazy(() => import('./Dashboard/Authentication/SignUp/SignUp'));

const routes = [
    { path: '/signin', exact: true, name: 'Sign in', component: Signin },
    { path: '/signup', exact: true, name: 'Sign up', component: Signup },
];

export default routes;