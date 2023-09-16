import { Link } from "react-router-dom";
import photo from "../../../assets/images/home/getwithus.jpg";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { AnimationOnScroll } from "react-animation-on-scroll";

import { useDispatch, useSelector } from "react-redux";
import { addSubscriber } from "../../../features/subscriber/subscriberApiSlice";
import { setMessageEmpty } from "../../../features/subscriber/subscriberSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import blurImage from "../../../assets/blur-image.webp";

const TouchWithUs = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.subscriber);
  const modalId = useRef(null);
  const [subscriber, setScriber] = useState("");
  const [subscribeErr, setSubscribeErr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subscriber) {
      setSubscribeErr(true);
      toast.error("Email is required!");
      return false;
    }
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(subscriber);
    if (!emailTest) {
      setSubscribeErr(true);
      toast.error("Invalid Email Address");
      return false;
    }

    dispatch(addSubscriber({ email: subscriber }));
  };
  useEffect(() => {
    if (message) {
      setScriber("");
      toast.success(message);
      modalId.current.click();
    }
    // error && toast.error(error) && setSubscribeErr(true);
    dispatch(setMessageEmpty());
  }, [error, message]);
  return (
    <section className=" dark:border-[#0d1620]  dark:bg-[#151f32]  dark:text-[#cacfd5] bg-[#f8fafc] border-b  py-16 md:text-[20px] text-[18px]  text-black  ">
      <div className=" xl:w-[1200px]   mx-auto   lg:py-16 py-8 md:py-12   text-justify px-4">
        <PhotoProvider>
          <PhotoView src={photo}>
            <LazyLoadImage
           
              src={photo}
              alt="kinsust kin school activities"
              className="cursor-pointer mx-auto  rounded-md border-8  border-[#ffffff] dark:border-[#7d7b846f]"
              effect="blur"
              width={"100%"}
              height={"100%"}
              placeholderSrc={blurImage}
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="md:w-[650px]   mx-auto px-4">
        <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
          <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0 ">
            Get In{" "}
            <span className="text-[#f41e1e] dark:text-[#fc535a] font-serif">
              Touch With
            </span>{" "}
            Us
          </h1>
        </AnimationOnScroll>

        <p className="  md:pt-6 pt-4    text-justify">
          Stay up-to-date by subscribing to our{" "}
          <span className="font-semibold">newsletter</span>.{" "}
          <Link to={"/register"} className="text-[#f41e1e] font-semibold">
            {" "}
            Create an account{" "}
          </Link>
          to receive the latest updates on events, national and international
          days, and much more.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-fit">
        <div className="btn-group  m-auto md:w-[650px] w-full px-5 sm:px-16 md:my-6 my-2">
          <input
            type="text"
            name="email"
            className={`dark:text-white z-10 py-5 w-3/5 dark:bg-[#1c1e306c] dark:border-zinc-700   px-3 rounded-l-md border focus:outline-none bg-[#f7f5f5]   text-lg ${
              subscribeErr
                ? "text-red-500 border-red-500 dark:border-red-500"
                : "text-black border-sky-400"
            }`}
            value={subscriber}
            onChange={(e) => {
              setSubscribeErr(false);
              setScriber(e.target.value);
            }}
            placeholder="example@gmail.com"
          />
          <button
            className="bg-[#f41e1e] z-10 px-3 py-5 rounded-r-md  w-2/5 sm:text-2xl text-lg text-white"
            type="submit"
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
      {/* modal */}

      <div>
        <input
          type="checkbox"
          id="modalId"
          ref={modalId}
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="modal-box relative dark:text-white bg-white dark:bg-[#000000da]">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => {  modalId.current.click()}}
            >
              ✕
            </label>
            <h3 className="text-2xl   font-bold">Successfully subscribe.</h3>
            <p className="py-4 text-xl dark:text-[#cdd6e2]">
              For More Details. Please{" "}
              <Link
                className="font-bold text-[#fc535a] underline"
                to={"/register"}
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchWithUs;
