import React from 'react';
import $ from 'jquery';
import Settings from './Dashboard/Profile/Settings';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const Marketplace = React.lazy(() => import('./Dashboard/Marketplace/Marketplace'));

const PendingTips = React.lazy(() => import('./Dashboard/PendingTips/PendingTips'));
const Balance = React.lazy(() => import('./Dashboard/Balance/Balance'));
const AllServices = React.lazy(() => import('./Dashboard/AllServices/AllServices'));
const SubscriberServices = React.lazy(() => import('./Dashboard/SubscriberServices/SubscriberServices'));
const SubscriberPools = React.lazy(() => import('./Dashboard/SubscriberPools/SubscriberPools'));

const Profile = React.lazy(() => import('./Dashboard/Profile/Profile'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Analytics', component: DashboardDefault, role: 4 },
    { path: '/dashboard/marketplace', exact: true, name: 'Marketplace', component: Marketplace, role: 4 },
    
    { path: '/dashboard/pending-tips', exact: true, name: 'Pending Tips', component: PendingTips, role: 4 },
    { path: '/dashboard/balance', exact: true, name: 'Balance', component: Balance, role: 4 },
    { path: '/dashboard/all-services', exact: true, name: 'Services', component: AllServices, role: 4 },
    { path: '/dashboard/subscriber-services', exact: true, name: 'My Services', component: SubscriberServices, role: 4 },
    { path: '/dashboard/subscriber-pools', exact: true, name: 'My Tips', component: SubscriberPools, role: 4 },

    { path: '/settings', exact: true, name: 'Settings', component: Settings },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;