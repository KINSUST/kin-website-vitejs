import React from "react";
import PageLayout from "../components/layout/PageLayout";

const FindAccount = React.lazy(() => import("../pages/auth/login/FindAccount"));
const PasswordChange = React.lazy(() =>
  import("../pages/auth/passwordChange/PasswordChange")
);
const AccountVerify = React.lazy(() =>
  import("../pages/auth/register/AccountVerify")
);
const Register = React.lazy(() => import("../pages/auth/register/Register"));
import ScrollToTop from "../helper/ScrollToTop";
import PublicGuard from "./Guard/PublicGuard";

import { ScaleLoader } from "react-spinners";

const Login = React.lazy(() => import("../pages/auth/login/Login"));

// create public router
const publicRouter = [
  {
    element: (
      <ScrollToTop>
        <PageLayout />
      </ScrollToTop>
    ),
    children: [
      {
        element: <PublicGuard />,
        children: [
          {
            path: "/login",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <Login />
              </React.Suspense>
            ),
          },
          {
            path: "/register",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <Register />
              </React.Suspense>
            ),
          },
          {
            path: "/verify",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <AccountVerify />
              </React.Suspense>
            ),
          },
          {
            path: "/find-account",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <FindAccount />
              </React.Suspense>
            ),
          },
          {
            path: "/password-reset",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <PasswordChange />
              </React.Suspense>
            ),
          },
        ],
      },
    ],
  },
];

// export public router
export default publicRouter;
