import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      onClick={() => loginWithPopup({ returnTo: window.location.origin })}
      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
      Sign Up
    </button>
  );
};

export default LoginButton;
