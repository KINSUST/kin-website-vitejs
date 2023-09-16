import kinLogoLight from "../../../assets/images/logo/KIN Logo black-01.webp";
import kinLogoDark from "../../../assets/images/logo/KIN Logo white-01.webp";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import useDropDownPopupControl from "../../../hooks/dropDownPopupControl/useDropDownPopupControl";
import { useEffect, useRef, useState } from "react";
import { getAuthData, setMessageEmpty } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

const Header = () => {
  // theme change
  let theme = localStorage.getItem("theme") || "light";

  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("body").classList.add("dark");
    theme = "dark";
  }

  if (localStorage.getItem("theme") === "light") {
    document.querySelector("body").classList.remove("dark");
    theme = "light";
  }

  const handleChangeTheme = () => {
    if (theme === "light") {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "dark");
      theme = "dark";
    } else {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
      theme = "light";
    }
  };

  // user
  const { user, message } = useSelector(getAuthData);
  // dispatch
  const dispatch = useDispatch();

  // navigate
  // const navigate = useNavigate();

  // navbar close
  const { isOpen, toggleMenu, dropDownRef } = useDropDownPopupControl();

  // sticky mode
  const [direction, setDirection] = useState("relative");

  // const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    let oldScrollY = window.scrollY;
    const handleScroll = () => {
      oldScrollY > window.scrollY ? setDirection("sticky") : setDirection("");
      oldScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle logout
  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (message === "Successfully Logout.") {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
  }, [message, dispatch]);
  const dropDownMenuRef = useRef(null);

  // organizing week
  const [showOrg, setShowOrg] = useState(false);

  // loading
  const [progress, setProgress] = useState(0);

  // Create event listener for all link clicks
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setProgress(10);
    });
  });
  useEffect(() => {
    const onPageLoad = () => {
      setProgress(100);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    } 
  }, []);

  const location = useLocation();


  useEffect(() => {
    // execute on location change
   setProgress(100)
  }, [location]);

  return (
    <>
      <section
        className={` top-0  bg-[#f1f5f9f3] dark:bg-[#0f1829] shadow-md     border z-[100] dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${direction}`}
        style={{ zIndex: "100" }}
      >
        <div className="top-0 navbar  px-4 py-0 xl:w-[1200px] m-auto  sticky">
          <div
            className="navbar-start  w-fit grow lg:grow-0 "
            ref={dropDownRef}
          >
            <button
              className="p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden"
              onClick={() => {
                toggleMenu(!isOpen);
              }}
            >
              <HiMenuAlt1 className="text-[22px] " />
            </button>
            {/* vertical menu */}
            <div className="dropdown">
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden"
                  ref={dropDownMenuRef}
                  style={{ zIndex: "300" }}
                >
                  <li
                    className=""
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    <NavLink to={"/"} className="custom-style-menu-a">
                      Home
                    </NavLink>
                  </li>
                  <li className="text-[#334155]  active:bg-transparent   ">
                    <label
                      htmlFor="menu-toggle"
                      className="flex justify-between w-full cursor-pointer"
                    >
                      <span className=" w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]">
                        About Us
                        <MdKeyboardArrowDown className="text-xl" />
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      id="menu-toggle"
                      className="hidden"
                    />

                    <ul
                      className=" 
                      space-y-[2px] shadow-md mt-1 vertical-child-1 bg-white dark:bg-[#1f273476] z-50  rounded-md "
                    >
                      <li
                        className="rounded-[4px]"
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/our-history"}
                          className="  custom-style-menu-a"
                        >
                          Our History
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/executive-committee"}
                          className="  custom-style-menu-a"
                        >
                          Executive Committee
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/advisors"}
                          className="  custom-style-menu-a"
                        >
                          Advisors
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink to={"/faq"} className="  custom-style-menu-a">
                          FAQ
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className=" text-[#334155]  active:bg-transparent ">
                    <label
                      htmlFor="menu-toggle2"
                      className="flex justify-between w-full"
                    >
                      <span className="custom-style-menu-a flex justify-between py-[6px] px-[10px] cursor-pointer hover:text-white w-full h-full">
                        Wings
                        <MdKeyboardArrowDown className="text-xl" />
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      id="menu-toggle2"
                      className="hidden"
                    />

                    <ul className=" space-y-[2px] shadow-md mt-1 vertical-child-2 bg-white z-30 dark:bg-[#1f273476]  rounded-md ">
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/kin-school"}
                          className="  custom-style-menu-a"
                        >
                          KIN School
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/blood-donation"}
                          className="  custom-style-menu-a"
                        >
                          Blood Donation
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/social-awareness"}
                          className="  custom-style-menu-a"
                        >
                          Social Awareness
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/charity-aid"}
                          className="  custom-style-menu-a"
                        >
                          Charity & Aid
                        </NavLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleMenu(!isOpen);
                        }}
                      >
                        <NavLink
                          to={"/winter-cloth-distribution"}
                          className="  custom-style-menu-a"
                        >
                          Winter Cloth Distribution
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    <NavLink to={"/post"} className="  custom-style-menu-a">
                      Blog
                    </NavLink>
                  </li>

                  <li
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    <NavLink to={"/programs"} className="  custom-style-menu-a">
                      Programs
                    </NavLink>
                  </li>

                  {showOrg && (
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <NavLink
                        to={"/organizing-week"}
                        className="  custom-style-menu-a"
                      >
                        Organizing Week
                      </NavLink>
                    </li>
                  )}

                  {user && (
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <NavLink
                        to={"/profile"}
                        className="  custom-style-menu-a"
                      >
                        Profile
                      </NavLink>
                    </li>
                  )}

                  {/* dashboard or profile */}

                  <li
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    {user ? (
                      <Link
                        className="  custom-style-menu-a"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </Link>
                    ) : (
                      <NavLink to={"/login"} className="  custom-style-menu-a">
                        Login
                      </NavLink>
                    )}
                  </li>
                </ul>
              )}
            </div>

            {/* logo */}
            <Link className=" h-full  md:mx-0 w-full" to={"/"}>
              <img
                src={kinLogoLight}
                alt=""
                className="h-16 dark:hidden block mx-auto w-auto"
              />
              <img
                src={kinLogoDark}
                alt=""
                className="h-16 dark:block hidden mx-auto w-auto"
              />
            </Link>
          </div>
          {/* horizontal */}
          <div className="navbar-center hidden lg:flex p-0 grow ">
            <ul className="menu menu-horizontal p-0 menu-compact space-x-2 mx-auto">
              <li>
                <NavLink to={"/"} className={"custom-style-menu-a"}>
                  Home
                </NavLink>
              </li>

              <li>
                <span className="custom-style-menu-a">
                  About Us
                  <MdKeyboardArrowDown className="text-xl" />
                </span>
                <ul
                  className="py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100 
                   bg-[#f1f5f9] text-[#000]  drop-child-1"
                  style={{ zIndex: "100" }}
                >
                  <li>
                    <NavLink
                      to={"/our-history"}
                      className="custom-style-menu-a"
                    >
                      Our History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/executive-committee"}
                      className="custom-style-menu-a"
                    >
                      Executive Committee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/advisors"}
                      className="custom-style-menu-a mb-[-1px]"
                    >
                      Advisors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/faq"}
                      className="custom-style-menu-a mb-[-1px]"
                    >
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="custom-style-menu-a">
                  Wings
                  <MdKeyboardArrowDown className="text-xl" />
                </span>
                <ul
                  className="py-0 m-0 shadow-md   dark:bg-[#0f0826]  
                   bg-[#f1f5f9] 
                     drop-child-2"
                  style={{ zIndex: "100" }}
                >
                  <li>
                    <NavLink to={"/kin-school"} className="custom-style-menu-a">
                      KIN School
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/blood-donation"}
                      className="custom-style-menu-a"
                    >
                      Blood Donation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/social-awareness"}
                      className="custom-style-menu-a"
                    >
                      Social Awareness
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/charity-aid"}
                      className="custom-style-menu-a"
                    >
                      Charity & Aid
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={"/winter-cloth-distribution"}
                      className="custom-style-menu-a  mb-[-1px] "
                    >
                      Winter Cloth Distribution
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to={"/post"} className="custom-style-menu-a">
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink to={"/programs"} className="custom-style-menu-a">
                  Programs
                </NavLink>
              </li>
              {showOrg && (
                <li>
                  <NavLink
                    to={"/organizing-week"}
                    className="custom-style-menu-a"
                  >
                    Organizing Week
                  </NavLink>
                </li>
              )}
              {/*  profile */}

              {user && (
                <li>
                  <NavLink to={"/profile"} className="custom-style-menu-a">
                    Profile
                  </NavLink>
                </li>
              )}

              {/* login or sign out part */}
              <li>
                {user ? (
                  <Link className="custom-style-menu-a" onClick={handleLogout}>
                    Sign Out
                  </Link>
                ) : (
                  <NavLink to={"/login"} className="custom-style-menu-a">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          <div className="navbar-end  w-fit">
            <button
              className="border dark:border-zinc-800 p-3 rounded-full  text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] "
              onClick={handleChangeTheme}
            >
              <BsFillMoonStarsFill className="block dark:hidden   " />
              <BsFillSunFill className="dark:block hidden" />
            </button>
          </div>
        </div>
      </section>
      <LoadingBar
        color={"#f11946"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default Header;
