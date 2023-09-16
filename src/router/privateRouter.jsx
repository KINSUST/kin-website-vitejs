// create private router

import React from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollToTop from "../helper/ScrollToTop";

import PrivateGuard from "./Guard/PrivateGuard";
import { ScaleLoader } from "react-spinners";

const Profile = React.lazy(() => import("../pages/profile/Profile"));
const EditProfile = React.lazy(() =>
  import("../pages/profile/editProfile/EditProfile")
);

const privateRouter = [
  {
    element: (
      <ScrollToTop>
        <PageLayout />
      </ScrollToTop>
    ),
    children: [
      {
        element: <PrivateGuard />,
        children: [
          {
            path: "/profile",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <Profile />
              </React.Suspense>
            ),
          },
          {
            path: "/profile/edit",
            element: (
              <React.Suspense
                fallback={
                  <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                    <ScaleLoader color="#36d7b7" />
                  </div>
                }
              >
                <EditProfile />
              </React.Suspense>
            ),
          },
        ],
      },
    ],
  },
];

// export private router
export default privateRouter;
