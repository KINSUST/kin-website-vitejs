import { useEffect, useRef, useState } from "react";

import "./Form.scss";
import logo from "../../../assets/images/org/Picture1.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createOrgData } from "../../../features/organizationForm/orgFormApiSlice";
import { setMessageEmpty } from "../../../features/organizationForm/orgSlice";
import swal from "sweetalert";

const OrgForm = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.organization);

  // photo preview hook

  const [photoSrc, setPhotoSrc] = useState(null);
  // reset photo preview
  const resetPhotoPreview = () => {
    document.getElementById("photoUpload").classList.remove("hidden");
    setPhotoSrc(null);
  };

  const handlePhotoChange = (e) => {
    const imageFile = e.target.files[0];
    const url = URL.createObjectURL(imageFile);

    // image size
    const size = imageFile.size;
    if (size > 400000) {
      return swal("", "File size must not exceed 400 KB", "warning");
    }
    const img = document.createElement("img");

    img.src = url;

    img.onload = function () {
      if (img.width > 600) {
        console.log(34);
        return swal("", "Image width must not exceed 600px", "warning");
      }
      if (img.height > 600) {
        return swal("", "Image height must not exceed 600px", "warning");
      }
      if (!(imageFile.type.split("/")[0] === "image")) return;
      document.getElementById("photoUpload").classList.add("hidden");
      setPhotoSrc(url);
    };
  };

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
  const photoRef = useRef(null);

  const formRef = useRef(null);
  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);
    const { activity, dob,blood_group,session } = Object.fromEntries(formDate.entries());

    formDate.delete("activity");

    activity6.current.checked &&
      activity6Text.current.innerText &&
      setActivity([...activity, activity6Text.current.innerText]);
    formDate.append("activity", JSON.stringify(activity));
    formDate.append("address", addressRef.current.value);
    formDate.append("org_photo", photoRef.current.files[0]);

    if (!activity) return toast.error("Please select at least one activity");

    if (!dob) return toast.error("Please select your date of birth");
    if(!blood_group) return toast.error("Please select your blood group");
    if(!session) return toast.error("Please select your session");

    if (!swearRef.current.checked)
      return toast.error(
        "Please Check to promise button that you are giving true information"
      );

    dispatch(createOrgData(formDate));
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

  // others options show hide
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    message &&
      toast.success(message) &&
      formRef.current.reset() &&
      resetPhotoPreview();
    error && toast.error(error);
    dispatch(setMessageEmpty());
  }, [message, error, dispatch]);

  return (
    <div className="center-hv mx-auto py-10 dark:bg-[#151f32]    form-container px-4">
      <div className="container  md:w-[50rem]  rounded-md mx-auto dark:bg-[#182c49bc]">
        <div className="sec-1">
          <span className="text-[1.2rem]">
            <span className=" text-[#ec1e24]">R</span>espond
          </span>
          <span className="text-[1.2rem]">
            <span className="text-[#ec1e24]">R</span>efund
          </span>
          <span className="text-[1.2rem]">
            <span className="text-[#ec1e24] ">R</span>escue
          </span>
        </div>

        <div className="sec-2 md:flex-row flex-col">
          <div className="center-hv  ">
            <img
              src={logo}
              className="hidden md:flex"
              alt="kin_logo"
              width="100px"
            />
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
                    ref={photoRef}
                    accept=".jpg, .jpeg, .png, .heic"
                    className="h-[150px] w-[150px] cursor-pointer z-10 hidden"
                    name="user_photo"
                  />

                  <label
                    className="cursor-pointer w-[150px] h-[150px]  mx-auto"
                    htmlFor="upload"
                  >
                    <div
                      className="aspect-video w-[150px] h-[150px] grid place-items-center border border-dashed rounded-md border-zinc-400   mx-auto"
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
                        src={photoSrc}
                        alt=""
                        className="h-[150px]  border-none rounded-md "
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
          <form method="post" ref={formRef} onSubmit={handleFormSubmit}>
            <h3>Personal Information</h3>
            <div className="form-group ">
              <label htmlFor="name" className="">
                Name:
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="father_name">Father{"'"}s Name:</label>
              <input type="text" id="father_name" name="father_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="mother_name">Mother{"'"}s Name:</label>
              <input type="text" id="mother_name" name="mother_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="blood_group">Blood Group:</label>

              <select
                name="blood_group"
                className="w-full py-3 px-4  rounded-md text-center bg-[#edeaea85]"
                id=""
              >
                <option selected>--select--</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="institution">Institution:</label>
              <input type="text" id="institution" name="institution" required />
            </div>
            <div className="form-group">
              <label htmlFor="dept">Department:</label>
              <input type="text" id="dept" name="dept" required />
            </div>
            <div className="form-group">
              <label htmlFor="session">Session:</label>
              {/* <input type="text" id="session" name="session" required /> */}
              <select
                name="session"
                id=""
                className="w-full py-3 px-4  rounded-md text-center bg-[#edeaea85]"
              >
                
                {sessions.map((session, index) => (
                  <option key={index} value={session}>
                    {session}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="reg_no">Registration No:</label>
              <input type="text" id="reg_no" name="reg_no" required />
            </div>
            <div className="form-group">
              <label htmlFor="home_district">Home District:</label>
              <input
                type="text"
                id="home_district"
                name="home_district"
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
                required
                ref={addressRef}
              ></textarea>
            </div>
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="phone">Phone :</label>
              <div className="w-full flex items-center">
                <span className="p-[10px]">+880</span>
                <input type="text" id="phone" name="phone" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <h3>Interest in Activities of KIN</h3>
            <div className="activity ">
              <input
                type="checkbox"
                id="activity1"
                name="activity"
                value="Blood Donation"
                onChange={handleActivityChange}
                className="bg-red-600 fill-red-500 inline-block "
              />
              <label htmlFor="activity1">Blood Donation</label> <br />
              <input
                type="checkbox"
                id="activity2"
                name="activity"
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
                onChange={handleActivityChange}
                value="Help Winter Affected People"
              />
              <label htmlFor="activity3">Help Winter Affected People</label>{" "}
              <br />
              <input
                type="checkbox"
                id="activity4"
                name="activity"
                onChange={handleActivityChange}
                value="Arranging Charity Programs"
              />
              <label htmlFor="activity4">Arranging Charity Programs</label>{" "}
              <br />
              <input
                type="checkbox"
                id="activity5"
                name="activity"
                onChange={handleActivityChange}
                value="Social Awareness Activities"
              />
              <label htmlFor="activity5">Social Awareness Activities</label>{" "}
              <br />
              <div className="">
                <input
                  type="checkbox"
                  onClick={(e) => {
                  
                    setShowOther(e.target.checked);
                  }}
                  ref={activity6}
                  id="activity6"
                />
                <label htmlFor="activity6">Others</label>
                {showOther && (
                  <textarea
                    id="address"
                    name="address"
                    className="border border-[#eee] "
                    rows="4"
                    ref={activity6Text}
                    cols="50"
                  ></textarea>
                )}
              </div>
            </div>
            <div className="m-[50px_0px_0px]">
              <input type="checkbox" id="#" ref={swearRef} className="mr-4" />
              <label htmlFor="#" className="font-semibold">
                I am swearing all the given information about me is true and I
                shall be bound to all the decisions taken by{" "}
                <span className="font-['Arial_black'] text-[#ec1e24]">KIN</span>
              </label>{" "}
              <br />
            </div>
            <input
              type="submit"
              value="SUBMIT"
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
  );
};

export default OrgForm;
