import React from 'react';

const SignUp1 = React.lazy(() => import('./Dashboard/Authentication/SignUp/SignUp'));
const Signin1 = React.lazy(() => import('./Dashboard/Authentication/SignIn/SignIn'));
const ChangePassword = React.lazy(() => import('./Dashboard/Authentication/ChangePassword'));
const ProfileSettings = React.lazy(() => import('./Dashboard/Authentication/ProfileSettings'));
const TabsAuth = React.lazy(() => import('./Dashboard/Authentication/TabsAuth'));
const Error = React.lazy(() => import('./Dashboard/Maintenance/Error'));
const OfflineUI = React.lazy(() => import('./Dashboard/Maintenance/OfflineUI'));
const ComingSoon = React.lazy(() => import('./Dashboard/Maintenance/ComingSoon'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup', component: SignUp1 },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/change-password', exact: true, name: 'Change Password', component: ChangePassword },
    { path: '/auth/profile-settings', exact: true, name: 'Profile Settings', component: ProfileSettings },
    { path: '/auth/tabs-auth', exact: true, name: 'Tabs Authentication', component: TabsAuth },
    { path: '/maintenance/error', exact: true, name: 'Error', component: Error },
    { path: '/maintenance/coming-soon', exact: true, name: 'Coming Soon', component: ComingSoon },
    { path: '/maintenance/offline-ui', exact: true, name: 'Offline UI', component: OfflineUI },
];

export default route;