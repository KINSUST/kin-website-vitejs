import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Count from "../../../components/count/Count";
import { useDispatch, useSelector } from "react-redux";
import {
  passwordReset,
  passwordResetCodeSend,
} from "../../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";

const PasswordChange = () => {
  // count
  const { count, time, setTime } = Count(0);

  // dispatch
  const dispatch = useDispatch();

  // message or error show
  const { message, error } = useSelector(getAuthData);

  // search params
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  //input
  const [inputs, setInputs] = useState({
    password: "",
    con_password: "",
  });

  // code
  const [showCodeSection, setShowCodeSection] = useState(false);
  //handle change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle submit
  const handleSubmit = async () => {
    // input field
    const { password, con_password } = inputs;
    if (!password || !con_password) {
      return toast.error("All field are required!");
    }
    if (password.length < 6) {
      return toast.error("Password must be 6 characters");
    }
    if (password !== con_password) {
      return toast.error("Password not match");
    }

    dispatch(passwordResetCodeSend({ email: searchParams.get("email") }));
    setShowCodeSection(true);
    setTime(285);
  };

  // password show hide
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // handle resend code
  const handleResend = async () => {
    dispatch(passwordResetCodeSend({ email: searchParams.get("email") }));
    setTime(285);
  };

  // code
  const [code, setCode] = useState("");

  // handle update
  const handleUpdate = async () => {
    dispatch(
      passwordReset({
        email: searchParams.get("email"),
        password: inputs.password,
        code,
      })
    );
  };

  useEffect(() => {
    dispatch(setMessageEmpty());
    if (message) {
      toast.success(message);
      if (message === "Successfully password updated.") {
        navigate("/login");
      }
    }
    if (error) {
      toast.error(error);
    }
  }, [message, error]);

  return (
    <>
      <Helmet>
        <title>Password Change </title>
        <meta name="description" content="Password Change in kin ." />
        <meta property="og:type" content={"type"} />
        <meta property="og:title" content={"title"} />
        <meta property="og:description" content={"description"} />
        <meta name="twitter:creator" content={"name"} />
        <meta name="twitter:card" content={"type"} />
        <meta name="twitter:title" content={"title"} />
        <meta name="twitter:description" content={"description"} />
      </Helmet>
      <section className="  bg-white py-16 dark:bg-[#151f32]  dark:text-[#cacfd5]">
        <div className=" ">
          <div className="content-body     p-4 border-zinc-700">
            <div className=" max-w-[460px] mx-auto  h-fit  rounded-md dark:bg-[#182c49] bg-[#eceff1]">
              <div className="content-header border-b p-4 dark:border-zinc-700 border-zinc-300">
                <h1 className="text-[#3c4046] dark:text-[#cdd6e2] font-bold text-xl text-center">
                  Password Change
                </h1>
              </div>
              <div className="content-body  text-[#3c4046]  p-4 border-zinc-700 dark:text-[#cdd6e2]">
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    value={inputs.password}
                    placeholder="Enter new password"
                    className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                    onChange={handleChange}
                  />
                  <span
                    className="absolute top-3 right-4  cursor-pointer"
                    onClick={() => {
                      show ? setShow(false) : setShow(true);
                    }}
                  >
                    {inputs.password &&
                      (show ? <IoMdEye /> : <BsFillEyeSlashFill />)}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={show2 ? "text" : "password"}
                    placeholder="Confirm password"
                    value={inputs.con_password}
                    name="con_password"
                    className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                    onChange={handleChange}
                  />
                  <span
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => {
                      show2 ? setShow2(false) : setShow2(true);
                    }}
                  >
                    {inputs.con_password &&
                      (show2 ? <IoMdEye /> : <BsFillEyeSlashFill />)}
                  </span>
                </div>
              </div>

              {!showCodeSection && (
                <div className="content-footer p-4 text-right flex">
                  <button
                    className="w-full z-10 text-[#ffffff] font-bold bg-[#9a7ff0] hover:bg-[#7161eb]  focus:outline-none focus:ring-0  rounded-lg text-sm mb-2  px-5 py-2.5 text-center"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </div>

            {/* code section */}
            {showCodeSection && (
              <div className=" max-w-[460px] mx-auto  h-fit  rounded-md dark:bg-[#22174b] bg-[#eceff1] mt-2">
                <div className="content-body  text-[#3c4046]  p-4 border-zinc-700 dark:text-[#cdd6e2]">
                  <div className="relative ">
                    <p className="text-center">
                      A verification code sent to your email.
                    </p>
                    <p className="pt-2 flex justify-center">
                      {time ? (
                        <span>Code Expired in : &nbsp; {count}</span>
                      ) : (
                        <>
                          <span className="text-red-500">Expired!</span> &nbsp;
                          &nbsp; &nbsp; &nbsp;
                          {!time && (
                            <span
                              className="flex items-center py-1 px-2 text-white cursor-pointer rounded-sm bg-blue-600 text-sm"
                              onClick={handleResend}
                            >
                              resend code
                            </span>
                          )}
                        </>
                      )}
                    </p>
                    <input
                      type="text"
                      placeholder="Security code"
                      name="code"
                      className={`mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8]  rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-5 focus:outline-none  text-3xl text-center ${
                        code && "tracking-[60px]"
                      }`}
                      max="4"
                      maxLength={"4"}
                      onChange={(e) => {
                        setCode(e.target.value);
                      }}
                      value={code}
                    />
                  </div>
                </div>

                <div className="content-footer p-4 text-right flex">
                  <button
                    className="w-full z-10 text-[#ffffff] font-bold bg-[#9a7ff0] hover:bg-[#7161eb]  focus:outline-none focus:ring-0  rounded-lg text-sm   px-5 py-2.5 text-center"
                    onClick={handleUpdate}
                    disabled={code.length !== 4 ? true : false}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordChange;
