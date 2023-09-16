import { Helmet } from "react-helmet-async";

const Error = () => {
    return (
    
        <>
          <Helmet>
            <title>Error Page</title>
            <meta name="description" content={"description"} />
            <meta property="og:type" content={"type"} />
            <meta property="og:title" content={"title"} />
            <meta property="og:description" content={"description"} />
            <meta name="twitter:creator" content={"name"} />
            <meta name="twitter:card" content={"type"} />
            <meta name="twitter:title" content={"title"} />
            <meta name="twitter:description" content={"description"} />
          </Helmet>
          <section className=" dark:bg-[#150d36]  bg-[#fff] text-center text-slate-800">
            <div className="lg:py-24 md:py-12 py-6">
              <h1 className="lg:text-8xl text-6xl  font-black md:py-10 py-6 text-[#fc535a]">
                404
              </h1>
              <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-slate-800 dark:text-[#edededb3] pb-24">
                No page Found!
              </p>
            </div>
          </section>
        </>
     
    );
};

export default Error;