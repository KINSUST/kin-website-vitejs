import { Helmet } from "react-helmet-async";
import SingleAdvisor from "./SingleAdvisor";
import { useDispatch, useSelector } from "react-redux";
import ApiURL from "../../../components/apiURL/ApiURL";
import { useEffect } from "react";
import { getAllAdvisors } from "../../../features/advisors/advisorApiSlice";
import { ScaleLoader } from "react-spinners";

const Advisors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdvisors());
  }, [dispatch]);

  const { advisors } = useSelector((state) => state.advisors);
  if (advisors.length > 0) {
    return (
      <>
        <Helmet>
          <meta property="og:url" content={document.URL} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="KIN Advisors" />
          <meta property="og:description" content="KIN Advisors" />
          <title>Advisors</title>
        </Helmet>
        <section
          className="bg-[#fff]  py-5   text-black  bg-no-repeat   dark:bg-[#151f32]  dark:text-[#cacfd5]  h-full px-4"
          // style={{ backgroundImage: `url(${background2})` }}
        >
          <div className="pt-5 pb-7  rounded-md mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4">
            <h1 className="font-serif dark:text-[#fc535a] xl:text-6xl md:text-5xl text-3xl text-center font-bold py-2">
              Our Honourable Advisors{" "}
            </h1>
            <p className="dark:text-white text-center xl:text-3xl text-xl sm:text-2xl">
              <span className="text-red-600 font-['Arial'] dark:text-red-600">
                KIN
              </span>{" "}
              is working with the guidance of a group of Honourable teachers of
              SUST
            </p>
          </div>
          <div className="">
            <div className="my-5   rounded-md py-5  border-black xl:w-[1150px] lg:px-12 md:px-28 px-4   gap-8 flex-wrap justify-center  flex  mx-auto">
              {advisors?.map((advisor, index) => (
                <div key={index}>
                  <SingleAdvisor
                    name={advisor?.name}
                    photo={`${ApiURL}/public/images/advisors/${advisor?.advisor_photo}`}
                    designation={advisor?.designation}
                    email={`mailto:${advisor?.email}`}
                    phone={`tel:${advisor?.cell}`}
                    link={`//${advisor?.website?.split("//")[1]}`}
                  ></SingleAdvisor>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div className="h-screen absolute z-[100] bg-white top-0 w-full">
        <div className="flex absolute  text-center mx-auto  left-0 right-0 h-full justify-center items-center ">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
    );
  }
};

export default Advisors;
