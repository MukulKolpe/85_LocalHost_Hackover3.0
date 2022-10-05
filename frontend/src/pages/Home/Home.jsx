import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../assets/New.svg";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Eventify
              <br className="text-center hidden md:block" />
              Events Brought
              <br className="hidden md:block" />
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="text-center relative inline-block text-deep-purple-accent-400">
                  Closer To You
                </span>
              </span>
            </h2>
            <p className="md:text-lg text-slate-700 text-bold">
              Eventify is a platform that allows you to find events near you and
              also allows you to create events.
            </p>
            <div className="mb-10 mt-5 text-center md:mb-16 lg:mb-20">
              <Link
                to="/events"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Popular Events
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <img className="image" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
