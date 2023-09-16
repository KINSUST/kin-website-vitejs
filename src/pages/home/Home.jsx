import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import Sponsor from "./Sponsor/Sponsor";
import Wings from "./Wings/Wings";
import Achieved from "./AchievedIn2022/Achieved";
import Achievements from "./Achievements/Achievements";
import Volunteer from "./Volunteer/Volunteer";
import TouchWithUs from "./TouchWithUs/TouchWithUs";
import Slider from "./Slider/Slider";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allSliders } from "../../features/slider/sliderApiSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allSliders());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Home</title>

        <meta name="title" content="KIN A Voluntary Organization" />
        <meta
          name="description"
          content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
        />
        <meta property="og:url" content="https://react.kinsust.org/" />
        <meta property="twitter:url" content="https://react.kinsust.org/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
        />
        <meta
          property="og:description"
          content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives. "
        />
        <meta
          property="twitter:image"
          content="https://react.kinsust.org/logo.png"
        />
        <meta
          property="og:image"
          content="https://react.kinsust.org/logo.png"
        />
        <meta name="twitter:creator" content={"name"} />
        <meta name="twitter:card" content={"type"} />
        <meta name="twitter:title" content={"title"} />
        <meta name="twitter:description" content={"description"} />
      </Helmet>
      <div className="">
        <Slider />
        <AboutUs />
        <Sponsor />
        <Wings />
        <Achieved />

        <Achievements />
        <Volunteer />
        <TouchWithUs />
      </div>
    </>
  );
};

export default Home;
