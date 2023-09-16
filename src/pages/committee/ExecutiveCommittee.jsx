import SingleEC from "./SingleEC";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getAllEC, getSingleEC } from "../../features/ec/ecApiSlice";
import ApiURL from "../../components/apiURL/ApiURL";
import { useEffect, useState } from "react";
import {  ScaleLoader } from "react-spinners";

const ExecutiveCommittee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEC());
  }, [dispatch]);

  // ec data
  const { ecs, ec } = useSelector((state) => state.ecs);

  // committee number
  const [cNUmber, setCNumber] = useState(null);

  useEffect(() => {
    setCNumber(ecs[0]?.name?.split("th")[0]);
  }, [ecs]);

  // handle change
  const handleChange = (id) => {
    dispatch(getSingleEC(id));
    setCNumber(ecs.find((ec) => ec._id === id).name.split("th")[0]);
  };


  if (ecs.length > 0 && cNUmber) {
   return (
     <>
       <Helmet>
         <meta property="og:url" content={document.URL} />
         <meta property="og:type" content="page" />
         <meta property="og:title" content="KIN Executive Committee 18" />
         <meta property="og:description" content="KIN Executive Committee" />
         <title>Executive Committee</title>
       </Helmet>
       <section className="  dark:bg-[#151f32]  dark:text-[#cacfd5] bg-[#fff] md:text-[20px] text-18px  py-5 text-black   h-full">
         <div className="   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4">
           <div>
             <h1 className=" text-center md:mt-5 mt-3 mb-5 text-[#000000] dark:text-[#fc535a] xl:text-6xl lg:text-4xl  sm:text-3xl text-2xl font-bold">
               {cNUmber}th Executive Committee of KIN
             </h1>
             <div>
               <span className=" font-bold mr-4">Executive Committee :</span>
               <select
                 name="ec"
                 id=""
                 className="py-2 px-3  bg-violet-600 text-white  rounded-md"
                 onChange={(e) => {
                   handleChange(e.target.value);
                 }}
               >
                 {ecs?.map((ec, index) => (
                   <option
                     value={ec._id}
                     selected={ecs[0]._id === ec._id ? true : false}
                     key={index}
                   >
                     {ec?.name}
                   </option>
                 ))}
               </select>
             </div>
           </div>
           <div className=" grid  lg:grid-cols-3  mb-5 md:mt-16 mt-8 sm:grid-cols-2 mx-auto px-5 gap-10">
             {[...ec.members]
               ?.sort((a, b) => a.index - b.index)
               .map((member, index) => (
                 <div key={index}>
                   <SingleEC
                     photo={`${ApiURL}/public/images/users/${member?.user?.user_photo}`}
                     name={member?.user?.name}
                     designation={member?.designation}
                     department={member?.user?.identity?.sustian?.department}
                     session={member?.user?.identity?.sustian?.session}
                     email={member?.user?.email}
                     phone={member?.user?.mobile}
                     linkedIn={member?.user?.social_media?.linkedIn}
                     facebook={member?.user?.social_media?.fb}
                   ></SingleEC>
                 </div>
               ))}
           </div>
         </div>
       </section>
     </>
   );
  } else {
    return (
      <div className="h-screen absolute z-[100] bg-white top-0 w-full">
        <div className="flex absolute  text-center mx-auto  left-0 right-0 h-full justify-center items-center ">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
    );
  }
};

export default ExecutiveCommittee;
