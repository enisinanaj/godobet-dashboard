import React from "react";

const SignUp = React.lazy(() =>
  import("./Dashboard/Authentication/SignUp/SignUp")
);
const Signin = React.lazy(() =>
  import("./Dashboard/Authentication/SignIn/SignIn")
);
const FrogotPassword = React.lazy(() =>
  import("./Dashboard/Authentication/FrogotPassword/FrogotPassword")
);

const Verify = React.lazy(() =>
  import("./Dashboard/Authentication/Verify/Verify")
);

const route = [
  { path: "/auth/signup", exact: true, name: "Signup", component: SignUp },
  { path: "/auth/signin", exact: true, name: "Signin", component: Signin },
  { path: "/auth/verify", exact: true, name: "Verify", component: Verify },
  {
    path: "/auth/forgot-password",
    exact: true,
    name: "Forgot Password",
    component: FrogotPassword,
  },
];

export default route;
