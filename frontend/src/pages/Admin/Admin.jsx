import React, { useState,useEffect } from "react";
import "./Admin.css";
import OrganiserCard from "../../components/OrganiserCard/OrganiserCard";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/ai"

const Admin = () => {

  const [OrganiserDetails,setOrganiserDetails] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `http://localhost:5000/api/organizers`
      );
      const resJson = await response.json();
      await setOrganiserDetails(resJson);
      console.log(resJson);
    };
    fetchApi();
  }, []);

  const menus = [
    { name: "Verify Organizers", link: "/", icon: AiFillCheckCircle },
    { name: "Approved Organizers", link: "/", icon: AiFillCheckCircle },
    { name: "Verify Events", link: "/", icon: AiFillCheckCircle },
    { name: "Approve Events", link: "/", icon: AiFillCheckCircle, margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72 z-40" : "w-16"
        } duration-500 text-gray-100 px-4 z-40`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 b-1/2">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Verify the Organisers
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Verify the Organisers to maintain the sanctitiy of the platform and prevent fake events. 
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        {OrganiserDetails?.map((organiser) => {
          console.log(organiser._id);
          return (
            <OrganiserCard
              id={organiser._id}
              OrganiserName={organiser.name}
              OrganiserEmail={organiser.email}
              OrganiserPhone={organiser.contact}
              OrganiserDocument={organiser.identityProof}
              OrganiserVerified={organiser.isVerified}
            />
            );
        })}
        </div>
      </div>
    </section>
  );
};

export default Admin;
