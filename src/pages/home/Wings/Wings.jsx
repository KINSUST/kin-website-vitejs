import { useNavigate } from "react-router-dom";
import { Blood, Charity, Cloth, Consult, Educated } from "./Icons";

const Wings = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:py-16 py-8  md:py-12 bg-[#f1f5f994] border-b  dark:bg-[#151f32]  dark:text-[#cacfd5] md:text-[20px] text-[18px]  dark:border-[#4c46712d]">
      {/* grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:justify-items-center
      place-content-center */}
      <div className="xl:w-[1200px] text-black  px-5 flex-wrap lg:flex-nowrap justify-center  flex   lg:gap-6 gap-6 mx-auto     dark:text-white  ">
        <div
          onClick={() => {
            navigate("/social-awareness");
          }}
          className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
        >
          <div className="px-5 lg:py-6 py-5 dark:text-white">
            <Consult />
            <h2 className="text-center relative  mx-auto   text-3xl  font-semibold    pb-2 dark:text-[#e2e6ed] ">
              WE CONSULT
            </h2>
            <div>
              <p className=" dark:text-[#c9d8f8]   py-3  text-justify ">
                We raise awareness among people to make them aware of their
                rights and stop violent activities that happen towards women.
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/charity-aid");
          }}
          className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
        >
          <div className="px-5 lg:py-6 py-5 dark:text-white">
            <Educated />
            <h1 className="text-center text-3xl  font-semibold   pb-2 dark:text-[rgb(226,230,237)]">
              WE SERVE
            </h1>
            <div>
              <p className="  dark:text-[#c9d8f8] py-3  text-justify  ">
                We arrange charity programs for people in need to provide
                monetary support .
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/blood-donation");
          }}
          className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
        >
          <div className="px-5 lg:py-6 py-5 dark:text-white">
            <Blood />
            <h1 className=" text-center text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
              WE FIND
            </h1>
            <div>
              <p className="  dark:text-[#c9d8f8] py-3  text-justify  ">
                We find and provide blood for patients in need, and aim to
                motivate people to donate blood.
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/kin-school");
          }}
          className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
        >
          <div className="px-5 lg:py-6 py-5 dark:text-white ">
            <h1 className="text-center text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
              <Charity />
              WE EDUCATE
            </h1>
            <div>
              <p className=" dark:text-[#c9d8f8] py-3  text-justify  ">
                We educate children living around the{" "}
                <span className="font-semibold">SUST</span> area, with a view to
                pass on the light of education to every corner of society.
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/winter-cloth-distribution");
          }}
          className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
        >
          <div className="px-5 lg:py-6 py-5 dark:text-white">
            <Cloth />
            <h1 className=" text-center  text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
              WE PROVIDE CARE
            </h1>
            <div>
              <p className=" dark:text-[#c9d8f8] py-3  text-justify  ">
                We provide winter clothes for cold-stricken poor families living
                in the remote corners of the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wings;
