

import "./NewsTicker.css";

import { Link } from "react-router-dom";

const NewsTicker = () => {


  return (
    <section className="bg-[#f8fafc] dark:bg-[#1a123af7] dark:text-[#38bdf8] text-dark h-fit overflow-hidden ">
      <div className="max-w-screen-2xl mx-auto">
        {/* {news?.length > 0 && (
          <div className="ticker-wrap overflow-hidden">
            <div className="ticker">
              <div className="ticker__headline">
                <Link
                  to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                  {news[0]?.title}
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                  {news[0]?.title}
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                  {news[0]?.title}
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                  {news[0]?.title}
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                  {news[0]?.title}
                </Link>
              </div>
            </div>
          </div>
        )} */}
        <div className="ticker-wrap overflow-hidden shadow-sm text-black">
            <div className="ticker">
              <div className="ticker__headline text-black">
                <Link
                  // to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                 rejoyanislam joy joy jou
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  // to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                 rejoyanislam joy joy jou
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  // to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                 rejoyanislam joy joy jou
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  // to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                 rejoyanislam joy joy jou
                </Link>
              </div>
              <div className="ticker__headline">
                <Link
                  // to={news[0]?.fb_url.split(":")[1]}
                  target="_blank"
                  className="cursor-pointer hover:text-violet-600"
                >
                 rejoyanislam joy joy jou
                </Link>
              </div>
              </div>
              </div>
              
      </div>
      {/* <Ticker>
        {({ index }) => ( 
          <>
            <h1 style={{ paddingRight: "0.5em" }}>
              <Link
                to={news[0]?.fb_url.split(":")[1]}
                target="_blank"
                className="cursor-pointer hover:text-violet-600"
              >
                {news[0]?.title}
              </Link>
              ;
            </h1>
          </>
        )}
      </Ticker> */}
    </section>
  );
};

export default NewsTicker;

// <Link
//   to={news[0]?.fb_url.split(":")[1]}
//   target="_blank"
//   className="cursor-pointer hover:text-violet-600"
// >
//   {news[0]?.title}
// </Link>;
