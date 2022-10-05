import React, { useState } from "react";
import "./Organizer.css";
import FileBase64 from "react-file-base64";
import Image from "../../assets/img.svg";

const Organizer = () => {
  const [organizerName, setOrganizerName] = useState("");
  const [organizerEmail, setOrganizerEmail] = useState("");
  const [organizerPhoneNumber, setOrganizerPhoneNumber] = useState("");
  const [organizerIdentification, setOrganizerIdentification] = useState("");

  const handleSubmit = async () => {
    let organizer = await fetch(`http://localhost:5000/api/organizers/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: organizerName,
        email: organizerEmail,
        contact: organizerPhoneNumber,
        identityProof: organizerIdentification,
      }),
    });

    console.log(organizer.json());
  };
  if (handleSubmit) {
    return (
      <div className="form-submitted">
        <div>
          <img src={Image} alt="Thank you" width="400px" />
        </div>
        <div className="text-content">
          <h2 className="text1">Thank you for showing interest!</h2>
          <p className="text2">We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex w-[600px] items-center justify-center ">
        <div className="w-full">
          <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-3">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="organizerName"
                type="text"
                placeholder="Organizer Name"
                onChange={(e) => setOrganizerName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Organizer Email"
                onChange={(e) => setOrganizerEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                placeholder="Organizer Phone Number"
                onChange={(e) => setOrganizerPhoneNumber(e.target.value)}
              />
            </div>
            <label className="block text-white text-sm font-bold mb-2">
              Add Identification
            </label>
            <div className="flex justify-center items-center w-full">
              <label className="flex flex-col justify-center items-center w-full h-34 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-800 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Image size should be less than 1MB
                  </p>
                </div>
                {/* <input
                  id="dropzone-file"
                  type="file"
                  className=""
                  onChange={(e) =>
                    setOrganizerIdentification(e.target.files[0])
                  }
                /> */}

                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setOrganizerIdentification(base64)}
                />
              </label>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                className="bg-white hover:bg-gray-300 mt-4 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
