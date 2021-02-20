import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Users = React.lazy(() => import('./Dashboard/Profile/Users'));

const routes = [
    { path: '/users', exact: true, name: 'Profile', component: Users },
];

export default routes;