import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

const OrganiserCard = ({id,OrganiserName,OrganiserEmail,OrganiserDocument,OrganiserPhone,OrganiserVerified}) => {
  
  const [showModal, setShowModal] = useState(false);

  const[isVerified,setIsVerified] = useState(false);

  const handleSubmit = async () => {
    console.log(isVerified);
    let organizer = await fetch(`http://localhost:5000/api/organizers/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: OrganiserName,
            email: OrganiserEmail,
            identityProof: OrganiserDocument,
            isVerified: isVerified,
            contact: OrganiserPhone
          }),
        });
        console.log("Soham")
        console.log(organizer.json());
  };
  return (
    <div className="grid mx-10 gap-8 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg ">
          <img src={OrganiserDocument} alt="" className="w-full " />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide">
              <div
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
              >
                <span className="text-black font-semibold">Email: </span> {OrganiserEmail}
              </div>
              
            </p>
            <div
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {OrganiserName}
            </div>
            <p className="mb-2 text-gray-700">
              Contact No.: {OrganiserPhone}
            </p>
            <div className="">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">

              </p>
            </div>
            <div className="mt-5 text-center md:mb-16 lg:mb-5 px-8 md:flex lg:justify-evenly">
              <button
              type="button"
              onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center w-full md:h-10 md:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                View Document
              </button>
              <button
              onClick={() => {setIsVerified(true);handleSubmit()}}
                className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Verify
              </button>
            </div>
            <div className="flex justify-start items-center hover:text-deep-purple-accent-700">
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Organiser Identity Document
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={OrganiserDocument} alt="document" />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="inline-flex items-center justify-center w-full md:h-8 md:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
  )
}

export default OrganiserCard