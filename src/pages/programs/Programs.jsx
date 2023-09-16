import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import "./Card.css";
import { Date, Location, Time } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import ApiURL from "../../components/apiURL/ApiURL";
import { getAllPrograms } from "../../features/programs/programsApiSlice";
import { HashLoader } from "react-spinners";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blurImage from "../../assets/blur-image.webp";
import { useEffect } from "react";

const Programs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);
  // programs data
  const { programs, pagination } = useSelector((state) => state.programs);
  // pagination
  const handlePagination = (value) => {
    const { currentPage, nextPage, previousPage } = pagination;
    let page = currentPage;

    switch (value) {
      case "next":
        page = nextPage;
        break;
      case "previous":
        page = previousPage;
        break;
      default:
        page = value;
        break;
    }
    dispatch(getAllPrograms({ page }));
  };
  if (programs.length > 0) {
    return (
      <>
        <Helmet>
          <title>Programs</title>
          <meta
            name="description"
            content="For more information login to KIN."
          />
          <meta property="og:url" content={document.URL} />
          <meta property="og:type" content={"type"} />
          <meta property="og:title" content="KIN Programs" />
          <meta property="og:description" content={"description"} />
          <meta name="twitter:creator" content={"name"} />
          <meta name="twitter:card" content={"type"} />
          <meta name="twitter:title" content={"title"} />
          <meta name="twitter:description" content={"description"} />
        </Helmet>
        <section className=" bg-[#f9fafc]  min-h-screen dark:bg-[#151f32]   pb-8">
          <div className="pt-10 pb-6 px-5 xl:w-[1200px]  lg:m-auto ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center  grid-cols-1 overflow-hidden">
              {programs?.map((program, index) => {
                const title = program?.title.replace(
                  "KIN",
                  '<font color="#dc2626" style=font-family:"Arial Black"> KIN </font>'
                );

                return (
                  <div
                    className="card card-compact border  border-[rgb(229,231,235)] dark:border-none  bg-[#fff]   rounded-md  dark:bg-[#192b48] max-w-[410px] sm:min-w-[340px] mx-auto  shadow-lg"
                    key={index}
                  >
                    <div className="box text-red-600"></div>
                    <figure className="rounded-t-md bg-white">
                      <PhotoProvider>
                        <PhotoView
                          src={`${ApiURL}/public/images/programs/${program?.program_photo}`}
                        >
                          <LazyLoadImage
                            alt="KIN Social Awareness"
                            src={`${ApiURL}/public/images/programs/${program?.program_photo}`}
                            className="cursor-pointer w-full img h-[220px] rounded-t-md border dark:border-none  transition-transform duration-700 delay-200 ease-in-out"
                            effect="blur"
                            width={"100%"}
                            height={"100%"}
                            placeholderSrc={blurImage}
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </figure>
                    <div className=" card-body  dark:text-[#cdd6e2] text-black">
                      <p
                        className="font-['Hind_Siliguri'] text-xl py-3 font-bold text-center pt-2 hover:text-[#fc535a]"
                        dangerouslySetInnerHTML={{ __html: title }}
                      ></p>

                      <p className="flex gap-4">
                        <span>
                          <Location />
                        </span>
                        <span className="font-['Hind_Siliguri']">
                          {program?.venue}
                        </span>
                      </p>
                      <p className="flex gap-4">
                        <span>
                          <Date />
                        </span>
                        <span className="font-['Hind_Siliguri']">
                          {program?.date}
                        </span>
                      </p>
                      <p className="flex gap-4">
                        <span>
                          <Time />
                        </span>
                        <span className="font-['Hind_Siliguri']">
                          {program?.time}
                        </span>
                      </p>
                      <div className="my-3">
                        <div className="card-actions justify-center w-full">
                          <Link
                            to={program?.fb_url.split(":")[1]}
                            target={"_blank"}
                            className="z-10 my-2  bg-transparent text-violet-600 border-violet-600  dark:text-white   border py-2 flex items-center w-full text-center justify-center gap-2 rounded-md px-3 "
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="14"
                              width="14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>{" "}
                            <span> LEARN MORE</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* pagination */}
          {programs.length > 0 ? (
            <div className="pt-4 mx-auto text-center">
              <div className="join  text-center ">
                <button
                  onClick={() => {
                    handlePagination("previous");
                  }}
                  className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 disabled:bg-violet-500 dark:disabled:bg-violet-500  disabled:text-white dark:hover:bg-violet-800 text-white hover:text-white border-none "
                  disabled={!pagination?.previousPage ? true : false}
                >
                  Previous
                </button>
                <div className="w-[2.8px] h-full "></div>

                {new Array(pagination?.totalPages)
                  .fill(null)
                  .map((_, index) => (
                    <span key={index} className="mr-[2px]">
                      <button
                        className={`join-item btn  dark:bg-violet-700 hover:dark:bg-violet-500 ${
                          pagination.currentPage === index + 1
                            ? "bg-violet-700 dark:bg-violet-800 dark:hover:bg-violet-800"
                            : "bg-violet-500 "
                        }  hover:bg-violet-700 dark:hover:bg-violet-800 text-white border-none  z-10  hover:text-white border-violet-300`}
                        onClick={() => {
                          handlePagination(index + 1);
                        }}
                        key={index}
                      >
                        {index + 1}
                      </button>
                      <div className="w-[2.8px] h-full " key={index + 3}></div>
                    </span>
                  ))}

                <button
                  className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 dark:disabled:bg-violet-500 disabled:bg-violet-500 disabled:text-white text-white dark:hover:bg-violet-800 hover:text-white border-none"
                  onClick={() => {
                    handlePagination("next");
                  }}
                  disabled={!pagination?.nextPage ? true : false}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-center px-4 text-black dark:text-white">
                No Data Found!
              </h1>
            </div>
          )}
        </section>
      </>
    );
  } else {
    return (
      <div className="h-screen absolute z-[100] bg-white top-0 w-full">
        <div className="flex absolute  text-center mx-auto  left-0 right-0 h-full justify-center items-center ">
          <HashLoader color="#36d7b7" size={150} />
          {/* <img src={animation} className="w-[70%]" alt="kin logo animation" /> */}
        </div>
      </div>
    );
  }
};

export default Programs;
