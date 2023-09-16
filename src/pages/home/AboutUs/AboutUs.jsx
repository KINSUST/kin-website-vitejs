import { AnimationOnScroll } from "react-animation-on-scroll";
import photo from "../../../assets/images/home/about.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";

import blurImage from "../../../assets/blur-image.webp";
const AboutUs = () => {
  return (
    <section className="  bg-[#f1f5f994] border  dark:bg-[#151f32]  dark:text-[#cacfd5] dark:border-[#1d143d] md:text-[20px] text-[18px] text-black">
      <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 m-0 px-4 lg:gap-24 ">
          <div className="  basis-5/12 ">
            <PhotoProvider>
              <PhotoView src={photo}>
                <LazyLoadImage
                  alt="21 february kin sust"
                  src={photo}
                  className=" cursor-pointer rounded-lg shadow-2xl border-8  border-[#ffffff] dark:border-[#32265a6f]"
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="   basis-7/12 relative p-0 m-0">
            {/* bounce */}
            <div className="hidden lg:block">{/* <Bounce /> */}</div>

            <AnimationOnScroll
              animateIn="animate__flipInX"
              initiallyVisible={true}
              duration={2}
            >
              <h1 className="font-serif  dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                <span className="dark:text-white">About</span>{" "}
                <span className="text-[#f41e1e] dark:text-[#fc535a]">Us</span>
              </h1>
            </AnimationOnScroll>

            {/* <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <h1 className="font-serif  dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                <span className="">About</span>{" "}
                <span className="text-[#f41e1e] dark:text-[#fc535a]">us</span>
              </h1>
            </ScrollAnimation> */}
            <p className="    md:pt-6 pt-4   text-justify ">
              The word {'"'}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {'"'} stands for {'"Relative"'}.{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN{" "}
              </span>{" "}
              was founded in the year 2003 with the help of some young dreamers
              from <span className="font-semibold">SUST</span>.
            </p>
            <p className=" md:pt-6 pt-4   text-justify">
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              was founded with a view to helping the destitute people living
              around the university area with the basic necessities of human
              life.{" "}
              <span className=" text-red-600 font-['Arial'] dark:text-red-600">
                KIN
              </span>{" "}
              helps them as a relative helps us in our time of emergency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
