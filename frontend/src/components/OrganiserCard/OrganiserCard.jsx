import React from 'react';
import {Link} from 'react-router-dom';

const OrganiserCard = ({key,OrganiserName,OrganiserEmail,OrganiserDocument,OrganiserPhone}) => {
  console.log(OrganiserDocument);
  return (
    <div className="grid mx-10 gap-8 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
          <img src={OrganiserDocument} alt="" className="w-full " />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
              >
                {OrganiserEmail}
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {OrganiserName}
            </a>
            <p className="mb-2 text-gray-700">
              {OrganiserPhone}
            </p>
            <div className="">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-black text-bold text-lg">
                  {OrganiserName}
                </span>
              </p>
            </div>
            <div className="mt-5 text-center md:mb-16 lg:mb-5 px-8 md:flex lg:justify-evenly">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full md:h-12 md:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                View Document
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Verify
              </a>
            </div>
            <div className="flex justify-start items-center hover:text-deep-purple-accent-700">
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrganiserCard