import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end bg-beige-200 items-end absolute top-4 right-10 pr-2">
      {/* Buttons */}

      <div>
        <button className="bg-beige-200 hover:bg-lightorange-200 text-black font-bold py-1 px-5 ml-4 rounded">
          Login
        </button>
      </div>

      <div>
        <button
          onClick={() => navigate("register")}
          className="bg-beige-200 hover:bg-lightorange-200 text-black font-bold py-1 px-5 ml-4 rounded"
        >
          Sign Up
        </button>
      </div>

      {/* User icon */}
      <div className="px-1 py-1 hover:bg-lightorange-200 ml-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faUser} size="2x" color="" />
      </div>
    </div>
  );
}
export default Signup;
