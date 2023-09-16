import React from "react";
const Awareness = React.lazy(() =>
  import("../pages/wings/awareness/Awareness")
);
const School = React.lazy(() => import("../pages/wings/school/School"));
const Blood = React.lazy(() => import("../pages/wings/blood/Blood"));
const Charity = React.lazy(() => import("../pages/wings/charity/Charity"));
const Winter = React.lazy(() => import("../pages/wings/winter/Winter"));
const Advisors = React.lazy(() => import("../pages/about/advisors/Advisors"));
import Faq from "../pages/faq/Faq";
const History = React.lazy(() => import("../pages/history/History"));
const ExecutiveCommittee = React.lazy(() =>
  import("../pages/committee/ExecutiveCommittee")
);
import Error from "../pages/error/Error";
const Blog = React.lazy(() => import("../pages/blog/Blog"));
const Programs = React.lazy(() => import("../pages/programs/Programs"));
import ScrollToTop from "../helper/ScrollToTop";
import PageLayout from "../components/layout/PageLayout";
const SingleBlog = React.lazy(() =>
  import("../pages/blog/singleBlog/SingleBlog")
);

import OrgWeek from "../pages/orgWeek/OrgWeek";
import Form from "../pages/orgWeek/form/OrgForm";
import UpdateForm from "../pages/orgWeek/updateForm/UpdateForm";

import logo from "../../src/assets/images/logo/KIN Logo black-01.webp";
import { ScaleLoader } from "react-spinners";
const Home = React.lazy(() => import("../pages/home/Home"));
// create common router
const commonRouter = [
  {
    element: (
      <ScrollToTop>
        <PageLayout />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                {/* <HashLoader color="#36d7b7" size={150} /> */}
                <img
                  src={logo}
                  className="w-full md:w-[70%] h-fit"
                  alt="kin logo animation"
                />
              </div>
            }
          >
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/kin-school",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <School />
          </React.Suspense>
        ),
      },
      {
        path: "/social-awareness",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Awareness />
          </React.Suspense>
        ),
      },
      {
        path: "/blood-donation",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Blood />
          </React.Suspense>
        ),
      },
      {
        path: "/charity-aid",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Charity />
          </React.Suspense>
        ),
      },
      {
        path: "/winter-cloth-distribution",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Winter />
          </React.Suspense>
        ),
      },
      {
        path: "/advisors",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Advisors />
          </React.Suspense>
        ),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/our-history",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <History />
          </React.Suspense>
        ),
      },
      {
        path: "/executive-committee",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <ExecutiveCommittee />
          </React.Suspense>
        ),
      },
      {
        path: "/post",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Blog />
          </React.Suspense>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <SingleBlog />
          </React.Suspense>
        ),
        // loader: ({ params }) => fetch(`${ApiURL}/api/v1/posts/${params.slug}`),
      },
      {
        path: "/programs",
        element: (
          <React.Suspense
            fallback={
              <div className="flex justify-center absolute top-0 left-0 right-0  items-center h-screen p-40 z-[1000] bg-white dark:bg-[#1a123a]">
                <ScaleLoader color="#36d7b7" />
              </div>
            }
          >
            <Programs />
          </React.Suspense>
        ),
      },
      {
        path: "/*",
        element: <Error />,
      },
      {
        path: "/organizing-week",
        element: <OrgWeek />,
      },
      {
        path: "/organizing-week-add",
        element: <Form />,
      },
      {
        path: "/organizing-week-update",
        element: <UpdateForm />,
      },
    ],
  },
];

// export common router
export default commonRouter;
