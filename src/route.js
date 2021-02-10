import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const SignUp2 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp2'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Signin2 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn2'));
const ResetPassword1 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword1'));
const ResetPassword2 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword2'));
const ChangePassword = React.lazy(() => import('./Demo/Authentication/ChangePassword'));
const ProfileSettings = React.lazy(() => import('./Demo/Authentication/ProfileSettings'));
const TabsAuth = React.lazy(() => import('./Demo/Authentication/TabsAuth'));
const Error = React.lazy(() => import('./Demo/Maintenance/Error'));
const OfflineUI = React.lazy(() => import('./Demo/Maintenance/OfflineUI'));
const ComingSoon = React.lazy(() => import('./Demo/Maintenance/ComingSoon'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signup-2', exact: true, name: 'Signup 2', component: SignUp2 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/signin-2', exact: true, name: 'Signin 2', component: Signin2 },
    { path: '/auth/reset-password-1', exact: true, name: 'Reset Password 1', component: ResetPassword1 },
    { path: '/auth/reset-password-2', exact: true, name: 'Reset Password 2', component: ResetPassword2 },
    { path: '/auth/change-password', exact: true, name: 'Change Password', component: ChangePassword },
    { path: '/auth/profile-settings', exact: true, name: 'Profile Settings', component: ProfileSettings },
    { path: '/auth/tabs-auth', exact: true, name: 'Tabs Authentication', component: TabsAuth },
    { path: '/maintenance/error', exact: true, name: 'Error', component: Error },
    { path: '/maintenance/coming-soon', exact: true, name: 'Coming Soon', component: ComingSoon },
    { path: '/maintenance/offline-ui', exact: true, name: 'Offline UI', component: OfflineUI },
];

export default route;