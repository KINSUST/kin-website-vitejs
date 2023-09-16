import { toast } from "react-toastify";

import { useEffect, useRef, useState } from "react";
import usePhotoPreview from "../../../components/photoPreviewHook/PhotoPreviwHook";
import logo from "../../../assets/images/org/Picture1.png";
import "../form/Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { singleOrgData } from "../../../features/organizationForm/orgFormApiSlice";
import { setMessageEmpty } from "../../../features/organizationForm/orgSlice";
import ApiURL from "../../../components/apiURL/ApiURL";



const UpdateForm = () => {
  // photo preview hook
  const { photoSrc, resetPhotoPreview, handlePhotoChange } = usePhotoPreview();

  // activity
  const [activity, setActivity] = useState([]);

  // activity 6
  const activity6 = useRef(null);
  const activity6Text = useRef(null);

  // swear ref
  const swearRef = useRef(null);

  // address ref
  const addressRef = useRef(null);

  const handleActivityChange = (e) => {
    const { value } = e.target;
    if (activity.includes(value)) {
      const newActivity = activity.filter((item) => item !== value);
      setActivity(newActivity);
    } else {
      setActivity([...activity, value]);
    }
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);
    // const data =Object.fromEntries(formDate.entries())

    formDate.delete("activity");

    activity6.current.checked &&
      activity6Text.current.innerText &&
      setActivity([...activity, activity6Text.current.innerText]);
    formDate.append("activity", JSON.stringify(activity));
    formDate.append("address", addressRef.current.value);
    formDate.append("photo", photoSrc);

    if (!swearRef.current.checked)
      return toast.error(
        "Please Check to promise button that you are giving true information"
      );

    console.log(formDate);
  };

  // session
  const year = new Date().getFullYear() - 1;
  // 2022-2023
  const nSession = `${year}-${year + 1}`;
  const oSession = `${year - 1}-${year}`;
  const tSession = `${year - 2}-${year - 1}`;
  const thSession = `${year - 3}-${year - 2}`;
  const fSession = `${year - 4}-${year - 3}`;
  const fiSession = `${year - 5}-${year - 4}`;
  const others = `others`;

  // it loop
  const sessions = [
    nSession,
    oSession,
    tSession,
    thSession,
    fSession,
    fiSession,
    others,
  ];

  const dispatch = useDispatch();
  const { singleOrg,error,message } = useSelector((state) => state.organization);


  // form show hide
  const [showForm, setShowForm] = useState(false);

  // error show hide
  const [errorShow,setErrorShow]=useState(false)

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setMessageEmpty());
    const newForm = new FormData(e.target);
    const { search } = Object.fromEntries(newForm.entries());

    if (!search) return toast.error("Email is required!");

    dispatch(singleOrgData(search));
  };

  useEffect(()=>{
   if(message){
    setShowForm(true)
    setErrorShow(false)
   }
   if(error){
    setErrorShow(true)
    setShowForm(false)
   }

  },[error,message])



  return (
    <section className="dark:text-white  mx-auto py-10 dark:bg-[#151f32]     px-4">
      <div className="xl:w-[1200px] mx-auto">
        <div className="form-search ">
          <form action="" onSubmit={handleSearch}>
            <div className=" flex items-center gap-3">
              <label htmlFor="" className="text-lg">
                Email :
              </label>
              <input
                type="email"
                className="py-2 px-3 rounded-md dark:bg-[#1a2e4e62] bg-zinc-100 border border-[#989797] block md:min-w-[320px] w-[280px]"
                name="search"
                id="search"
                placeholder="example@gmail.com"
              />
            </div>
            <button className="bg-violet-600 text-white text-base py-2 px-3 mt-3 rounded-md">
              Search
            </button>
          </form>

          {errorShow && (
            <div className="search-result my-4 ">
              <p className="text-lg text-red-600">
                {" "}
                No Email data found. Please check your email address or contact
                with admin.{" "}
              </p>
              {/* <button className="text-sm bg-violet-600 py-2 px-3 rounded-md text-white ">
              {" "}
              Edit your Form Data{" "}
            </button> */}
            </div>
          )}
          {showForm && (
            <div className="form-container mt-4">
              <div className=" container mx-auto md:w-[50rem] dark:bg-[#182c49bc] rounded-md">
                <div className="sec-1">
                  <span>
                    <span className="R">R</span>espond
                  </span>
                  <span>
                    <span className="R">R</span>efund
                  </span>
                  <span>
                    <span className="R">R</span>escue
                  </span>
                </div>

                <div className="sec-2 md:flex-row flex-col">
                  <div className="center-hv">
                    <img src={logo} className="hidden md:flex" alt="kin_logo" width="100px" />
                  </div>

                  <div className="text-center">
                    <span className="text-[#ec1e24] dark:text-[#ec1e24]  font-['Arial_black'] md:text-[5rem] text-[2rem] font-bolder">
                      KIN
                    </span>{" "}
                    <br />
                    <span className="avo">A Voluntary Organization</span> <br />
                    <span className="sust">
                      Shahjalal University of Science and Technology, Sylhet
                    </span>
                  </div>

                  <div className="center-hv">
                    <div className="photo">
                      <div className="mx-auto bg-[#f9f9f9] rounded-md">
                        <div
                          className="w-full grid place-items-center h-full"
                          id="imageParent"
                        >
                          <input
                            onChange={handlePhotoChange}
                            type="file"
                            id="upload"
                            accept=".jpg, .jpeg, .png, .heic"
                            className="h-[150px] w-[150px] cursor-pointer z-10 hidden"
                            name="user_photo"
                          />

                          <label
                            className="cursor-pointer w-[150px] h-[150px]  mx-auto"
                            htmlFor="upload"
                          >
                            <div
                              className="aspect-video w-full grid place-items-center border border-dashed rounded-md border-zinc-400  h-full mx-auto"
                              id="photoUpload"
                            >
                              <div>
                                <span className="fill-[#927ef6]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="96"
                                    height="96"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 32 32"
                                  >
                                    <g>
                                      <g data-name="Layer 2">
                                        <path
                                          d="M16 17a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"
                                          fill="#000000"
                                          data-original="#000000"
                                        ></path>
                                        <path
                                          d="M16 31a15 15 0 0 1-11.59-5.49l-.52-.64.52-.63a15 15 0 0 1 23.18 0l.52.63-.52.64A15 15 0 0 1 16 31zm-9.49-6.12a13 13 0 0 0 19 0 13 13 0 0 0-19 0z"
                                          fill="#000000"
                                          data-original="#000000"
                                        ></path>
                                        <path
                                          d="M16 31a15 15 0 1 1 11.59-5.49A15 15 0 0 1 16 31zm0-28a13 13 0 1 0 13 13A13 13 0 0 0 16 3z"
                                          fill="#000000"
                                          data-original="#000000"
                                        ></path>
                                        <path
                                          d="M5.18 24.88S15.25 36.13 25.5 26l1.32-1.12S18.26 16 9.57 21.33z"
                                          fill="#000000"
                                          data-original="#000000"
                                        ></path>
                                        <circle
                                          cx="16"
                                          cy="11"
                                          r="5"
                                          fill="#000000"
                                          data-original="#000000"
                                        ></circle>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div id="photoShow" className="">
                              <img
                                src={singleOrg?.org_photo ? `${ApiURL}/public/images/orgs/${singleOrg?.org_photo}` : photoSrc}
                                alt=""
                                className=" border-none rounded-md w-full"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sec-3">
                  <span>Form No.: From DB</span> <br />
                  <span>Date: {new Date().toLocaleDateString()}</span>
                </div>

                <div className="sec-4 bg-transparent dark:text-white">
                  <form method="post" onSubmit={handleFormSubmit}>
                    <h3>Personal Information</h3>
                    <div className="form-group ">
                      <label htmlFor="name" className="">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        defaultValue={singleOrg?.name}
                        name="name"
                        
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="father_name">Father{"'"}s Name:</label>
                      <input
                        type="text"
                        id="father_name"
                        defaultValue={singleOrg?.father_name}
                        name="father_name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mother_name">Mother{"'"}s Name:</label>
                      <input
                        type="text"
                        id="mother_name"
                        defaultValue={singleOrg?.mother_name}
                        name="mother_name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth:</label>
                      <input
                        type="date"
                        id="dob"
                        defaultValue={singleOrg?.dob}
                        name="dob"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="blood_group">Blood Group:</label>

                      <select
                        name="blood_group"
                        className="w-full py-3 px-4  rounded-md text-center bg-[#edeaea85]"
                        defaultValue={singleOrg?.blood_group}
                        id=""
                      >
                        <option selected>--select--</option>
                        <option
                          value="A+"
                          selected={
                            singleOrg?.blood_group === "A+" ? true : false
                          }
                        >
                          {" "}
                          A+
                        </option>
                        <option
                          value="A-"
                          selected={
                            singleOrg?.blood_group === "A-" ? true : false
                          }
                        >
                          A-
                        </option>
                        <option
                          value="B+"
                          selected={
                            singleOrg?.blood_group === "B+" ? true : false
                          }
                        >
                          B+
                        </option>
                        <option
                          value="B-"
                          selected={
                            singleOrg?.blood_group === "B-" ? true : false
                          }
                        >
                          B-
                        </option>
                        <option
                          value="AB+"
                          selected={
                            singleOrg?.blood_group === "AB+" ? true : false
                          }
                        >
                          AB+
                        </option>
                        <option
                          value="AB-"
                          selected={
                            singleOrg?.blood_group === "AB-" ? true : false
                          }
                        >
                          AB-
                        </option>
                        <option
                          value="O+"
                          selected={
                            singleOrg?.blood_group === "O+" ? true : false
                          }
                        >
                          O+
                        </option>
                        <option
                          value="O-"
                          selected={
                            singleOrg?.blood_group === "O-" ? true : false
                          }
                        >
                          O-
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="institution">Institution:</label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        defaultValue={singleOrg?.institution}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dept">Department:</label>
                      <input
                        type="text"
                        id="dept"
                        defaultValue={singleOrg?.dept}
                        name="dept"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="session">Session:</label>
                      {/* <input type="text" id="session" name="session" required /> */}
                      <select
                        name="session"
                        id=""
                        defaultValue={singleOrg?.session}
                        className="w-full py-3 px-4  rounded-md text-center bg-[#edeaea85]"
                      >
                        {sessions.map((session, index) => (
                          <option
                            key={index}
                            selected={
                              singleOrg?.session === session ? true : false
                            }
                            value={session}
                          >
                            {session}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="reg_no">Registration No:</label>
                      <input
                        type="text"
                        id="reg_no"
                        defaultValue={singleOrg?.reg_no}
                        name="reg_no"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="home_district">Home District:</label>
                      <input
                        type="text"
                        id="home_district"
                        name="home_district"
                        defaultValue={singleOrg?.home_district}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <textarea
                        id="address"
                        name="address"
                        className="border border-[#eee]"
                        rows="4"
                        cols="50"
                        defaultValue={singleOrg?.address}
                        required
                        ref={addressRef}
                      ></textarea>
                    </div>
                    <h3>Contact Information</h3>
                    <div className="form-group">
                      <label htmlFor="phone">Phone :</label>
                      <div className="w-full flex items-center">
                        <span className="p-[10px]">+8801</span>
                        <input
                          type="text"
                          id="phone"
                          defaultValue={singleOrg?.phone}
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        defaultValue={singleOrg?.email}
                        name="email"
                        required
                      />
                    </div>
                    <h3>Interest in Activities of KIN</h3>
                    <div className="activity ">
                      <input
                        type="checkbox"
                        id="activity1"
                        name="activity"
                        value="Blood Donation"
                        checked={
                          singleOrg?.activity[0]?.includes("Blood Donation")
                            ? true
                            : false
                        }
                        onChange={handleActivityChange}
                        className="bg-red-600 fill-red-500 inline-block "
                      />
                      <label htmlFor="activity1">Blood Donation</label> <br />
                      <input
                        type="checkbox"
                        id="activity2"
                        name="activity"
                        checked={
                          singleOrg?.activity[0]?.includes(
                            "Educational Program for Underprivileged Children"
                          )
                            ? true
                            : false
                        }
                        onChange={handleActivityChange}
                        value="Educational Program for Underprivileged Children"
                      />
                      <label htmlFor="activity2">
                        Educational Program for Underprivileged Children
                      </label>{" "}
                      <br />
                      <input
                        type="checkbox"
                        id="activity3"
                        name="activity"
                        checked={
                          singleOrg?.activity[0]?.includes(
                            "Help Winter Affected People"
                          )
                            ? true
                            : false
                        }
                        onChange={handleActivityChange}
                        value="Help Winter Affected People"
                      />
                      <label htmlFor="activity3">
                        Help Winter Affected People
                      </label>{" "}
                      <br />
                      <input
                        type="checkbox"
                        id="activity4"
                        name="activity"
                        checked={
                          singleOrg?.activity[0]?.includes(
                            "Arranging Charity Programs"
                          )
                            ? true
                            : false
                        }
                        onChange={handleActivityChange}
                        value="Arranging Charity Programs"
                      />
                      <label htmlFor="activity4">
                        Arranging Charity Programs
                      </label>{" "}
                      <br />
                      <input
                        type="checkbox"
                        id="activity5"
                        name="activity"
                        checked={
                          singleOrg?.activity[0]?.includes(
                            "Social Awareness Activities"
                          )
                            ? true
                            : false
                        }
                        onChange={handleActivityChange}
                        value="Social Awareness Activities"
                      />
                      <label htmlFor="activity5">
                        Social Awareness Activities
                      </label>{" "}
                      <br />
                      <div className="">
                        <input type="checkbox" ref={activity6} />
                        <label htmlFor="activity6">Others</label>
                        <textarea
                          id="address"
                          name="address"
                          className="border border-[#eee] "
                          rows="4"
                          ref={activity6Text}
                          cols="50"
                        ></textarea>
                      </div>
                    </div>
                    <div className="m-[50px_0px_0px]">
                      <input
                        type="checkbox"
                        id="#"
                        checked={true}
                        ref={swearRef}
                        className="mr-4"
                      />
                      <label htmlFor="#">
                        I am swearing all the given information about me is true
                        and I shall be bound to all the decisions taken by{" "}
                        <span className="font-['Arial_black'] text-[#ec1e24]">
                          KIN
                        </span>
                      </label>{" "}
                      <br />
                    </div>
                    <input
                      type="submit"
                      value="UPDATE"
                      className="bg-violet-600 py-3 rounded-md text-white px-4 w-full text-[17px] my-2 "
                    />
                  </form>
                </div>

                <div className="sec-5">
                  <div className="text-center">
                    <span className="name">Madhuryo Chakma</span>
                    <hr />
                    <span>President</span>
                  </div>
                  <div className="text-center">
                    <span className="name">Syed Irfanul Huda</span>
                    <hr />
                    <span>General Secretary</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateForm;
