import { Helmet } from "react-helmet-async";
import hand from "../../assets/images/logo/hand.webp";
import map from "../../assets/images/logo/map.png";
import Map from "./Map";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";

const History = () => {
  return (
    <>
      <Helmet>
        <meta property="og:url" content={document.URL} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content="KIN History" />
        <meta property="og:description" content="KIN History" />
        <title>Our History</title>
      </Helmet>
      <section
        className=" bg-[#fff]  m-auto pb-5  text-slate-800 
      
      
       dark:bg-[#151f32]  dark:text-[#cacfd5] "
      >
        <div className="">
          <div>
            
            <PhotoProvider>
              <PhotoView src={hand}>
                <LazyLoadImage
                  alt="KIN history "
                  height={hand.height}
                  src={hand}
                  className="w-screen cursor-pointer"
                  effect="blur"
                  width={hand.width}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="xl:w-[1200px]   m-auto mt-12 px-5 ">
            <div className="lg:text-[19px] text-[17px]   text-justify">
              <p className="py-3">
                With the resolution{" "}
                <span className="font-semibold">
                  {'"'}আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত
                  {'"'}
                </span>{" "}
                at heart,{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                commenced its relentless journey on January 30th, 2003. Since
                then,{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                has been wholeheartedly engaging in numerous social awareness
                and voluntary activities.{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                operates based on five pillars:{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                <span className="font-semibold">School</span>,
                <span className="font-semibold"> Blood Donation</span>,
                <span className="font-semibold">
                  {" "}
                  Warm Cloth Collection and Distribution
                </span>{" "}
                ,<span className="font-semibold"> Charity</span>, and
                <span className="font-semibold"> Social Awareness</span> . The
                encouragement and enthusiasm of a group of young dreamers from
                SUST are propelling{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                towards its ultimate goal.
              </p>

              <p className="py-3">
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                School remains steadfast in its vision of integrating
                impoverished and underprivileged children, who lack access to
                education, into the mainstream educational system, nurturing
                them into deserving and enlightened citizens of the country. In
                addition to education,{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>{" "}
                {"  "}
                School also focuses on developing their character and moral
                values.{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                School conducts its teaching activities every day from 4:00-5:00
                PM in 2nd Floor of the Central Auditorium, SUST.
              </p>

              <p className="py-3">
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                arranges blood for the gasping and ill ones by managing blood
                and arranging blood donation programs throughout the year.
                Moreover, in terms of distributing warm clothes among the
                helpless and forfeited, and arranging charity programs to help
                the poor and destitute,{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                is always ahead.{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                is also working relentlessly to raise public awareness. It
                arranges many programs on different important social and
                national days.{" "}
                <span className="font-['Arial'] text-red-600 dark:text-red-600">
                  KIN
                </span>
                {"  "}
                has been directly participating in voluntary activities for more
                than 20 years now. It further dreams of standing beside the
                helpless people and living among them for a thousand more years
                to come.
              </p>
            </div>

            {/* <div className="my-5">
                <div className="flex gap-8 justify-center">
                  <a
                    href="https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/"
                    target="_blank"
                    className="bg-[#0077b5] inline-block rounded-sm hover:scale-125"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="linkIcon fill-[white]   text-[#ffffffef] "
                    >
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                 
                  </a>
                  <a
                    href="https://www.youtube.com/@kinsust3885"
                    target={"_blank"}
                    rel="noreferrer"
                    className="hover:scale-125"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-[#f45212] inline-block"
                    >
                      <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                    </svg>
                  </a>
                  <a
                    href={"//www.facebook.com/KINSUST"}
                    rel="noreferrer"
                    target="_blank"
                    className="bg-[#1294f4] rounded-sm hover:scale-125"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="linkIcon fill-[white] inline-block"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </div>
              </div> */}
            <div className="place-items-center py-16 m-auto grid grid-cols-12">
              <span className="xl:col-span-2"></span>
              <figure className="col-span-5 xl:col-span-4">
                <img src={map} className="w-[100px] " alt="" />
              </figure>
              <p className="col-span-5 xl:col-span-4  lg:text-[21px] text-[19px] dark:text-white font-semibold ">
                Shahjalal University of Science & Technology, Sylhet-3114,
                Bangladesh
              </p>
              <span className=" xl:col-span-2"></span>
            </div>
            <div className="pb-5">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
