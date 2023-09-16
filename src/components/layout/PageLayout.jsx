import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/Footer/Footer";

const PageLayout = () => {
  return (
    <main>
      <Header />
      {/* <div
        className="bg-[url(/new.png)] bg-contain bg-no-repeat  bg-transparent h-screen w-full fixed -z-1 top-0 left-0"
      
      ></div> */}
      <Outlet />
      <Footer />
    </main>
  );
};

export default PageLayout;
