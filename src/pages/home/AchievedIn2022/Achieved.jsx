import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";

const Achieved = () => {
  return (
    <section className="bg-[#fff] border-b   border dark:bg-[#151f32cd]  dark:text-[#cacfd5] md:text-[20px] text-[18px] dark:border-[#1d143d] text-black  ">
      <div className="   lg:py-16 py-8 md:py-12 mx-auto   xl:w-[1200px] ">
        <div className="py-5 lg:px-7 md:px-24 px-4">
          <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
            <h2 className=" font-serif dark:text-[#fff] lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
              What We Have{" "}
              <span className="text-[#f41e1e] dark:text-[#fc535a]">
                Achieved
              </span>
            </h2>
          </AnimationOnScroll>
        </div>

        <div className="w-full flex lg:px-7 md:px-24 px-4">
          <div className="w-1/2">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className="text-[#0c0d0ebd] text-2xl md:text-3xl font-bold dark:text-white my-2 lg:pb-7  md:pb-8 pb-8">
                During the Sylhet flood of 2022
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#24272abd] dark:text-[#b6bfcb]      ">
                  ৳&nbsp;
                  <CountUp
                    isCounting
                    start={0}
                    end={880530}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={() => {
                      return false;
                    }}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />{" "}
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3] ">
                  Donation Managed
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                  <CountUp
                    isCounting
                    start={0}
                    end={1600}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                  <span>+</span>
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Food packages
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                  <CountUp
                    isCounting
                    start={0}
                    end={200}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                  <span>+</span>
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Sanitary
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                  <CountUp
                    isCounting
                    start={0}
                    end={21}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Villages reached
                </p>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal pb-5 "></div>
          <div className="w-1/2">
            <div className=" py-6 lg:py-0 ">
              <p className="text-[#0c0d0ebd] text-2xl md:text-3xl font-bold dark:text-white my-2 lg:pb-7  md:pb-8 pb-8 ">
                Throughout the COVID-19 pandemic
              </p>
            </div>
            <div className="grid lg:grid-cols-2  grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                  ৳&nbsp;
                  <CountUp
                    isCounting
                    start={0}
                    end={360593}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Donation Managed
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]    ">
                  <CountUp
                    isCounting
                    start={0}
                    end={727}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                  <span>+</span>
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Food Packages
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                  ৳&nbsp;
                  <CountUp
                    isCounting
                    start={0}
                    end={3256}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                  <span>+</span>
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  Clothes
                </p>
              </div>

              <div className="pb-12">
                <h1 className="flex justify-start text-center lg:text-2xl md:text-2xl  text-[19px] font-bold py-2 items-center text-[#292f33bd] dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                   
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    className="dark:fill-[#fff]"
                    viewBox="0 0 488.85 488.85"
                   
                  >
                    <g>
                      <path
                        d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                       
                        
                      ></path>
                    </g>
                  </svg>
                  &nbsp;
                  <CountUp
                    isCounting
                    start={0}
                    end={3256}
                    duration={3.2}
                    thousandsSeparator=","
                    enableScrollSpy={true}
                    easing="easeInCubic"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 3 };
                    }}
                  />
                  <span className=" lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     px-1">
                    K+
                  </span>
                </h1>
                <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                  FB live
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achieved;
