import { Helmet } from "react-helmet-async";
import bloodDonation from "../../../assets/images/wings/blood.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blurImage from '../../../assets/blur-image.webp'

const Blood = () => {


  return (
    <>
      <Helmet>
        <meta property="og:url" content={document.URL} />
        <meta property="og:image" content={bloodDonation} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content="KIN blood sector" />
        <meta
          property="og:description"
          content="Blood Sector is one of the five wings of KIN"
        />
        <title>Blood Donation</title>
      </Helmet>
      <section className=" dark:bg-[#151f32]  dark:text-[#cacfd5]  md:text-[20px] text-[18px] bg-[#fff] text-black  px-5 m-auto text-justify   py-5  ">
        <div className="xl:w-[1200px] mx-auto ">
          <div className="my-5">
            <p className="">
              The Blood Sector is one of the five wings of{" "}
              <span className=" text-red-600 font-['Arial']">KIN</span>. As the
              first word of the slogan of{" "}
              <span className=" text-red-600 font-['Arial']">KIN</span> says,{" "}
              <span className="font-bold">Respond. </span>
              The Blood Sector makes this slogan meaningful by working with
              jurisdictions to determine the clinical requirements for blood. We
              negotiate and manage contacts with donors, aiming to manage blood
              as soon as possible after receiving a call from the recipient. At
              that point, we contact various donors and attempt to help them
              comprehend the situation, persuading them to donate blood.
            </p>
          </div>
          <div className="w-full h-full">
            <PhotoProvider>
              <PhotoView src={bloodDonation}>
                <LazyLoadImage
                  alt="KIN Social Awareness"
                  src={bloodDonation}
                  className=" cursor-pointer mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f]"
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  placeholderSrc={blurImage}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="my-10">
            <p>
              Once someone agrees to donate blood, we then connect them with the
              recipient. We strive to promote safe, high-quality management and
              use of blood. We meet patient needs by ensuring a safe, secure,
              adequate, and affordable supply of blood. To improve the blood
              supply, we also organize programs such as{" "}
              <span className="font-semibold">Blood Donation Camp </span>
              and <span className="font-semibold">Blood Donor{"'"}s Hunt</span>,
              which help develop and facilitate strategies. Our goal is to
              enhance the sustainability and affordability of the blood supply.{" "}
              <span className=" text-red-600 font-['Arial']">KIN</span> has been
              recognized as the{" "}
              <span className="font-semibold">
                Highest Blood Donating Organization
              </span>{" "}
              for <span className="font-semibold">9 times</span> in the Sylhet
              Division by <span className="font-semibold">SANDHANI </span>
              <span className="font-semibold">(SOMC Unit)</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blood;
