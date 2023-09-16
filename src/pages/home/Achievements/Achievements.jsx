import { AnimationOnScroll } from "react-animation-on-scroll";
import joyBanglaAwardPhoto from "../../../Assets/Images/Home/joyBanglaAward.jpg";
import joyBanglaAwardPhoto2 from "../../../Assets/Images/Home/second.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import blurImage from "../../../assets/blur-image.webp";
const Achievements = () => {
  return (
    <section className="dark:border-[#211d36] text-black  border  dark:bg-[#151f32]  dark:text-[#cacfd5]  md:text-[20px] text-[18px] bg-[#f8fafc60] border-b ">
      <div className=" lg:py-16 py-8 md:py-12 mx-auto  xl:w-[1200px] text-justify px-4">
        <div className=" m-auto">
          <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
            <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0">
              Our{" "}
              <span className="font-serif text-[#f41e1e] dark:text-[#fc535a]">
                Achievements
              </span>
            </h1>
          </AnimationOnScroll>

          <p className="  md:pt-6 pt-4      text-justify ">
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            was awarded the{" "}
            <span className="font-bold">Joy Bangla Youth Award</span> by{" "}
            <span className="font-bold">Young Bangla </span>
            for being one of the 50 best organizations among the other 1300
            organizations. Additionally,{" "}
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            has been honored by{" "}
            <span className="font-bold">SANDHANI (SOMC)</span> for 9 times for
            being the best{" "}
            <span className="font-semibold">
              Non-Medical Blood Donation Organization
            </span>
            .
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 gap-5 my-6 justify-items-center px-4">
            <PhotoProvider>
              <PhotoView src={joyBanglaAwardPhoto}>
                <LazyLoadImage
                  alt="joy bangla award kinsust kin school"
                  src={joyBanglaAwardPhoto}
                  className=" cursor-pointer h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a]"
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>

            <PhotoProvider>
              <PhotoView src={joyBanglaAwardPhoto2}>
                <LazyLoadImage
                  alt="kinsust kin school award  "
                  src={joyBanglaAwardPhoto2}
                  className=" cursor-pointer  h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a6f]"
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
