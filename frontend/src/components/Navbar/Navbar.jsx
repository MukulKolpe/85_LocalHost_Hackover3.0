import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { motion } from "framer-motion";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setIsShown(true);
  };

  const hideModel = (event) => {
    setIsShown(false);
  };

  const collectData = async () => {
    let name = user.name;
    let email = user.email;
    let image = user.picture;
    let result = await fetch("http://localhost:5000/api/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        image,
      }),
    });

    result = await result.json();
    console.log(result);
  };

  collectData();

  return (
    <div className="bg-gray-900 shadow-md">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Eventify"
            title="Eventify"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Eventify
            </span>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/events"
                aria-label="Events"
                title="Events"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/organizer"
                aria-label=" Host an event"
                title=" Host an event"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Host an event
              </Link>
            </li>

            <li>
              {!isAuthenticated ? (
                <LoginButton />
              ) : (
                <motion.img
                  style={{ cursor: "pointer" }}
                  whileTap={{ scale: 0.98 }}
                  src={user.picture}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl rounded-full object-contain"
                  alt="user"
                  onClick={handleClick}
                />
              )}
            </li>
            {isShown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="model w-40 shadow-xl bg-gray-900  rounded-lg flex flex-col absolute top-12 right-0"
              >
                <button className="nav-btn nav-close-btn" onClick={hideModel}>
                  <FaTimes />
                </button>
                <span className="text">Welcome, {user.name}👋</span>

                <LogoutButton className="btn" />
              </motion.div>
            )}
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Eventify"
                        title="Eventify"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Eventify
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/events"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/organizer"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Host an event
                        </Link>
                      </li>

                      <li>
                        <button class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                          Sign Up
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
