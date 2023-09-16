import { AnimationOnScroll } from "react-animation-on-scroll";
import photo from "../../../assets/images/home/sponser.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
// import Bounce from "../../../Components/Animation/Bounce/Bounce";
import blurImage from "../../../assets/blur-image.webp";
const Sponsor = () => {
  return (
    <section className="bg-[#f1f5f994] border  dark:bg-[#151f32cf]  dark:text-[#cacfd5] dark:border-[#1d143d] md:text-[20px] text-[18px] text-black">
      <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
        <div className="relative hero-content flex-col-reverse lg:flex-row-reverse lg:gap-16">
          <div className="basis-5/12 ">
            <PhotoProvider>
              <PhotoView src={photo}>
                <LazyLoadImage
                  alt="our child kinsust kinschool"
                  src={photo}
                  style={{ borderRadius: "0px 100px 0px 100px" }}
                  className="border-8 cursor-pointer rounded-md border-[#ffffff] dark:border-[#32265a6f]"
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          {/* bounce */}
          <div className="hidden lg:block">{/* <Bounce /> */}</div>
          <div className=" basis-7/12 relative">
            <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
              <h1 className=" font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                Sponsor a{" "}
                <span className="text-[#f41e1e] dark:text-[#fc535a]">
                  Child
                </span>
              </h1>
            </AnimationOnScroll>

            <p className=" sm:px-4  md:pt-6 pt-4    text-justify">
              You can now sponsor a student of{" "}
              <span className="text-red-600 font-['Arial'] dark:text-red-600">
                KIN
              </span>{" "}
              <span className="font-semibold">School </span>
              through carrying their educational expenses, providing them
              clothes & other financial needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
