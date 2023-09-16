import { Helmet } from "react-helmet-async";
import social from "../../../assets/images/wings/social.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blurImage from "../../../assets/blur-image.webp";
const Awareness = () => {
  return (
    <>
      <Helmet>
        <meta property="og:url" content={document.URL} />
        <meta property="og:image" content={social} />
        <meta property="og:type" content="page" />
        <meta
          property="og:title"
          content="KIN started it’s own journey to spread awareness among people.
              Since then, keeping that goal in mind, KIN is constantly working
              to increase social awareness among the general people."
        />
        <meta
          property="og:description"
          content="KIN started it’s own journey to spread awareness among people.
              Since then, keeping that goal in mind, KIN is constantly working
              to increase social awareness among the general people."
        />
        <title>School</title>
      </Helmet>
      <section className=" bg-[#fff] text-black  md:text-[20px] text-[18px] px-5 m-auto text-justify   py-5   dark:bg-[#151f32]  dark:text-[#cacfd5] ">
        <div className="xl:w-[1200px] mx-auto ">
          <div className="my-5">
            <p>
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN{" "}
              </span>
              started its own journey to spread awareness among people. Since
              then, keeping that goal in mind,{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              is constantly working to increase social awareness among the
              general people.{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              organizes various awareness programs on{" "}
              <span className="">
                {" "}
                important national and international days, e.g. Children{"'"}s
                Day, Labour Day, Mental Health Day, Blood Donor Day, Environment
                Day, International Mother Language Day, Independence Day,
                Victory Day,
              </span>{" "}
              etc.{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              also protests against the various injustices that are happening
              around us.
            </p>
          </div>
          <div>
            <PhotoProvider>
              <PhotoView src={social}>
                <LazyLoadImage
                  alt="KIN Social Awareness"
                  
                  src={social}
                  className="cursor-pointer mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f]"
                  effect="blur"
                  
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="my-5">
            <p>
              For example,{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              protested against the sexual violence that occurred at TSC on the
              1st day of Baishakh in the year 1422 BS.{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              also protested against all sexual harassment incidents that took
              place before and after that, by organizing a human chain and a
              rally involving students of SUST in 2019.
            </p>
          </div>
          <div className="my-5">
            <p>
              In addition,{" "}
              <span className="dark:text-red-600 text-red-600 font-['Arial']">
                KIN
              </span>{" "}
              organized a protest program titled{" "}
              <span className="font-semibold">চলো আওয়াজ তুলি</span> in 2015,
              targeting eve-teasing, sexual harassment, and rapists. Similar
              protest programs were also held in 2014 and 2015, addressing
              various injustices happening around us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awareness;
