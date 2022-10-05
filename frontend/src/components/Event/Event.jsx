import React from "react";
import { RiChatFollowUpFill } from "react-icons/ri";
const Event = ({ event }) => {
  return (
    <div className="px-4 py-8 mx-5 sm:max-w-xl lg:w-[400px] md:w-[350px] md:px-6 lg:px-8 lg:py-10 sm:mx-auto rounded-xl">
      <div className="grid mx-10 gap-8 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
          <img src={event.image} alt="" className="w-full " />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
              >
                {event.tags}{" "}
              </a>
              <span className="text-gray-600 text-md">
                - {event.date}@{event.time}{" "}
              </span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {event.title}
            </a>
            <p className="mb-2 text-gray-700">
              {event.description.substring(0, 75) + "..."}
            </p>
            <div className="">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="text-lg transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                >
                  {event.location}
                  {"  "}
                </a>
                <span className="text-black text-bold text-lg">
                  - Price ₹{event.price}
                </span>
              </p>
            </div>
            <div className="mt-5 text-center md:mb-16 lg:mb-5">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
            <div className="flex justify-start items-center hover:text-deep-purple-accent-700">
              <RiChatFollowUpFill className="w-5 h-5 " />
              <a
                href="/"
                className="transition-colors font-bold duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;