import Footer from "@/components/LandingPageElements/Footer";
import React ,{useState , useRef , useEffect} from "react";
import Image from "next/image";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";


const MENU_LIST = [
    {
        idx: 1,
        text: "About",
        href: "#about",
    },
    {
        idx: 2,
        text: "Login",
        href: "/loginPage",
    },
    {
        idx: 3,
        text: "Why Recruit us?",
        href: "#WhyUS",
    },
    {
        idx: 4,
        text: "Process",
        href: "#process",
    },
    {
        idx: 5,
        text: "Contact Us",
        href: "/",
    },
]

function Index() {

 const [currentIndex, setCurrentIndex] = useState(0);

 const slideRef = useRef();

 const removeAnimation = () => {
   slideRef.current.classList.remove("fade-anim");
 };
 const [isOpen, setIsOpen] = useState(false);
 useEffect(() => {
   slideRef.current?.addEventListener("animationend", removeAnimation);
  
 }, []);

  return (
    <div>
      <div className="fixed top-0 z-50">
        <div className="">
          <div className=" mx-auto z-50 bg-[#2c0707]  p-1 flex justify-between w-screen">
            <div className="flex">
              <div className="w-fit h-fit pt-2 mx-1 sm:m-0 sm:pt-0 sm:w-18 sm:h-12">
                <Image
                  width={50}
                  height={50}
                  alt="NIT Patna"
                  src="/images/logo.png"
                  className="sm:pb-1"
                />
              </div>
              <div className=" font-serif font-extrabold text-lg sm:text-2xl p-1 sm:p-2 flex items-center min-h-14 text-white ">
                Training and Placement Cell
              </div>
            </div>

            <div className="hidden lg:block h-10">
              <div className="flex flex-row-reverse items-center my-2">
                {MENU_LIST.map((menu) => (
                  <a href={menu.href} key={menu.idx}>
                    <a className="text-[#858383] hover:bg-[#67101075] self-center p-3 rounded-md text-sm font-medium hover:text-yellow-200">
                      {menu.text}
                    </a>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex lg:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex justify-center mx-auto pt-16">
        <div className="mt-3 pt-5">
          <p className="xl:text-4xl text-3xl text-center text-red-800 font-extrabold pt-4 pb-6 sm:w-4/6 w-5/6 mx-auto">
            WEB TEAM
          </p>
          <h1 className="text-gray-500 text-lg text-center font-normal pb-3">
            The creative minds behind the website of the Training and Placement
            Cell
          </h1>
        </div>
      </div>

      <section className=" sm:w-1/6 w-4/5  flex flex-row sm:mx-6">
        <label for="cars" clas sName=" sm:mx-6 mx-2 sm:w-1/2 py-1  sm:px-1">
          <p className="py-2">Year</p>
        </label>

        <select
          name="cars"
          id="cars"
          className=" bg-red-800 text-white rounded-lg px-4 mx-3 flex flex-row w-2/5 sm:w-1/2 "
        >
          <option
            value="volvo"
            className="sm:h-12 h-3 w-2/5 sm:w-1/2 rounded-lg hover:bg-white hover:text-red-800"
          >
            <p className=" bg-white w-2/5 sm:w-1/2  text-black hover:bg-red-800 hover:text-white">
              2020
            </p>
          </option>

          <option
            value="saab"
            className="sm:h-12 h-3 w-2/5 sm:w-1/2 rounded-lg hover:bg-white hover:text-red-800"
          >
            <p className="  bg-white  w-2/5 sm:w-1/2 text-black hover:bg-red-800 hover:text-white">
              2021
            </p>
          </option>
          <option
            value="mercedes"
            className="sm:h-12 h-3 w-2/5 sm:w-1/2 rounded-lg hover:bg-white hover:text-red-800"
          >
            <p className=" w-2/5 sm:w-1/2 bg-white text-black hover:bg-red-800 hover:text-white">
              2022
            </p>
          </option>
        </select>
      </section>

      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/boy_profile_3.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Rajdeep Sir
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Frontend and Backend Expert
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email :- rajdeepn.ug20.cse@nitp.ac.in
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="eather feather-linkedin text-blue-500 h-6 w-6"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/girl_profile_one.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Aayushi mam
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Frontend and Backend Expert
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email :- ayushig.ug20.cse@nitp.ac.in
                    {/* officiis. Delectus distinctio, non impedit pariatur ullam */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/boy_profile_one.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Rajan Sir
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Backend Expert
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email:- rajank.ug20.cse@nitp.ac.in
                    {/* beatae eaque eum, nam mollitia tempore, nemo modi nulla */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/boy_profile_two.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Sahitya aryan
                  </div>

                  <p className="text-gray-800 text-sm text-center">newbie</p>

                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email:- sahityaa.ug22.ec@nitp.ac.in
                    {/* omnis saepe quod laudantium officia! */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/boy_profile_one.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Ashutosh sir
                  </div>

                  <p className="text-gray-800 text-sm text-center">
                    Frontend Expert
                  </p>

                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email:- ashutoshk.ug22.cs@nitp.ac.in
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    officiis. Delectus distinctio, non impedit pariatur ullam
                    beatae eaque eum, nam mollitia tempore, nemo modi nulla
                    omnis saepe quod laudantium officia! */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/../public/images/boy_profile_3.png"
                      width={133}
                      height={133}
                      alt
                      className="rounded-lg object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    TNP 
                  </div>

                  <p className="text-gray-800 text-sm text-center">
                    Anonymous
                  </p>

                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    A UX designer is the voice 
                    {/* look beyond the business goals. We don't just experience
                    user interface but also questions it. */}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <FaLinkedinIn size={"1.4rem"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
